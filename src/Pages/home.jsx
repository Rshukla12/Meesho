import React from "react";
import styles from "./home.module.css";
const Home = ()=>{
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        Lowest PricesBest Quality Shopping
                    </div>
                    <div className={styles.title1}>
                        50 lakh+ Styles | 650+ categories
                    </div>
                    <div className={styles.button}>
                        <img src="https://listimg.pinclipart.com/picdir/s/383-3838657_apple-logo-play-store-logo-download-clipart.png"/>
                        <span>Download the Meesho App</span>
                    </div>
                </div>
                <div className={styles.container1}>
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.hr}></div>
                <div className={styles.hrtitle}>Top Categories to choose from</div>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.banner1}>
                <div className={styles.img}>
                    <img src="https://images.meesho.com/images/marketing/1631611172021.png"/>
                </div>
                <div className={styles.temp}>
                    <img src="https://images.meesho.com/images/marketing/1631610854491.png"/>
                </div>
                <div className={styles.temp}>
                    <img src="https://images.meesho.com/images/marketing/1631611208025.png"/>
                </div>
            </div>
            <div className={styles.banner2}>
                <div className={styles.tbox}>
                    <span>Homecare</span>
                    <button>VIEW ALL</button>
                </div>
                <div className={styles.cardBox}>
                    <div className={styles.card}>
                        <img src="https://images.meesho.com/images/marketing/1629883981751.png"/>
                    </div>
                    <button>Bedsheets</button>
                </div>    
                <div className={styles.cardBox}>
                    <div className={styles.card}>
                        <img src="https://images.meesho.com/images/marketing/1629884011960.png"/>
                    </div>    
                    <button>Kitchenware</button>
                </div>
                <div className={styles.cardBox}>
                    <div className={styles.card}>
                        <img src="https://images.meesho.com/images/marketing/1629883997863.png"/>
                    </div>
                    <button>Carpets</button>
                </div>   
            </div>
            <div className={styles.banner3}>
                <div className={styles.banner3container}>
                    <h4>Become a Reseller and</h4>
                    <h1>Start your Online Business</h1>
                    <h1>with Zero Investment</h1>
                    <div className={styles.banner3ibox}>
                        <img src="https://meesho.com/_next/static/images/playstore-a7dfd2afcd42f96d491912cbec2d6fa2.png"/>
                        <img src="https://meesho.com/_next/static/images/appstore-a689c2ac38f3ed1ab7e7b39e98aaf15a.png"/>
                    </div>
                </div>
            </div>
            <div className={styles.banner4}>
            </div>
        </div>
    )
}
export default Home;