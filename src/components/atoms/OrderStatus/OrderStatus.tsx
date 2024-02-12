import Heading from "../Heading/Heading.tsx";
import styles from "./orderStatus.module.css"

interface OrderStatusProps {
    status: string,
}

function OrderStatus({status}: OrderStatusProps) {
    return (
        <Heading headingLevel={"p"}
                 headingStyles={`${styles.label} ${status === "Cancelled" ? styles.cancelled : styles.default}`}>
            {status}
        </Heading>
    );
}

export default OrderStatus;