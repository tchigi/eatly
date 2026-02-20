import styles from "./comenntsSection.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import Comment from "../../molecules/Comment/Comment.tsx";
import CommentSlider from "../../molecules/CommentSlider/CommentSlider.tsx";
import {useGetCommentsQuery} from "../../../store/services/commentsApi.ts";

function CommentsSection() {
    const {data, error, isLoading} = useGetCommentsQuery()

    return (
        <section className={styles.section}>
            <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                <span>Customer</span> Say
            </Heading>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div className={styles.commentsContainer}>
                    <Comment type={"main"} name={data.comments[0].user.username}>
                        {data.comments[0].body}
                    </Comment>
                    <CommentSlider comments={data}/>
                </div>
            ) : null
            }
        </section>
    );
}

export default CommentsSection;