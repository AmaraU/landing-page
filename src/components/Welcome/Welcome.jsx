import React from "react";
import styles from "./Welcome.module.css";
import { getImageURL } from "../../utils";

export const Welcome = () => {
    return (
        <div>
            <div className={styles.bread}>
                <ul className={styles.crumb}>
                    <li><a className={styles.home} href="#">Home</a></li>
                </ul>
            </div>
            <div className={styles.welcome}>
                <div className={styles.words}>
                    <div>
                        <h1 className={styles.heading}>Ecosystem Of Solutions That Work.</h1>
                        <p className={styles.description}>Empowering Your Business Growth With User-Centric Solutions that make life and business easy.</p>
                        <div className={styles.buttons}>
                            <button className={styles.buttonOne}>See Our Solutions</button>
                            <button className={styles.buttonTwo}>Book A Demo</button>
                        </div>
                    </div>               
                </div>

                <div className={styles.revolve}>
                    <div className={styles.atom}>

                        <div className={styles.logo}>
                            <div className={styles.circle1}>
                                <div className={styles.circle2}>
                                    <div className={styles.circle3}>
                                        <img className={styles.logo} src="/tfl-logo.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.path} ${styles.one}`}>
                            <div className={`${styles.ball} ${styles.ball1} ${styles.animation}`}>
                                <img src={getImageURL("logos/MP.png")} alt="MP" className={styles.image1} />
                            </div>
                        </div>
                        <div className={`${styles.path} ${styles.two}`}>
                            <div className={`${styles.ball} ${styles.ball2} ${styles.animation}`}>
                                <img src={getImageURL("logos/SG.png")} alt="SG" className={styles.image2} />
                            </div>
                        </div> 
                        <div className={`${styles.path} ${styles.three}`}>
                            <div className={`${styles.ball} ${styles.ball3} ${styles.animation}`}>
                                <img src={getImageURL("logos/FE.png")} alt="FE" className={styles.image3} />
                            </div>
                        </div> 
                        <div className={`${styles.path} ${styles.four}`}>
                            <div className={`${styles.ball} ${styles.ball4} ${styles.animation}`}>
                                <img src={getImageURL("logos/KP.png")} alt="KP" className={styles.image4} />
                            </div>
                        </div> 
                        <div className={`${styles.path} ${styles.five}`}>
                            <div className={`${styles.ball} ${styles.ball5} ${styles.animation}`}>
                                <img src={getImageURL("logos/F.E.png")} alt="F.E" className={styles.image5} />
                            </div>
                        </div> 
                        <div className={`${styles.path} ${styles.six}`}>
                            <div className={`${styles.ball} ${styles.ball6} ${styles.animation}`}>
                                <img src={getImageURL("logos/UCP.png")} alt="UCP" className={styles.image6}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
