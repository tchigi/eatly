import Icon from "../Icon/Icon.tsx";
import styles from "./logo.module.css"
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to={"/"} className={styles.logo} onClick={() => scrollTo({top: 0})}>
            <Icon id={"logo"}/>
            <span className={styles.logoSpan}>eatly</span>
        </Link>
    );
}

export default Logo;