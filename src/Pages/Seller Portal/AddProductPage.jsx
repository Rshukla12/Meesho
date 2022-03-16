import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import InputField from "../../Components/Cart Components/Input/InputField";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import LoadingIndicator from "../../Components/Loading Indicator/LoadingIndicator";
import { Alert, FormControl, Modal, Slide, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct, setDefault } from "../../Redux/Seller/actions";

import {ReactComponent as ReactLogo} from '../../SVG/CartCloseIcon.svg';

import priceStyles from "../../Components/Cart Components/PriceDetails.module.css";
import modalStyles from "../../Components/Cart Components/CartModalItem.module.css";
import styles from "./AddProductPage.module.css";
import { Box } from "@mui/system";
import { Productcard } from "../Productadd";
import { useHistory } from "react-router-dom";

const initData = {
    "category": "",
    "title": "",
    "original_price": "",
    "discounted_price": "",
    "sizes": [],
    "images": [],
    "details": {
        "Fabric": "",
        "Pattern": "",
        "Multipack": "",
        "Description": ""
    },
    "rating": 2,
    "seller_id": 3
}


export const TransitionDown = (props) => {
    return <Slide {...props} direction="down" />;
}

const AddProductPage = () => {
    const [state, setState] = useState(initData);
    const { isLoading, isError, error, isSuccess } = useSelector(state => state.seller, shallowEqual);
    const [errorState, setErrorState] = useState(() => new Array(10).fill(0));
    const [test, setTest] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        let { name, value } = e.target;
        if ( name === "sizes" || name === "images" ) value = value.split(",");
        setState({
            ...state,
            [name]: value
        });
    };

    const handleChangeDetails = (e) => {
        setState({
            ...state,
            details: {
                ...state.details,
                [e.target.name]: e.target.value
            }
        });
    };

    const checkErr = ( state ) => {
        let res = 0;
        const updateArr = [...errorState];
        for (const item in state) {
            if (item === "details") {
                for (const add in state.details) {
                    if (state.details[add].length === 0) updateArr[res] = 1;
                    else updateArr[res] = 0;
                    res++;
                }
            } else {
                if (state[item].length === 0) updateArr[res] = 1;
                else updateArr[res] = 0;
                res++;
            }
        };
        setErrorState(updateArr);
        for (const item of updateArr) {
            if (item === 1) return false;
        }
        return true;
    }

    const handleSubmit = () => {
        if ( checkErr(state) ) dispatch(addProduct(state));
    };

    const handleTest = () => {
        if ( checkErr(state) ) setTest(true);
    }

    useEffect(() => {
        setState(initData);
        setTimeout(()=> {
            dispatch( setDefault() );
        }, 2000)
    }, [dispatch, isSuccess, isError]);

    return (
        <div className={styles.root}>
            {
                isLoading ? (
                    <LoadingIndicator />
                ) : (
                    <div className={styles.main}>
                        <h1>Add New Product</h1>
                        <div className={styles.rowParent}>
                            <h2>General Info About Product</h2>
                            <div className={styles.row} >
                                <InputField
                                    isError={errorState[1]}
                                    error="This field is required!"
                                    value={state.title}
                                    onChange={handleChange}
                                    name="title"
                                    required={true}
                                    label="Title"
                                    />
                                <Box sx={{ width: 480 }} >
                                    <FormControl fullWidth>
                                        <InputLabel sx={{color: "#ff4397"}} id="category-label">Category</InputLabel>
                                        <Select
                                            sx={{color: "#ff4397", borderColor: "#ff4397"}}
                                            labelId="category-label"
                                            id="category-select"
                                            value={state.category}
                                            onChange={handleChange}
                                            label="Category"
                                            name="category"
                                        >
                                            {
                                                ["Sarees", "Jewellery", "Dresses", "Mens Top Were", "Beauty and health", "Bags and Footwear", "Home and Kitchen"].map((el, ind) => (
                                                    <MenuItem key={ind} value={el}>{el}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        
                        <div className={styles.rowParent}>
                            <h2>Price of Product</h2>
                            <div className={styles.row} >
                                <InputField
                                    isError={errorState[2]}
                                    error="This field is required!"
                                    value={state.original_price}
                                    onChange={handleChange}
                                    name="original_price"
                                    required={true}
                                    label="Original Price"
                                />
                                <InputField
                                    isError={errorState[3]}
                                    error="This field is required!"
                                    value={state.discounted_price}
                                    onChange={handleChange}
                                    name="discounted_price"
                                    required={true}
                                    label="Discounted Price"
                                />
                            </div>
                        </div>
                        
                        <div className={styles.rowParent}>
                            <h2>Details About Product</h2>
                            <div className={styles.row}>

                                <InputField
                                    isError={errorState[6]}
                                    error="This field is required!"
                                    value={state.details.Fabric}
                                    onChange={handleChangeDetails}
                                    name="Fabric"
                                    required={true}
                                    label="Fabric/Material"
                                />
                                <InputField
                                    isError={errorState[7]}
                                    error="This field is required!"
                                    value={state.details.Pattern}
                                    onChange={handleChangeDetails}
                                    name="Pattern"
                                    required={true}
                                    label="Pattern/Design"
                                />
                                <InputField
                                    isError={errorState[8]}
                                    error="This field is required!"
                                    value={state.details.Multipack}
                                    onChange={handleChangeDetails}
                                    name="Multipack"
                                    required={true}
                                    label="Multipack"
                                />
                                <InputField
                                    isError={errorState[9]}
                                    error="This field is required!"
                                    value={state.details.Description}
                                    onChange={handleChangeDetails}
                                    name="Description"
                                    required={true}
                                    label="Description"
                                />
                            </div>
                        </div>
                        
                        <div className={styles.rowParent}>
                            <h2>More Info</h2>
                            <div className={styles.row}>
                                <InputField
                                    isError={errorState[4]}
                                    error="This field is required!"
                                    value={state.sizes}
                                    onChange={handleChange}
                                    name="sizes"
                                    required={true}
                                    label="Sizes (Sperated by , )"
                                />
                                <InputField
                                    isError={errorState[5]}
                                    error="This field is required!"
                                    value={state.images}
                                    onChange={handleChange}
                                    name="images"
                                    required={true}
                                    label="Image URL's (Sperated by , )"
                                />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <button 
                                className={`${priceStyles.continue} ${styles.btn} ${modalStyles.saveChanges}`} 
                                onClick={handleTest}
                            >
                                Test View
                            </button>
                            <button 
                                className={`${priceStyles.continue} ${styles.btn} ${modalStyles.saveChanges}`} 
                                onClick={handleSubmit}
                            >
                                Add Product
                            </button>
                        </div>
                        <Snackbar open={isSuccess} TransitionComponent={TransitionDown} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={()=>history.pushState("/seller")} autoHideDuration={1000}>
                            <Alert onClick={()=>history.pushState("/seller")} severity="success" sx={{ width: '100%', minWidth: "30rem" }}>
                                Product Added Successfully!
                            </Alert>
                        </Snackbar>
                        <Snackbar open={isError} TransitionComponent={TransitionDown} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={()=>history.pushState("/seller")} autoHideDuration={1000}>
                            <Alert severitonClick={()=>history.pushState("/seller")} y="error" sx={{ width: '100%', minWidth: "30rem" }}>
                                Product Not Added! Error - {error}
                            </Alert>
                        </Snackbar>
                        <Modal open={test} onClose={()=>setTest(false)} >
                            <div className={styles.product}>
                                <h1>Test View</h1>
                                <Productcard url={state.images} title={state.title} discountAmt={state.discounted_price} Amt={state.original_price} rate={state.rating} d1={state.details.Fabric} d2={state.details.Multipack} d3={state.details.Multipack} d4={state.details.Description} handleClick={()=>setTest(false)}  />
                                <div onClick={()=>setTest(false)}>
                                    <ReactLogo />
                                    <h3>Close</h3>
                                </div>
                            </div>
                        </Modal>
                    </div>
                )
            }

        </div>
    );
};

export default AddProductPage;