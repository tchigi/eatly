import styles from "./mobileAppSectionInfo.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import Button from "../../atoms/Button/Button.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";

function MobileAppSectionInfo() {
    return (
        <div className={styles.infoContainer}>
            <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                Premium <span>Quality</span> For Your Health
            </Heading>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    Premium quality food is made with ingredients that are packed with essential vitamins,
                    minerals.
                </li>
                <li className={styles.li}>
                    These foods promote overall wellness by support healthy digestion and boosting immunity
                </li>
            </ul>
            <Button label={"Download"} iconType={"arrowRight"} iconPos={"right"}/>
            <CustomImage source={"src/assets/images/arrowMobile.png"} altText={"arrowMobile"}
                         imageStyles={styles.arrow}/>
        </div>
    );
}

export default MobileAppSectionInfo;