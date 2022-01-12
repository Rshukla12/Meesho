import { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import styles from "./CardDetails.module.css";
import CartModal from "./CartModal";
import CartModalItem from "./CartModalItem";
import { useDispatch } from "react-redux";
import { changeQty, removeFromCart } from "../../Redux/Cart/actions";

const CartDetails = ({cart}) => {
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
                    <h5>Cart</h5>
                    <p>{qty} Item</p>
                </div>
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