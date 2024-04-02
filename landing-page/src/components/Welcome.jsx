import React from "react";
import styles from "./Welcome.module.css";

export const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.words}>
                <p className={styles.home}>Home</p>
                <h1 className={styles.heading}>Ecosystem Of Solutions That Work.</h1>
                <p className={styles.description}>Empowering Your Business Growth With User-Centric Solutions that make life and business easy.</p>
                
                <div className={styles.buttons}>
                    <button className={styles.buttonOne}>See Our Solutions</button>
                    <button className={styles.buttonTwo}>Book A Demo</button>
                </div>
            </div>

            <div className={styles.revolve}>
                <div className={styles.atom}>
                    <div className={styles.logo}>
                        <div className={styles.circle1}></div>
                        <div className={styles.circle2}></div>
                        <div className={styles.circle3}></div>
                        <img className={styles.logo} src="/tfl-logo.png" alt="logo" />
                    </div>
                    <div className={`${styles.path} ${styles.one}`}>
                        <div className={`${styles.ball} ${styles.ball1}`}>
                            <div className={styles}/>
                        </div>
                    </div>
                    <div className={`${styles.path} ${styles.two}`}>
                        <div className={`${styles.ball} ${styles.ball2}`}></div>
                    </div> 
                    <div className={`${styles.path} ${styles.three}`}>
                        <div className={`${styles.ball} ${styles.ball3}`}></div>
                    </div> 
                    <div className={`${styles.path} ${styles.four}`}>
                        <div className={`${styles.ball} ${styles.ball4}`}></div>
                    </div> 
                    <div className={`${styles.path} ${styles.five}`}>
                        <div className={`${styles.ball} ${styles.ball5}`}></div>
                    </div> 
                    <div className={`${styles.path} ${styles.six}`}>
                        <div className={`${styles.ball} ${styles.ball6}`}></div>
                    </div> 
                </div>
            </div>

        </div>
    )
}