import styles from "./NavbarFloat.module.css";

const NavbarFloat = ({
    textArr,
    onClick
}) => {
    return (
        <div onClick={onClick} className={styles.root}>
            {
                textArr.map( (text, ind) => (
                    <div className={styles.column} >
                        {
                            text.map( ( el, ind ) => (
                                <div className={ ind === 0 ? styles.head : styles.body }>
                                    {el}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default NavbarFloat;