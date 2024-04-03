import React from "react";

import styles from "./UsedBy.module.css"
import { getImageURL } from "../../utils";

export const UsedBy = () => {
    return (
        <div className={styles.body}>

            <ul>
                <li>
                    <img src={getImageURL("usedby/AB.png")} alt="" />
                </li>

                <li>
                    <img src={getImageURL("usedby/Bankly.png")} alt="" />
                </li>

                <li>
                    <img src={getImageURL("usedby/FB.png")} alt="" />
                </li>

                <li>
                    <img src={getImageURL("usedby/Itex.png")} alt="" />
                </li>

                <li>
                    <img src={getImageURL("usedby/SB.png")} alt="" />
                </li>

                <li>
                    <img src={getImageURL("usedby/WB.png")} alt="" />
                </li>

                <li>
                    <img src={getImageURL("usedby/TB.png")} alt="" />
                </li>
            </ul>

        </div>
    )
}