import {useState} from "react";
import Icon from "../Icon/Icon.tsx";

interface SocialMediaIconProps {
    id: "instagram" | "linkedin" | "facebook" | "twitter";
    linkTo?: string;
}

function SocialMediaIcon({id, linkTo}: SocialMediaIconProps) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        fill: isHover ? "#6C5FBC" : "#081420",
        stroke: isHover ? "#6C5FBC" : "#081420",
        textDecoration: "none",
        transition: "all-in-out 0.3s",
        cursor: "pointer",
    };


    return (
        <a href={linkTo}
           style={boxStyle}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
            <Icon id={id}/>
        </a>
    )
}

export default SocialMediaIcon;