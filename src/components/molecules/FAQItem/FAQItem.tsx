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
    // ^^^ Паттерн State - Состояние

    function onClickHandler() {
        setIsActive(prevState => !prevState)
    }
    // ^^^ Паттерн Наблюдатель (Observer)

    return (
        <div className={`${styles.item} ${isActive ? styles.gridActive : ""}`}>
            <div className={styles.itemHeader} onClick={onClickHandler}>
                <Heading headingLevel={"h3"} headingStyles={styles.h3}>
                    {question}
                </Heading>
                <button className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}/>
            </div>
            <div className={styles.itemBody}>
                <Heading headingLevel={"p"} headingStyles={styles.p}>
                    {children}
                </Heading>
            </div>
            <Hr/>
        </div>
    );
}

export default FaqItem;