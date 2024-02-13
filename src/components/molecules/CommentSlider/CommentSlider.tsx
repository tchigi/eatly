import styles from "./commentSlider.module.css"
import Comment from "../Comment/Comment.tsx";

function CommentSlider() {
    return (
        <div className={styles.slider}>
            <Comment type={"slider"} stars={4}>
                “ Online invoice payment helps companies save time, are faster and save maximum effort for the
                clients and save maximum effort. Online invoice payment helps companies save time ”
            </Comment>
            <Comment type={"slider"} stars={3}>
                “ Online invoice payment helps companies save time, are faster and save maximum effort for the
                clients and save maximum effort. Online invoice payment helps companies save time ”
            </Comment>
            <Comment type={"slider"} stars={5}>
                “ Online invoice payment helps companies save time, are faster and save maximum effort for the
                clients and save maximum effort. Online invoice payment helps companies save time ”
            </Comment>
            <Comment type={"slider"} stars={1}>
                “ Online invoice payment helps companies save time, are faster and save maximum effort for the
                clients and save maximum effort. Online invoice payment helps companies save time ”
            </Comment>
        </div>
    );
}

export default CommentSlider;