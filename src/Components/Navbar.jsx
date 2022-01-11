import styles from "./navbar.module.css";

const NavBar =()=>{
    return(
    <div className={styles.Main_Header}>
        <div className={styles.upper}>
            <div className={styles.header_conatainer}>
                <div className={styles.header_logo}>
                    <img src="https://miro.medium.com/max/1200/1*vNRDrFBkpQ9CtWZ33fScng.png" alt="Header_Logo" />
                </div>

            </div>

        </div>

    </div>
    )
}

export default NavBar;