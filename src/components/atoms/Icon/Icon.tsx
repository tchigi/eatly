import IconArrowRight from "../../../assets/icons/arrowRight/arrowRight.tsx"
import LogoIcon from "../../../assets/icons/logoIcon/logoIcon.tsx"
import Instagram from "../../../assets/icons/instagram/instagram.tsx";
import Linkedin from "../../../assets/icons/linkedin/linkedin.tsx";
import Facebook from "../../../assets/icons/facebook/facebook.tsx";
import Twitter from "../../../assets/icons/twitter/twitter.tsx";
import Star from "../../../assets/icons/star/star.tsx";
import BookMark from "../../../assets/icons/bookMark/bookMark.tsx";
import Wallet from "../../../assets/icons/wallet/wallet.tsx";
import Money from "../../../assets/icons/money/money.tsx";
import ChevronDown from "../../../assets/icons/chevronDown/chevronDown.tsx";
import Quotes from "../../../assets/icons/quotes/quotes.tsx";
import CommentStar from "../../../assets/icons/commentStar/commentStar.tsx";
import PaginationArrow from "../../../assets/icons/paginationArrow/paginationArrow.tsx";

interface IconProps {
    id: string;
}

function Icon({id}: IconProps) {
    switch (id) {
        case "paginationArrow":
            return <PaginationArrow/>
        case "commentStar":
            return <CommentStar/>
        case "quotes":
            return <Quotes/>
        case "chevronDown":
            return <ChevronDown/>
        case "wallet":
            return <Wallet/>
        case "money":
            return <Money/>
        case "instagram":
            return <Instagram/>
        case "linkedin":
            return <Linkedin/>
        case "facebook":
            return <Facebook/>
        case "twitter":
            return <Twitter/>
        case "arrowRight":
            return <IconArrowRight/>
        case "logo":
            return <LogoIcon/>
        case "star":
            return <Star/>
        case "bookMark":
            return <BookMark/>
        default:
            return <></>
    }
}

export default Icon;