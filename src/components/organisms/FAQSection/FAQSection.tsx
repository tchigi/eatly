import styles from "./faqSection.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";
import FAQItem from "../../molecules/FAQItem/FAQItem.tsx";

function FAQSection() {
    return (
        <section className={styles.section} id="faq">
            <div className={styles.titleContainer}>
                <CustomImage source={"src/assets/images/faqWave.png"} altText={"Wave"}/>
                <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                    Frequently Asked <br/>
                    <span>Questions</span>
                </Heading>
            </div>
            <div className={styles.questions}>
                <FAQItem question={"How long does delivery take?"}>
                    You Can Get Information By Contacting Our Support Team Have 24/7 Service.
                    What’s The Difference Between Free And Paid Plan ?
                </FAQItem>
                <FAQItem question={"How Does It Work ?"}>
                    You Can Get Information By Contacting Our Support Team Have 24/7 Service.
                    What’s The Difference Between Free And Paid Plan ?
                </FAQItem>
                <FAQItem question={"How does your food delivery service work?"}>
                    You Can Get Information By Contacting Our Support Team Have 24/7 Service.
                    What’s The Difference Between Free And Paid Plan ?
                </FAQItem>
                <FAQItem question={"What payment options do you accept?"}>
                    You Can Get Information By Contacting Our Support Team Have 24/7 Service.
                    What’s The Difference Between Free And Paid Plan ?
                </FAQItem>
                <FAQItem question={"Do you offer discounts or promotions?"}>
                    You Can Get Information By Contacting Our Support Team Have 24/7 Service.
                    What’s The Difference Between Free And Paid Plan ?
                </FAQItem>
            </div>
        </section>
    );
}

export default FAQSection;