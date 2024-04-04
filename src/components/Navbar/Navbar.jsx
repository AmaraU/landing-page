import React from 'react';
import styles from "./Navbar.module.css"
import { getImageURL } from "../../utils";

export const Navbar = () => {
    return ( 
        <div className={styles.mainNav}>

            <div className={styles.imageCont}>
                <img className={styles.image} src={getImageURL("FifthlabLogo.png")} />
            </div>

            <nav className={styles.navbar}>
                <div>
                    <div className={styles.menu}>
                        <ul className={styles.menuItems}>
                            <li className={styles.menuItem1}>
                                <a href="#Company">Company</a>
                                <div className={`${styles.dropdown} ${styles.one}`}>
                                    <ul>
                                        <li><a href="#">Item 1</a></li>
                                        <li><a href="#">Item 2</a></li>
                                        <li><a href="#">Item 3</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className={styles.menuItem2}>
                                <a href="#Solutions">Solutions</a>
                                <div className={`${styles.dropdown} ${styles.two}`}>
                                    <ul>
                                        <li><a href="#">Item 1</a></li>
                                        <li><a href="#">Item 2</a></li>
                                        <li><a href="#">Item 3</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className={styles.menuItem3}>
                                <a href="#Resource">Resources</a>
                                <div className={`${styles.dropdown} ${styles.three}`}>
                                    <ul>
                                        <li><a href="#">Item 1</a></li>
                                        <li><a href="#">Item 2</a></li>
                                        <li><a href="#">Item 3</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={styles.link}>
                <a href={"#Get in Touch"}>Get in Touch</a>
            </div>
        </div>
    
    );
};









// import React from 'react';

// import styles from "./Navbar.module.css"
// import { getImageUrl } from '../../utilis';

// export const Navbar = () => {
//     return ( 
//         <div className={styles.mainNav}>

//             <div className={styles.imageCont}>
//                 <img className={styles.image} src={getImageUrl("FifthlabLogo.png")} />
//             </div>

//             <nav className={styles.navbar}>
//                 <div>
//                     <div className={styles.menu}>
//                         <ul className= {styles.menuItems}>
//                             <li>
//                                 <a href="#Company">Company</a>
//                             </li>
//                             <li>
//                                 <a href="#Solutions">Solutions</a>
//                             </li>
//                             <li>
//                                 <a href="#Resource">Resources</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <div className={styles.link}>
//                 <a href={"#Get in Touch"}>Get in Touch</a>
//             </div>
//         </div>
    
//     );
// };