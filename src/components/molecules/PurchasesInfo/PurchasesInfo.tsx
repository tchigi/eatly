import styles from "./purchasesInfo.module.css"
import PurchasesItem from "../PurchasesItem/PurchasesItem.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import Dropdown from "../../atoms/Dropdown/Dropdown.tsx";

function PurchasesInfo() {
    return (
        <div className={styles.purchasesInfo}>
            <div className={styles.headerInfo}>
                <Heading headingLevel={"h3"} headingStyles={styles.h3}>
                    Purchases
                </Heading>
                <Dropdown/>
            </div>
            <div className={styles.itemContainer}>
                <PurchasesItem iconId={"money"} title={"Expense"} status={"Increased By 10%"} price={"$409.00"}
                               rangeValue={80}/>
                <PurchasesItem iconId={"wallet"} title={"Vocher Usage"} status={"Increased By 5%"} price={"$45.78"}
                               rangeValue={20}/>
            </div>
        </div>
    );
}

export default PurchasesInfo;