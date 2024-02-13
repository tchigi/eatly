interface HrProps {
    width?: string;
    height?: string;
    color?: string;
}

function Hr({width = "100%", height = "0", color}: HrProps) {
    return (
        <hr style={{
            marginBottom: "0",
            width: width,
            height: height,
            border: color ? `0.06rem solid ${color}` : "0.06rem solid rgb(203, 203, 203)"
        }}/>
    );
}

export default Hr;