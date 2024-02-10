interface HrProps {
    marginTop: string;
    width?: string;
    height?: string;
    color?: string;
}

function Hr({marginTop, width = "100%", height = "0", color}: HrProps) {
    return (
        <hr style={{
            marginTop: marginTop,
            width: width,
            height: height,
            border: color ? `0.06rem solid ${color}` : "0.06rem solid rgb(203, 203, 203)"
        }}/>
    );
}

export default Hr;