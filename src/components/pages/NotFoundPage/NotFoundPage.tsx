import {Link} from 'react-router-dom';
import styles from "./notFoundPage.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";

function NotFoundPage() {

    return (
        <main className={styles.main}>
            <Heading headingLevel={"h1"} headingStyles={styles.h1}>Oops!</Heading>
            <Heading headingLevel={"h2"} headingStyles={styles.h2}>Not Found!</Heading>
            <Heading headingLevel={"p"} headingStyles={styles.p}>
                Go to <Link to={"/"}>Home</Link>
            </Heading>
        </main>
    )
}

export default NotFoundPage;