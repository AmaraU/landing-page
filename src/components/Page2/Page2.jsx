import React from "react";
import styles from "./Page2.module.css";
import { getImageURL } from "../../utils";

const tabs = [
    {
        id: "first",
        icon: "icons/gears.png",
        label: "Unlock Your Business Potential with Fifthlab",
        content: "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
        image: "Image1.png",
    },
    {
        id: "second",
        icon: "icons/key.png",
        label: "Tailored Solutions For Every Need",
        content: "Fifthlab offers tailored solutions to meet the diverse needs of businesses across industries. Whether you're a small business or a financial institution, our suite of digital solutions empowers you to stay ahead and unlock growth opportunities.",
        image: "Image2.png",
    },
    {
        id: "third",
        icon: "icons/chart.png",
        label: "Innovation At Your Fingertips",
        content: "At Fifthlab, innovation is at the core of everything we do. Leveraging the latest technologies and best practices, we deliver cutting-edge solutions that drive real business impact and keep you ahead of the curve.",
        image: "Image3.png",
    },
    {
        id: "fourth",
        icon: "icons/gears.png",
        label: "Seamless Integration, Maximum Efficiency",
        content: "With Fifthlab, integration is seamless and efficient. Our solutions are designed to work together seamlessly, enabling you to streamline workflows and drive results with ease",
        image: "Image1.png",
    },
];
const delay = 10000;

export const Page2 = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex =>
                prevIndex === tabs.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => clearInterval(interval);
    }, []);

    const handleTabHover = (tabIndex) => {
        setIndex(tabIndex);
    };

    return (
        <div>
            <div className={styles.heading}>
                <h2>Be More, Do More</h2>
                <p>This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.</p>
            </div>

            <div className={styles.body}>
                <div className={styles.partOne}>
                    <div className={styles.slideshow} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                        {tabs.map((tab, tabIndex) => (
                            <img key={tabIndex} src={getImageURL(tab.image)} className={`${styles.image} ${index === tabIndex ? styles.active : ''}`} />
                        ))}
                    </div>
                </div>

                <div className={styles.partTwo}>
                    <ul className={styles.accordion}>
                        {tabs.map((tab, tabIndex) => (
                            <li key={tabIndex}>
                                <input type="radio" name="accordion" id={tab.id} checked={index === tabIndex} readOnly />
                                <div className={styles.each} key={tabIndex} onMouseEnter={() => handleTabHover(tabIndex)}>
                                    <div className={styles.icon}>
                                        <img src={getImageURL(tab.icon)} alt="" />
                                    </div>
                                    <div className={styles.info}>
                                        <label htmlFor={tab.id}>{tab.label}</label>
                                        <div className={styles.content}>
                                            <p>{tab.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
