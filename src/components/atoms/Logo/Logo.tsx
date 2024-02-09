import Icon from "../Icon/Icon.tsx";
import styles from "./logo.module.css"

function Logo() {
    return (
        <button className={styles.logo}>
            <Icon id={"logo"}/>
            <span className={styles.logoSpan}>eatly</span>
        </button>
    );
}

export default Logo;