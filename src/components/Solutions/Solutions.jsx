import React, { useState, useEffect } from "react";
import styles from "./Solutions.module.css";
import { getImageURL } from "../../utils";

export const Solutions = () => {
    const products = [
        {
            name: "My Pesso",
            title: "My Pesso",
            logo: "logos/MP.png",
            fadedLogo: "logos/FadedMP.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Manage your corporate finances with ease using myPeso, the all-in-one cash management solution for businesses. Effortlessly handle corporate expenses, employee reimbursements, and petty cash, saving you valuable time and resources.",
        },
        {
            name: "Kulean Pay",
            title: "Kuleanpay",
            logo: "logos/KP.png",
            fadedLogo: "logos/FadedKP.png",
            image: "Solutions/Solutions2.png",
            moreInfo: "Ensure secure and seamless payment processing for your business, regardless of size. KuleanPay prioritizes security with PCI DSS compliance, giving you peace of mind while accepting payments from your customers.",
        },
        {
            name: "SmerpGo",
            title: "SmerpGo",
            logo: "logos/SG.png",
            fadedLogo: "logos/FadedSG.png",
            image: "Solutions/Solutions3.png",
            moreInfo: ".Take control of your business operations with SMERP, our comprehensive Enterprise Resource Planning (ERP) software.  SMERP streamlines tasks like inventory management, financial reporting, and customer relationship management, allowing you to focus on what matters most - growing your business.",
        },
        {
            name: "Finedge",
            title: "FinEdge LOS",
            logo: "logos/FE.png",
            fadedLogo: "logos/FadedFE.png",
            image: "Solutions/Solutions4.png",
            moreInfo: "Empower your Microfinance Bank (MFB) to offer a comprehensive banking experience. Finedge is an all-in-one banking solution designed to streamline operations, expand reach, and enhance financial inclusion.Empower your Microfinance Bank (MFB) to offer a comprehensive banking experience. Finedge is an all-in-one banking solution designed to streamline operations, expand reach, and enhance financial inclusion.",
        },
        {
            name: "Bulkwave",
            title: "Bulkwave",
            logo: "logos/BW.png",
            fadedLogo: "logos/FadedBW.png",
            image: "Solutions/Solutions5.png",
            moreInfo: " Simplify bulk communication and reward programs with Bulkwave. Effortlessly distribute airtime, data, and SMS to large groups, keeping your teams and customers connected and engaged.",
            miniheading: "Our Solutions",
            moreMoreInfo: "This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team that specifically speaks to its ,This is just a randomly generated text.",
        },
        {
            name: "UCP",
            title: "Unified Cooperative Platform\n(UCP)",
            logo: "logos/UCP.png",
            fadedLogo: "logos/FadedUCP.png",
            image: "Solutions/Solutions6.png",
            moreInfo: "Designed specifically for cooperatives, UCP streamlines cash collection, disbursement, and reconciliation.  This secure platform empowers cooperatives to improve cash flow management, enhance transparency, and foster stronger collaboration among members.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = 5000;
    let intervalId;

    useEffect(() => {
        intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, delay);

        return () => clearInterval(intervalId);
    }, []);

    const handleProductHover = (index) => {
        setCurrentIndex(index);
        clearInterval(intervalId);
    };

    const selectedProduct = products[currentIndex];

    return (
        <div>
            <div className={styles.heading}>
                <h2>Our Solutions</h2>
                <p>This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.</p>
            </div>

            <div className={styles.products}>
    {products.map((product, index) => (
        <button
            key={product.name}
            className={`${styles.product} ${currentIndex === index ? styles.selected : ""}`}
            onMouseEnter={() => handleProductHover(index)}
        >
            <img className={styles.noHover} src={getImageURL(product.fadedLogo)} alt={product.name} />
            <img className={styles.onHover} src={getImageURL(product.logo)} alt={product.name} />
            <p>{product.name}</p>
        </button>
    ))}
</div>


            <div className={styles.moreInfo}>
                <div className={styles.text}>
                    <h3>{selectedProduct.title}</h3>
                    <p>{selectedProduct.moreInfo}</p>
                    <p>{selectedProduct.miniheading}</p>
                    <p>{selectedProduct.moreMoreInfo}</p>
                    <button className={styles.button}>Visit Website</button>
                </div>
                <div className={styles.pic}>
                    <img src={getImageURL(selectedProduct.image)} alt="" className={styles.image} />
                </div>
            </div>
        </div>
    );
};




/*
import React, { useState, useEffect } from "react";
import styles from "./Solutions.module.css";
import { getImageURL } from "../../utils";

export const Solutions = () => {
    const products = [
        {
            name: "My Pesso",
            logo: "logos/MP.png",
            fadedLogo: "logos/FadedMP.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Manage your corporate finances with ease using myPeso, the all-in-one cash management solution for businesses. Effortlessly handle corporate expenses, employee reimbursements, and petty cash, saving you valuable time and resources.",
        },
        {
            name: "Kulean Pay",
            logo: "logos/KP.png",
            fadedLogo: "logos/FadedKP.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Enhance payment security and trust with Kulean Pay, the leading escrow payment platform. Protect yourself and your customers from fraud and disputes, ensuring seamless transactions every time.",
        },
        {
            name: "SmerpGo",
            logo: "logos/SG.png",
            fadedLogo: "logos/FadedSG.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Drive business growth and efficiency with SmerpGo, the all-in-one ERP solution. Streamline operations, automate processes, and gain valuable insights to stay ahead of the competition.",
        },
        {
            name: "Finedge",
            logo: "logos/FE.png",
            fadedLogo: "logos/FadedFE.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Empower your financial institution with Finedge, the comprehensive banking solution. Enhance customer experience, improve operational efficiency, and drive growth with advanced features and capabilities.",
        },
        {
            name: "Bulkwave",
            logo: "logos/BW.png",
            fadedLogo: "logos/FadedBW.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Maximize your marketing impact with Bulkwave, the powerful marketing automation platform. Deliver targeted campaigns, engage with customers, and drive conversions with ease.",
        },
        {
            name: "UCP",
            logo: "logos/UCP.png",
            fadedLogo: "logos/FadedUCP.png",
            image: "Solutions/Solutions1.png",
            moreInfo: "Unlock new opportunities and revenue streams with UCP, the flexible commerce platform. Seamlessly integrate with existing systems, scale with ease, and deliver exceptional customer experiences.",
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const delay = 5000; // Interval in milliseconds between product changes
    let intervalId; // Variable to store the interval ID

    useEffect(() => {
        startSlideshow();

        return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
    }, []);

    const startSlideshow = () => {
        intervalId = setInterval(() => {
            const currentIndex = products.findIndex(product => product === selectedProduct);
            const nextIndex = (currentIndex + 1) % products.length;
            setSelectedProduct(products[nextIndex]);
        }, delay);
    };

    const handleProductHover = (product) => {
        setSelectedProduct(product);
        clearInterval(intervalId); // Stop the slideshow when hovering over a product
    };
    
    return (
        <div>
            <div className={styles.heading}>
                <h2>Our Solutions</h2>
                <p>This is just a randomly generated text to be included in a later date based on a final draft to be decided by the content team.</p>
            </div>

            <div className={styles.products}>
                {products.map((product) => (
                    <button
                        key={product.name}
                        className={`${styles.product} ${selectedProduct === product ? styles.selected : ""}`}
                        onMouseEnter={() => handleProductHover(product)}
                    >
                        <img className={styles.noHover} src={getImageURL(product.fadedLogo)} alt={product.name} />
                        <img className={styles.onHover} src={getImageURL(product.logo)} alt={product.name} />
                        <p>{product.name}</p>
                    </button>
                ))}
            </div>

            <div className={styles.moreInfo}>
                <div className={styles.text}>
                    <h3>{selectedProduct.name}</h3>
                    <p>{selectedProduct.moreInfo}</p>
                    <button className={styles.button}>Visit Website</button>
                </div>
                <div className={styles.pic}>
                    <img src={getImageURL(selectedProduct.image)} alt="" className={styles.image} />
                </div>
            </div>
        </div>
    );
};
*/