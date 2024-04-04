import React from "react";
import styles from "./Solutions.module.css";
import { getImageURL } from "../../utils";

export const Solutions = () => {
    return (
        <div>
            <div className={styles.heading}>
                <h2>Our Solutions</h2>
                <p>This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.</p>
            </div>

            <div className={styles.products}>

                <div className={`${styles.product} ${styles.selected}`}>
                    <img src={getImageURL("logos/MP.png")} alt="My Pesso" />
                    <p>My Pesso</p>
                </div>
                <div className={`${styles.product} ${styles.unselected}`}>
                    <img src={getImageURL("logos/FadedKP.png")} alt="Kulean Pay" />
                    <p>Kulean Pay</p>
                </div>
                <div className={`${styles.product} ${styles.unselected}`}>
                    <img src={getImageURL("logos/FadedSG.png")} alt="SmerpGo" />
                    <p>SmerpGo</p>
                </div>
                <div className={`${styles.product} ${styles.unselected}`}>
                    <img src={getImageURL("logos/FadedFE.png")} alt="Finedge" />
                    <p>Finedge</p>
                </div>
                <div className={`${styles.product} ${styles.unselected}`}>
                    <img src={getImageURL("logos/FadedBW.png")} alt="Bulkwave" />
                    <p>Bulkwave</p>
                </div>
                <div className={`${styles.product} ${styles.unselected}`}>
                    <img src={getImageURL("logos/FadedUCP.png")} alt="UCP" />
                    <p>UCP</p>
                </div>

            </div>

            <div className={styles.moreInfo}>
                <div className={styles.text}>
                    <h3>My Pesso</h3>
                    <p>
                        Manage your corporate finances with ease using myPeso, the all-in-one cash management solution for businesses.  Effortlessly handle corporate expenses, employee reimbursements, and petty cash, saving you valuable time and resources.
                    </p>
                    <button className={styles.button}>Visit Website</button>
                </div>
                <div>
                    <img src="" alt="" className={styles.image}/>
                </div>
            </div>
        </div>
    )
}