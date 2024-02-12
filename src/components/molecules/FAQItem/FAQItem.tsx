import styles from "./faqItem.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import React, {useState} from "react";
import Hr from "../../atoms/Hr/Hr.tsx";

interface FAQItemProps {
    question: string,
    children: React.ReactNode
}

function FaqItem({question, children}: FAQItemProps) {
    const [isActive, setIsActive] = useState(false)

    function onClickHandler() {
        setIsActive(prevState => !prevState)
    }

    return (
        <div className={`${styles.item} ${isActive ? styles.gridActive : ""}`}>
            <div className={styles.itemHeader}>
                <Heading headingLevel={"h3"} headingStyles={styles.h3}>
                    {question}
                </Heading>
                <button className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}
                        onClick={onClickHandler}></button>
            </div>
            <div className={styles.itemBody}>
                <Heading headingLevel={"p"} headingStyles={styles.p}>
                    {children}
                </Heading>
            </div>
            <Hr marginTop={"1rem"}/>
        </div>
    );
}

export default FaqItem;