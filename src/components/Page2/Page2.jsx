import React from "react";
import styles from "./Page2.module.css";
import { getImageURL } from "../../utils";

export const Page2 = () => {
    return (
        <div>
            <div className={styles.heading}>
                <h2>Be More, Do More</h2>
                <p>This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.</p>
            </div>

            <div  className={styles.body}>
                <div className={styles.partOne}>
                    <img src={getImageURL("meeting.png")} alt="image" className={styles.image}/>
                </div>

                <div className={styles.partTwo}>
                    <ul className={styles.accordion}>
                        <li>
                            <input type="radio" name="accordion" id="first"  />
                            <div className={styles.each}>
                                <div className={styles.icon}>
                                    <img src={getImageURL("icons/gears.png")} alt="gears" />
                                </div>
                                <div className={styles.info}>
                                    <label for="first">Unlock Your Business Potential with Fifthlab</label>
                                    <div className={styles.content}>
                                        <p>At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="second" />
                            <div className={styles.each}>
                                <div className={styles.icon}>
                                    <img src={getImageURL("icons/key.png")} alt="key" />
                                </div>
                                <div className={styles.info}>
                                    <label for="second">Tailored Solutions For Every Need</label>
                                    <div className={styles.content}>
                                        <p>
                                            Fifthlab offers tailored solutions to meet the diverse needs of businesses across industries. Whether you're a small business or a financial institution, our suite of digital solutions empowers you to stay ahead and unlock growth opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="third" />
                            <div className={styles.each}>
                                <div className={styles.icon}>
                                    <img src={getImageURL("icons/chart.png")} alt="chart" />
                                </div>
                                <div className={styles.info}>
                                    <label for="third">Innovation At Your Fingertips</label>
                                    <div className={styles.content}>
                                        <p>
                                            At Fifthlab, innovation is at the core of everything we do. Leveraging the latest technologies and best practices, we deliver cutting-edge solutions that drive real business impact and keep you ahead of the curve.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="fourth" />
                            <div className={styles.each}>
                                <div className={styles.icon}>
                                    <img src={getImageURL("icons/gears.png")} alt="gears" />
                                </div>
                                <div className={styles.info}>
                                    <label for="fourth">Seamless Integration, Maximum Efficiency</label>
                                    <div className={styles.content}>
                                        <p>
                                            With Fifthlab, integration is seamless and efficient. Our solutions are designed to work together seamlessly, enabling you to streamline workflows and drive results with ease
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    );
}