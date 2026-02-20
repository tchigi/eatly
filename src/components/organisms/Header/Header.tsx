import Logo from "../../atoms/Logo/Logo.tsx";
import Navigation from "../../molecules/Navigation/Navigation.tsx";
import styles from "./header.module.css"
import Hr from "../../atoms/Hr/Hr.tsx";

function Header() {
    return (
        <header className={styles.header} data-testid={"header"}>
            <div className={styles.headerContainer}>
                <Logo/>
                <Navigation type={"header"}/>
            </div>
            <Hr/>
        </header>
    );
}

export default Header;