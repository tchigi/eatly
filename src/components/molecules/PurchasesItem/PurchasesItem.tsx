import styles from "./purchasesItem.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import Range from "../../atoms/Range/Range.tsx";

interface PurchasesItemProps {
    iconId: string;
    title: string;
    status: string;
    price: string;
    rangeValue: number
}

function PurchasesItem({iconId, title, status, price, rangeValue}:PurchasesItemProps) {

    return (
        <div className={styles.purchasesItem}>
            <div className={styles.infoContainer}>
                <div className={styles.icon}>
                    <Icon id={iconId} />
                </div>
                <div className={styles.textContainer}>
                    <Heading headingLevel={"h3"} headingStyles={styles.h3}>{title}</Heading>
                    <Heading headingLevel={"p"} headingStyles={styles.p}>{status}</Heading>
                </div>
                <Heading headingLevel={"h4"} headingStyles={styles.price}>{price}</Heading>
            </div>
            <Range value={rangeValue}/>
        </div>
    );
}

export default PurchasesItem;