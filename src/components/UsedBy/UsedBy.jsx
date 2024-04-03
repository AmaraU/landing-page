import React from "react";

import styles from "./UsedBy.module.css"
import { getImageURL } from "../../utils";

export const UsedBy = () => {
    return (
        <div className={styles.banner}>

            <div className={styles.body}>

                <p className={styles.text}>We are currently used and trusted by</p>
                
                <div className={styles.list}>

                    <div className={styles.listItems}>
                        <img src={getImageURL("usedby/AB.png")} alt="" />
                        <img src={getImageURL("usedby/Bankly.png")} alt="" />
                        <img src={getImageURL("usedby/FB.png")} alt="" />
                        <img src={getImageURL("usedby/Itex.png")} alt="" />
                        <img src={getImageURL("usedby/SB.png")} alt="" />
                        <img src={getImageURL("usedby/WB.png")} alt="" />
                        <img src={getImageURL("usedby/TB.png")} alt="" />
                    </div>
                    
                    <div className={styles.listItems}>
                        <img src={getImageURL("usedby/AB.png")} alt="" />
                        <img src={getImageURL("usedby/Bankly.png")} alt="" />
                        <img src={getImageURL("usedby/FB.png")} alt="" />
                        <img src={getImageURL("usedby/Itex.png")} alt="" />
                        <img src={getImageURL("usedby/SB.png")} alt="" />
                        <img src={getImageURL("usedby/WB.png")} alt="" />
                        <img src={getImageURL("usedby/TB.png")} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}