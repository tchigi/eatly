import Hr from "../../atoms/Hr/Hr.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import styles from "./mainSectionInfo.module.css"
import Button from "../../atoms/Button/Button.tsx";

function MainSectionInfo() {
    return (
        <div className={styles.mainSectionContainer}>
            <div className={styles.userCountContainer}>
                <Hr marginTop={"none"} width={"3.4rem"}/>
                <Heading headingLevel={"p"} fontFamily={"Poppins"} fontWeight={"600"} fontSize={"1rem"}
                         lineHeight={"120%"} color={"rgba(32, 31, 31, 0.2)"} letterSpacing={"0.13rem"}>
                    OVER 1000 USERS
                </Heading>
            </div>
            <Heading headingLevel={"h1"} fontFamily={"Poppins"} fontWeight={"600"} fontSize={"4.7rem"}
                     lineHeight={"120%"} letterSpacing={"-0.2rem"} color={"rgb(32, 31, 31)"}>
                Enjoy Foods All Over The <span>World</span>
            </Heading>
            <Heading headingLevel={"p"} fontFamily={"Inter"} fontWeight={"400"} fontSize={"1.13rem"} lineHeight={"1.75rem"} color={"rgb(103, 103, 103)"}>
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