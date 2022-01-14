import { ReactComponent as CallIcon } from "../../SVG/CallIcon.svg";
import { ReactComponent as LocationIcon } from "../../SVG/LocationIcon.svg";
import { useState } from "react";

import priceStyles from "./PriceDetails.module.css";
import modalStyles from "./CartModalItem.module.css";
import styles from "./CartAddress.module.css";
import InputField from "./Input/InputField";

const initState = {
    name: "",
    phone: "",
    address: {
        house: "",
        area: "",
        pincode: "",
        city: "",
        state: "",
        landmark: ""
    }
};

const CartAddress = ({handelSave}) => {
    const [state, setState] = useState(initState);
    const [error, setError] = useState(() => new Array(7).fill(0));

    const handleTopChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleAddChange = (e) => {
        setState({
            ...state,
            address: {
                ...state.address,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = () => {
        let res = 0;
        let flag = true;
        const updateArr = [...error];
        for ( const item in state ){
            if ( item === "address" ){
                for ( const add in state.address){
                    if ( state.address[add].length === 0 ) updateArr[res] = 1;
                    else if ( add === "pincode" && state.address[add].length < 6 ) updateArr[res] = 1;
                    else updateArr[res] = 0;   
                    res++;;
                    if ( res === 5 ) break;
                }
            } else {
                if ( state[item].length === 0 ) updateArr[res] = 1;
                else if ( item === "phone" && state[item].length < 10 ) updateArr[res] = 1;
                else updateArr[res] = 0;
                res++;
            }
        };
        for ( const item of updateArr ){
            if ( item === 1 ) flag = false;
        }
        if ( flag ) handelSave(state);
        setError( updateArr );
    }

    return (
        <div className={styles.root}>
            <div>
                Select Delivery Address
            </div>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <CallIcon />
                    <h1>Contact Details</h1>
                </div>
                <InputField 
                    type="text"
                    name="name" 
                    required={true} 
                    val={state.name} 
                    isError={error[0]}
                    onChange={handleTopChange} 
                    label="Name"
                />
                <InputField 
                    type="number"
                    name="phone" 
                    required={true} 
                    val={state.phone} 
                    isError={error[1]}
                    maxLen={10}
                    onChange={handleTopChange} 
                    label="Phone Number" 
                />
                <div className={styles.heading}>
                    <LocationIcon />
                    <h1>Address</h1>
                </div>
                <InputField 
                    type="text"
                    name="house" 
                    required={true} 
                    val={state.address.house} 
                    isError={error[2]}
                    onChange={handleAddChange} 
                    label="House no. / Building Name" 
                />
                <InputField 
                    type="text"
                    name="area" 
                    required={true} 
                    val={state.address.area} 
                    isError={error[3]}
                    onChange={handleAddChange} 
                    label="Road Name / Area / Colony" 
                />
                <InputField 
                    type="number"
                    name="pincode"
                    maxLen={6} 
                    required={true} 
                    val={state.address.pincode} 
                    isError={error[4]}
                    onChange={handleAddChange} 
                    label="Pincode" 
                />
                <div className={styles.city}>
                    <InputField 
                        type="text"
                        name="city" 
                        required={true} 
                        val={state.address.city} 
                        isError={error[5]}
                        onChange={handleAddChange} 
                        label="City" 
                    />
                    <InputField 
                        type="text"
                        name="state" 
                        required={true} 
                        val={state.address.state} 
                        isError={error[6]}
                        onChange={handleAddChange} 
                        label="State" 
                    />
                </div>
                <InputField 
                    type="text"
                    name="landmark" 
                    val={state.address.landmark} 
                    isError={error[7]}
                    onChange={handleAddChange} 
                    label="Nearby Location (optional) " 
                />
                <button 
                    className={`${priceStyles.continue} ${modalStyles.saveChanges}`} 
                    onClick={handleSubmit}
                >
                    Save Address and Continue
                </button>
            </div>
        </div>
    );
};

export default CartAddress;