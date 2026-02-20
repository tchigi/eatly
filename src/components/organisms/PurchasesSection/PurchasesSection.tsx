import styles from "./purchasesSection.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import OrderCard from "../../molecules/OrderCard/OrderCard.tsx";
import PurchasesInfo from "../../molecules/PurchasesInfo/PurchasesInfo.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";

function PurchasesSection() {
    const mockCards = [
        {
            label: "Chicken Hell",
            status: "On The Way",
            time: "3:09 PM",
            imageId: "chickenHell",
        },
        {
            label: "Swe Dish",
            status: "Delivered",
            time: "Yesterday",
            imageId: "sweDish",
        },
        {
            label: "Fish Hell Veg",
            status: "Cancelled",
            time: "Yesterday",
            imageId: "chickenHell",
        },
    ]

    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <div className={styles.orderContainer}>
                    <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                        Control <span>Purchases</span> <br/> Via Dashboard
                    </Heading>
                    <div className={styles.orderItemsContainer}>
                        {mockCards.map((card) => (
                            <OrderCard label={card.label} status={card.status} time={card.time} imageId={card.imageId}
                                       key={card.label}/>
                        ))}
                    </div>
                </div>
                <PurchasesInfo/>
            </div>
            <Hr/>
        </section>
    );
}

export default PurchasesSection;