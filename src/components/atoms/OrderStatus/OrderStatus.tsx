import Heading from "../Heading/Heading.tsx";

interface OrderStatusProps {
    label: string,
}

function OrderStatus({label}: OrderStatusProps) {

    return (
        <Heading headingLevel={"p"} color={`${label === 'Cancelled' ? "rgb(241, 83, 78)" : "rgb(50, 49, 66)"}`}
                 lineHeight={"140%"} fontWeight={"500"}
                 fontFamily={"Poppins"} fontSize={"0.6rem"}>
            {label}
        </Heading>
    );
}

export default OrderStatus;