import React from 'react';
import { getImageURL } from '../../utils';

import styles from "./Contact.module.css"

export const Contact = () => {
    return( 
            
            <div className={styles.Header}>

                <div className={styles.Contacts}>

                    <div className={styles.Contact1}>
                        <img src={getImageURL("Vector.png")}/>
                        <p>Hero@Thefifthlab.com</p>
                    </div>
                    <div className={styles.Contact2}>
                        <img src={getImageURL("Vector (1).png")}/>
                        <p>+234 816 235 2009</p>
                    </div>

                </div>
                
                <div className={styles.contact3}>
                    <img src={getImageURL("Social Links.png")}/>
                </div>
            </div>
        

    )

}