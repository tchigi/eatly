import styles from "./comenntsSection.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import Comment from "../../molecules/Comment/Comment.tsx";
import CommentSlider from "../../molecules/CommentSlider/CommentSlider.tsx";

function CommentsSection() {
    return (
        <section className={styles.section}>
            <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                <span>Customer</span> Say
            </Heading>
            <div className={styles.commentsContainer}>
                <Comment type={"main"} stars={5} name={"Alexander R."} period={"01 Year With Us "}>
                    “ Online invoice payment helps companies save time, are faster and save maximum effort for the
                    clients and save maximum effort. Online invoice payment helps companies save time ”
                </Comment>
                <CommentSlider/>
            </div>
        </section>
    );
}

export default CommentsSection;