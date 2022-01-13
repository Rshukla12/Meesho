import styles from "./navbar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
const NavBar =()=>{
    const SignUpButton = styled(Button)({
    boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  width:"80%",
  padding: '12px',
  margin:"auto",
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#f43397',
  borderColor: '#f43397',
  '&:hover': {
    backgroundColor: '#f43397',
    borderColor: '#f43397',
    boxShadow: 'none',
  },
});
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
                    <div className={styles.downloadCard}>
                    <div  className={styles.cards}>
                        <PhoneAndroidIcon className={styles.android}/>
                        <p>Download App</p>
                        <div className={styles.dropdownContent}>
                            <h5>Downlaod From</h5>
                            <h5>Downlaod From</h5>
                            <h5>Downlaod From</h5>
                        </div>
                    </div>
                    </div>
                    <div style={{width:"2px",height:"40px",backgroundColor:"lightgray"}}></div>
                    <div>Become A Supplier</div>
                    <div style={{width:"2px",height:"40px",backgroundColor:"lightgray"}}></div>
                    <div className={styles.profileCard}>
                    <div className={styles.profile}>
                        <PermIdentityIcon/>
                        <p>Profile</p>
                        <div className={styles.profileContent}>
                            <p style={{fontSize :"18px",marginBlockStart:"0.5em",marginBlockEnd:"0.2em",fontWeight:"bold"}}>Hello User</p>
                            <p style={{fontSize:"12px",marginBlockEnd:"0.5em"}}>To access your Meesho account</p>
                            <SignUpButton variant="contained">SIGN UP</SignUpButton>
                            <div className={styles.dividerLines}></div>
                            <h4 style={{alignItems:"center"}}><ShoppingBagIcon fontSize="medium"/>My Orders</h4>

                        </div>
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
        <div className={styles.links}>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
            <div><a href="">Mens Wear</a></div>
        </div>
    </div>
    )
}

export default NavBar;