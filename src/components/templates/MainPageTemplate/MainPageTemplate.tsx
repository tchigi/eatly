import MainSection from "../../organisms/MainSection/MainSection.tsx";
import Banner from "../../organisms/Banner/Banner.tsx";
import MobileAppSection from "../../organisms/MobileAppSection/MobileAppSection.tsx";
import RecipesSection from "../../organisms/RecipesSection/RecipesSection.tsx";
import PurchasesSection from "../../organisms/PurchasesSection/PurchasesSection.tsx";
import CommentsSection from "../../organisms/CommentsSection/CommentsSection.tsx";
import FAQSection from "../../organisms/FAQSection/FAQSection.tsx";
import styles from "./mainPageTemplate.module.css";

function MainPageTemplate() {
    return (
        <main className={styles.main}>
            <MainSection/>
            <Banner/>
            <MobileAppSection/>
            <RecipesSection/>
            <PurchasesSection/>
            <CommentsSection/>
            <FAQSection/>
        </main>
    );
}

export default MainPageTemplate;