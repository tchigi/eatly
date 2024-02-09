import IconArrowRight from "../../../assets/icons/arrowRight/arrowRight.tsx"
import LogoIcon from "../../../assets/icons/logoIcon/logoIcon.tsx"
import Instagram from "../../../assets/icons/instagram/instagram.tsx";
import Linkedin from "../../../assets/icons/linkedin/linkedin.tsx";
import Facebook from "../../../assets/icons/facebook/facebook.tsx";
import Twitter from "../../../assets/icons/twitter/twitter.tsx";

interface IconProps {
    id: string;
}

function Icon({id}: IconProps) {
    switch (id) {
        case "instagram":
            return <Instagram/>
        case "linkedin":
            return <Linkedin/>
        case "facebook":
            return <Facebook/>
        case "twitter":
            return <Twitter/>
        case "arrow-right":
            return <IconArrowRight/>
        case "logo":
            return <LogoIcon/>
        default:
            return <></>
    }
}

export default Icon;