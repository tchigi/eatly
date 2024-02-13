import styles from "./purchasesSection.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import OrderCard from "../../molecules/OrderCard/OrderCard.tsx";
import PurchasesInfo from "../../molecules/PurchasesInfo/PurchasesInfo.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";

function PurchasesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <div className={styles.orderContainer}>
                    <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                        Control <span>Purchases</span> <br/> Via Dashboard
                    </Heading>
                    <div className={styles.orderItemsContainer}>
                        <OrderCard label={"Chicken Hell"} status={"On The Way"} time={"3:09 PM"}
                                   imageId={"chickenHell"}/>
                        <OrderCard label={"Swe Dish"} status={"Delivered"} time={"Yesterday"} imageId={"sweDish"}/>
                        <OrderCard label={"Fish Hell Veg"} status={"Cancelled"} time={"Yesterday"}
                                   imageId={"chickenHell"}/>
                    </div>
                </div>
                <PurchasesInfo/>
            </div>
            <Hr marginTop={"8rem"}/>
        </section>
    );
}

export default PurchasesSection;