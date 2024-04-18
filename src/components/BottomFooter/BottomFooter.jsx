import React from "react";
import styles from "./BottomFooter.module.css";
import { getImageURL } from "../../utils";

export const BottomFooter = () => {
    return (
        <div className={styles.whole}>

            <div className={styles.theTop}>
                <div className={styles.partOne}>
                    <img src={getImageURL("logos/whiteLogo.png")} alt="fifthlab" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
                    <span>
                        <img src={getImageURL("icons/whiteFB.png")} alt="" />
                        <img src={getImageURL("icons/whiteTwitter.png")} alt="" />
                        <img src={getImageURL("icons/whiteInsta.png")} alt="" />
                        <img src={getImageURL("icons/whiteLI.png")} alt="" />
                    </span>
                    <img src={getImageURL("NDPR.png")} alt="" />
                </div>

                <div className={styles.partTwo}>
                    <div className={styles.product}>
                        <p>Product</p>
                        <ul>
                            <li><a href="">Bulkwave</a></li>
                            <li><a href="">FinEdge</a></li>
                            <li><a href="">CashMgt</a></li>
                            <li><a href="">Kulean Pay</a></li>
                            <li><a href="">Smerp</a></li>
                            <li><a href="">UCP</a></li>
                        </ul>                       
                    </div>
                    <div className={styles.company}>
                        <p>Company</p>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className={styles.support}>
                        <p>Support</p>
                        <ul>
                            <li><a href="">Getting started</a></li>
                            <li><a href="">Help center</a></li>
                            <li><a href="">Server status</a></li>
                            <li><a href="">Report a bug</a></li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <p>Contact</p>
                        <ul>
                            <li>
                                <span>
                                    <img src={getImageURL("icons/email.png")} alt="" />
                                    <a href="">Hello@thefifthlab.com</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={getImageURL("icons/phone.png")} alt="" />
                                    <a href="">+234 816 235 2009</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={getImageURL("icons/location.png")} alt="" />
                                    <a href="">7 Joshua Ebun Ojo Cl, Lekki Phase I, Lekki 106104, Lagos, Nigeria.</a>
                                </span>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div className={styles.theBottom}>
                <div className={styles.theLeft}>
                    <p>Copyright © 2024 Fifthlab</p>
                </div>
                <div className={styles.theRight}>
                    <span>
                        <p>All Rights Reserved</p>
                        <div className={styles.line} />
                        <a href="">Terms and Conditions</a>
                        <div className={styles.line} />
                        <a href="">Privacy Policy</a>
                    </span>
                </div>
            </div>

        </div>
    )
}


