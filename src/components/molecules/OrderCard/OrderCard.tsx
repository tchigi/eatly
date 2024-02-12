import styles from "./orderCard.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";
import OrderStatus from "../../atoms/OrderStatus/OrderStatus.tsx";

interface OrderCardProps {
    label: string;
    status: string;
    time: string;
    imageId: string;
}

function OrderCard({label, status, time, imageId}: OrderCardProps) {
    return (
        <div aria-hidden className={styles.orderCardContainer}>
            <CustomImage altText={imageId} source={`src/assets/images/${imageId}.png`}/>
            <div className={styles.orderCardInfo}>
                <Heading headingLevel={"h4"} headingStyles={styles.h4}>
                    {label}
                </Heading>
                <OrderStatus status={status}/>
                <Heading headingLevel={"p"} headingStyles={styles.time}>
                    {time}
                </Heading>
            </div>
        </div>
    );
}

export default OrderCard;