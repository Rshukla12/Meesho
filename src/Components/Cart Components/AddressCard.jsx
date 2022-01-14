import styles from "./AddressCard.module.css";

const AddressCard = ({ add }) => {

    if ( !add.name ) return <></>;

    return (
        <div className={styles.root}>
            <h3>{add?.name}</h3>
            <div className={styles.add} >
                <div>{ add?.address?.house }, { add?.address?.area }, { add?.address?.city },</div>
                <div>{ add?.address?.state } - { add?.address?.pincode }</div>
                <div>+91 { add?.phone }</div>
            </div>
        </div>
    )
};

export default AddressCard;