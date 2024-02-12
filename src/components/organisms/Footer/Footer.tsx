import styles from "./footer.module.css"
import Hr from "../../atoms/Hr/Hr.tsx";
import Logo from "../../atoms/Logo/Logo.tsx";
import Navigation from "../../molecules/Navigation/Navigation.tsx";
import SocialMediaContainer from "../../molecules/SocialMediaContainer/SocialMediaContainer.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <Logo/>
                    <Navigation type={"footer"}/>
                </div>
                <Hr marginTop={"1.8rem"}/>
                <div className={styles.footerBottom}>
                    <Heading headingLevel={"p"} headingStyles={styles.rights}>
                        © 2023 EATLY All Rights Reserved.
                    </Heading>
                    <SocialMediaContainer/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;