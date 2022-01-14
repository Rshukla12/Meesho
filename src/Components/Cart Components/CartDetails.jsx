import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import CartItemCard from "./CartItemCard";
import styles from "./CartDetails.module.css";
import CartModal from "./CartModal";
import CartModalItem from "./CartModalItem";

import { ReactComponent as TruckIcon } from "../../SVG/CartTruckIcon.svg";

import { changeQty, removeFromCart } from "../../Redux/Cart/actions";

const CartDetails = ({ cart, isSummary=false }) => {
    const [qty, setQty] = useState(0);
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        let res = 0;
        cart.forEach((curr) => res += curr.qty );
        setQty( res );
    }, [cart]);

    const handleEdit = ( ind ) => {
        setActive( ind );
        setOpen( true );
    };

    const handleSave = (qty) => {
        dispatch( changeQty( cart[active].id, qty ) );
        setOpen(false);
    }

    const handleDelete = () => {
        dispatch( removeFromCart( cart[active].id ) );
        setOpen(false);
    }

    return (
        <>
            <div className={styles.root}>
                <div className={styles.cartTotal}>
                    { 
                        isSummary ? (
                            <div>Product Details</div>
                        ) : (
                            <>
                                <div>Cart</div>
                                <p>{qty} Item</p>
                            </>
                        )
                    }
                </div>
                { isSummary && (
                        <div className={styles.priceHead}>
                            <TruckIcon />
                            <div>
                                Estimated Delivery by Tuesday, 25th Jan
                            </div>
                        </div> 
                    )
                }
                <div className={styles.cards}>
                    {
                        cart?.map( (item, ind )=> (
                            <div key={item.id}>
                                <CartItemCard
                                    item={item}
                                    handleEdit={()=>handleEdit(ind)}
                                />
                                { (ind !== cart?.length - 1  )  && <hr />}
                            </div>
                        ))
                    }
                </div>
            </div>
            <CartModal open={open} onClose={()=>setOpen(false)} label="EDIT ITEM">
                { cart[active] && <CartModalItem item={cart[active]} handleDelete={handleDelete}  handleSave={handleSave} /> } 
            </CartModal>
        </>
    )
};

export default CartDetails;