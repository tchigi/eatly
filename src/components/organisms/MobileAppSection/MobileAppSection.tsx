import styles from "./mobileAppSection.module.css"
import MobileAppSectionInfo from "../../molecules/MobileAppSectionInfo/MobileAppSectionInfo.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";
import mobile from "../../../assets/images/mobile.png";

function MobileAppSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mobile}>
                    <CustomImage source={mobile} altText={"mobileApp"}/>
                </div>
                <MobileAppSectionInfo/>
            </div>
            <Hr/>
        </section>
    );
}

export default MobileAppSection;