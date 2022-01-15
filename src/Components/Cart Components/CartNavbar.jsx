import {ReactComponent as CartLogo} from '../../SVG/CartLogoIcon.svg';
import styles from "./CartNavbar.module.css";
import { useHistory } from "react-router-dom";

const details = [
    "Cart", "Address", "Payment", "Summary"
];

const CartNavbar = ({ active=1 }) => {
    const history = useHistory();

    return (
        <div className={styles.root}>
            <div onClick={()=> history.push("/")} className={styles.logo}>
                <CartLogo />
            </div>
            <ul className={styles.list}>
                {
                    details.map( (stage, ind) => (
                        <li key={ind*2012} className={`${ind + 1 <= active ? styles.activeListItem : styles.listItem} ${ ind=== 0 ? styles.firstChild : ""}`  }>
                            <div>{ind + 1}</div>
                            <div>{stage}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default CartNavbar;