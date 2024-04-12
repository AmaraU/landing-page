import React from "react";
import styles from "./Insights.module.css";
import { getImageURL } from "../../utils";

const slides = [
    {
        img: "Insights/slideshow1.png",
        title: "Empowering Microfinance Banks with Finedge",
        date: "-- June 28, 2018",
        info: "Highlight the benefits of Fifthlab's Finedge (banking solution for Microfinance Banks - MFBs) for MFBs, including improved loan processing, risk management, and financial inclusion.",
    },
    {
        img: "Insights/slideshow2.png",
        title: "Enhancing Payment Security with Kuleanpay.",
        date: "-- June 28, 2018",
        info: "Discuss the importance of secure transactions in today's digital economy and how Fifthlab's Kuleanpay (escrow payment platform) ensures trust and security for online transactions.",
    },
    {
        img: "Insights/slideshow1.png",
        title: "Personalized Marketing Campaigns with Bulkwave",
        date: "-- June 28, 2018",
        info: "Dive into the power of personalized marketing campaigns and how Bulkwave enables businesses to segment their audience and deliver targeted messages through bulk disbursement...",
    },
    {
        img: "Insights/slideshow2.png",
        title: "Empowering Microfinance Banks with Finedge",
        date: "-- June 28, 2018",
        info: "Highlight the benefits of Fifthlab's Finedge (banking solution for Microfinance Banks - MFBs) for MFBs, including improved loan processing, risk management, and financial inclusion.",
    },
];
const delay = 2500;

export const Insights = () => {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex(prevIndex =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
            

    return (
        <div>
            <h2 className={styles.title}>Our Insights</h2>

            <div className={styles.slideshow}>
                <div className={styles.slideshowSlider} style={{ transform: `translate3d(${-index * 35}%, 0, 0)` }} >
                    {slides.map((slide, slideIndex) => (
                        <div className={styles.slide} key={slideIndex}>
                            <div className={styles.contain}>
                                <img src={getImageURL(slide.img)} alt="" />
                                <h3>{slide.title}</h3>
                                <p className={styles.date}>{slide.date}</p>
                                <p className={styles.info}>{slide.info}</p>
                                <a href="">View Post</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.slideshowDots}>
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`${styles.slideshowDot} ${index === idx ? styles.active : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>

            </div>
        </div>
    );
};



