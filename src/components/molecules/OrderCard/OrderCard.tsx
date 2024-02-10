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
        <section aria-hidden className={styles.orderCardContainer}>
            <CustomImage altText={imageId} source={`src/assets/images/${imageId}.png`}/>
            <div className={styles.orderCardInfo}>
                <Heading headingLevel={"h4"} color={"rgb(50, 49, 66)"} lineHeight={"140%"} fontWeight={"600"}
                         fontFamily={"Poppins"} fontSize={"1rem"}>
                    {label}
                </Heading>
                <OrderStatus label={status}/>
                <Heading headingLevel={"p"} color={"rgb(172, 173, 185)"} lineHeight={"140%"} fontWeight={"500"}
                         fontFamily={"Poppins"} fontSize={"0.7rem"}>
                    {time}
                </Heading>
            </div>
        </section>
    );
}

export default OrderCard;