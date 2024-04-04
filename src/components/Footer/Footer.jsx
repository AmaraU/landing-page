import react from "react";

import styles from "./Footer.module.css";

 export const Footer = () => {
    return( <div className={styles.footer}>
        <div className={styles.title}>
            <h1>Trusted by 100+Leading Organisation</h1>
            <p>This is just a random generated text to be included in a later date 
            based on a final draft to be decided by the content team</p>
        </div>

        <div className={styles.header}>
            <ul className={styles.contents}>
                <li>
                    <div>
                        <h2>90%</h2>
                        <p>Customer Success Rate</p>
                    </div>
                </li>
                <li className={styles.line}></li>

                <li>
                    <div>
                        <h2>99.99%</h2>
                        <p>Active users</p>
                    </div>
                </li>

                <li className={styles.line}></li>

                <li>
                    <div>
                        <h2>5000+</h2>
                        <p>Active users Across All platforms</p>
                    </div>
                </li>

                <li className={styles.line}></li>

                <li>
                    <div>
                        <h2>4.8/5</h2>
                        <p>Customer Satisfaction Rating</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
    )
    
}