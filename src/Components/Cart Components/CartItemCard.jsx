import styles from "./CartItemCard.module.css";

const CartItemCard = ({ item, handleEdit }) => {
    if ( !item.title ) return <></>
    const name = item.title.length > 38 ? item.title.slice( 0, 36 ) + " ..." : item.title;
    return (
        <div className={styles.root}>
            <img className={styles.img} src={item.images[0]} alt={item.title} />
            <div className={styles.details}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.meta}>
                    <p>Size: {item.sizes[0]}</p>
                    <p>Qty: {item.qty}</p>
                </div>
                <p className={styles.price}>&#8377;{item.discounted_price}</p>
            </div>
            <div className={styles.btn} onClick={handleEdit}>EDIT</div>
        </div>
    );
};

export default CartItemCard;