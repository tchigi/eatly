import Header from "../../organisms/Header/Header.tsx";
import styles from "./mainPageTemplate.module.css"
import Footer from "../../organisms/Footer/Footer.tsx";
import MainSection from "../../organisms/MainSection/MainSection.tsx";
import Banner from "../../organisms/Banner/Banner.tsx";

function MainPageTemplate() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main style={{display: "flex", flexDirection: "column", backgroundColor: "rgb(249, 249, 249)"}}>
                <MainSection/>
                <Banner/>
            </main>
            <Footer/>
        </div>
    );
}

export default MainPageTemplate;