import Logo from "../../atoms/Logo/Logo.tsx";
import Navigation from "../../molecules/Navigation/Navigation.tsx";
import styles from "./header.module.css"
import Hr from "../../atoms/Hr/Hr.tsx";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Logo/>
                <Navigation type={"header"}/>
            </div>
            <Hr marginTop={"1.9rem"}/>
        </header>
    );
}

export default Header;