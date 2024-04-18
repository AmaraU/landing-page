import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import { getImageURL } from "../../utils";



export const Navbar = () => {
    
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    

    return ( 
        <div className={styles.mainNav}>

            <div className={styles.imageCont}>
                <img className={styles.image} src={getImageURL("FifthlabLogo.png")} />
            </div>

            <nav className={styles.navbar}>
                <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                        <li className={styles.menuItem1} onMouseEnter={handleMouseEnter}>
                            <a href="#Company">Company</a>

                            <div className={`${styles.dropdown} ${styles.one}`}
                                // onMouseLeave={handleMouseLeave}
                                // style={{ display: dropdownVisible ? 'block' : "none"}}
                            >
                                <div className={styles.columns}>
                                    <div className={styles.column}>
                                        <ul>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>About Us</h5>
                                                        <p>Learn how to intergrate</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Code of Conduct</h5>
                                                        <p>Newest feature releases</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className={styles.column}>
                                        <ul>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Career</h5>
                                                        <p>All about how to use</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Financial Statement</h5>
                                                        <p>Questions and tips from others</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem2} onMouseEnter={handleMouseEnter}>
                            <a href="#Solutions">Solutions</a>
                            <div className={`${styles.dropdown} ${styles.two}`}>
                                <div className={styles.columns}>
                                    <div className={styles.column}>
                                        <ul>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Kulean Pay</h5>
                                                        <p>Learn how to intergrate</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Smerp</h5>
                                                        <p>All about how to use</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Finedge</h5>
                                                        <p>Newest feature releases</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Uniformed Cooperative Platform (UCP)</h5>
                                                        <p>Questions and tips from others</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.column}>
                                        <ul>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Bulkwave</h5>
                                                        <p>Everyhting you need to know</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>MyPESSO</h5>
                                                        <p>How our products help you</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Smerp Go</h5>
                                                        <p>Building products and systems</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem3}>
                            <a href="#Resource">Resources</a>
                            <div className={`${styles.dropdown} ${styles.three}`}>
                                <div className={styles.columns}>
                                    <div className={styles.column}>
                                        <ul>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Insights</h5>
                                                        <p>Learn how to intergrate</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.column}>
                                        <ul>
                                            <li>
                                                <a className={styles.dorpdownItem} href="#">
                                                    <img src={getImageURL("icon.png")} />
                                                    <div>
                                                        <h5>Case Studies</h5>
                                                        <p>Everyhting you need to know</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


            <div className={styles.link}>
                <a href={"#Get in Touch"}>Get in Touch</a>
            </div>
        </div>
    
    );
};