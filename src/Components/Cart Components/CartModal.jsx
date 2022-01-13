import styles from './CartModal.module.css';
import {ReactComponent as ReactLogo} from '../../SVG/CartCloseIcon.svg';

const CartModal = ({ onClose, open, children, label }) => {

    return (
        <div className={`${styles.rootModal} ${ open && styles.displayBlock }`}>
            <section className={styles.rootMain}>
                <div className={styles.head}>
                    <h2>{label}</h2>
                    <ReactLogo onClick={onClose} />
                </div>
                <hr />
                {children}
            </section>
        </div>
    );
};

export default CartModal;