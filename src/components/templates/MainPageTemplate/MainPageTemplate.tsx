import Header from "../../organisms/Header/Header.tsx";
import styles from "./mainPageTemplate.module.css"
import Footer from "../../organisms/Footer/Footer.tsx";

function MainPageTemplate() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main></main>
            <Footer/>
        </div>
    );
}

export default MainPageTemplate;