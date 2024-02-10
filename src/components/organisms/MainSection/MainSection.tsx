import styles from "./mainSection.module.css"
import MainSectionInfo from "../../molecules/MainSectionInfo/MainSectionInfo.tsx";
import MainSectionFigure from "../../molecules/MainSectionFigure/MainSectionFigure.tsx";
function MainSection() {
    return (
        <div className={styles.mainSectionContainer}>
            <MainSectionInfo/>
            <MainSectionFigure/>
        </div>
    );
}

export default MainSection;