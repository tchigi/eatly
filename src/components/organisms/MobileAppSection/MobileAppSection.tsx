import styles from "./mobileAppSection.module.css"
import MobileAppSectionInfo from "../../molecules/MobileAppSectionInfo/MobileAppSectionInfo.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";

function MobileAppSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mobile}>
                    <CustomImage source={"src/assets/images/mobile.png"} altText={"mobileApp"}/>
                </div>
                <MobileAppSectionInfo/>
            </div>

            <Hr marginTop={"7.5rem"}/>
        </section>
    );
}

export default MobileAppSection;