import React from "react";
import styles from "./Numbers.module.css"

export const Numbers = () => {
    return (
        <div className={styles.banner}>
            <h2>Trusted By 100+ Leading Organization</h2>
            <p className={styles.text}>
            This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.
            </p>

            <div className={styles.numbers}>
                <ul className={styles.listItems}>
                    <li>
                        <h1>90%</h1>
                        <p>Customer Success Rate</p>
                    </li>

                    <li>
                        <h1>99.99%</h1>
                        <p>Active Users</p>
                    </li>

                    <li>
                        <h1>5000+</h1>
                        <p>Active Users Across All Platforms</p>
                    </li>

                    <li>
                        <h1>4.8/5</h1>
                        <p>Customer Satisfaction Rating</p>
                    </li>
                </ul>
            </div>
        </div>
    )
} 