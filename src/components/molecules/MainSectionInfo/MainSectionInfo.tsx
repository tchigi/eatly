import Hr from "../../atoms/Hr/Hr.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import styles from "./mainSectionInfo.module.css"
import Button from "../../atoms/Button/Button.tsx";

function MainSectionInfo() {
    return (
        <div className={styles.mainSectionContainer}>
            <div className={styles.userCountContainer}>
                <Hr marginTop={"0"} width={"3.4rem"}/>
                <Heading headingLevel={"p"} headingStyles={styles.userCount}>
                    OVER 1000 USERS
                </Heading>
            </div>
            <Heading headingLevel={"h1"} headingStyles={styles.h1}>
                Enjoy Foods All Over The <span>World</span>
            </Heading>
            <Heading headingLevel={"p"} headingStyles={styles.text}>
                EatLy help you set saving goals, earn cash back offers, Go <br/> to disclaimer for more details and get
                paychecks up to two <br/> days early. Get a <span>$20 bonus.</span>
            </Heading>
            <div className={styles.buttonContainer}>
                <Button label={"Get Started"}/>
                <Button label={"Go Pro"} theme={"inverted"}/>
            </div>
        </div>

    );
}

export default MainSectionInfo;