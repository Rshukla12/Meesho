import styles from "./navbar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
const NavBar =()=>{
    return(
    <div className={styles.Main_Header}>
        <div>
        <div className={styles.upper}>
            <div className={styles.header_conatainer}>
                <div className={styles.header_logo}>
                    <img src="https://miro.medium.com/max/1200/1*vNRDrFBkpQ9CtWZ33fScng.png" alt="Header_Logo" />
                </div>
                <div className={styles.Search_Input}>
                    <div className={styles.icon}>
                    <SearchIcon/>
                    </div>
                    <input className={styles.search_input} type="text" placeholder="Try Saree, Kurti or Search by Product Code"/>
                </div>
                <div className={styles.cards_container}>
                    <div className={styles.cards}>
                        <PhoneAndroidIcon/>
                        <p>Download App</p>
                        <div className={styles.dropdownContent}>
                            <h5>Downlaod From</h5>
                            <h5>Downlaod From</h5>
                            <h5>Downlaod From</h5>
                        </div>
                    </div>
                    <div style={{width:"2px",height:"40px",backgroundColor:"lightgray"}}></div>
                    <div>Become A Supplier</div>
                    <div style={{width:"2px",height:"40px",backgroundColor:"lightgray"}}></div>
                    <div className={styles.profile}>
                        <PermIdentityIcon/>
                        <p>Profile</p>
                        <div className={styles.profileContent}>
                            <h3>Hello User</h3>
                            <p>To access your Meesho account</p>
                            <Button variant="contained">SIGN UP</Button>
                            <div className={styles.dividerLines}></div>
                            <h4>My Orders</h4>

                        </div>
                    </div>

                    <div>
                        <ShoppingCartIcon/>
                        <p>Cart</p>
                    </div>


                </div>
            
            </div>
        </div>
        </div>
        <div className={styles.dividerLines}></div>
        <div className="links"></div>
    </div>
    )
}

export default NavBar;