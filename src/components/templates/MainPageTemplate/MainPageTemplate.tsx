import Header from "../../organisms/Header/Header.tsx";
import styles from "./mainPageTemplate.module.css"
import Footer from "../../organisms/Footer/Footer.tsx";
import MainSection from "../../organisms/MainSection/MainSection.tsx";
import Banner from "../../organisms/Banner/Banner.tsx";
import MobileAppSection from "../../organisms/MobileAppSection/MobileAppSection.tsx";
import RecipesSection from "../../organisms/RecipesSection/RecipesSection.tsx";
import PurchasesSection from "../../organisms/PurchasesSection/PurchasesSection.tsx";
import CommentsSection from "../../organisms/CommentsSection/CommentsSection.tsx";
import FAQSection from "../../organisms/FAQSection/FAQSection.tsx";

function MainPageTemplate() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}>
                <MainSection/>
                <Banner/>
                <MobileAppSection/>
                <RecipesSection/>
                <PurchasesSection/>
                <CommentsSection/>
                <FAQSection/>
            </main>
            <Footer/>
        </div>
    );
}

export default MainPageTemplate;