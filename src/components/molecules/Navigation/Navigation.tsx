import Link from "../../atoms/Link/Link.tsx";
import styles from "./navigation.module.css"

interface NavProps {
    type: "header" | "footer";
}

function Navigation({ type }:NavProps) {
    if (type === "header") {
        return (
            <nav className={styles.nav}>
                <Link linkTo={"/recipes"}>
                    Recipes
                </Link>
                <Link linkTo={"/blog"}>
                    Blog
                </Link>
            </nav>
        );
    }
    return (
        <nav className={styles.nav}>
            <Link linkTo={"/aboutus"} type={"footer"}>
                About Us
            </Link>
            <Link linkTo={"/contact"} type={"footer"}>
                Contact
            </Link>
        </nav>
    )
}

export default Navigation;