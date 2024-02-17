import LinkAtom from "../../atoms/LinkAtom/LinkAtom.tsx";
import styles from "./navigation.module.css"

interface NavProps {
    type: "header" | "footer";
}

function Navigation({type}: NavProps) {
    return (
        <nav className={styles.nav}>
            <LinkAtom linkTo={"/#recipes"} type={type}>
                Recipes
            </LinkAtom>
            <LinkAtom linkTo={"/#faq"} type={type}>
                FAQ
            </LinkAtom>
            <LinkAtom linkTo={"/blog"} type={type}>
                Blog
            </LinkAtom>
        </nav>
    );
}

export default Navigation;