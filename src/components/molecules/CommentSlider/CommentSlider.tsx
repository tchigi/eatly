import styles from "./commentSlider.module.css"
import Comment from "../Comment/Comment.tsx";
import {CommentsType} from "../../../types/CommentsType.ts";

interface CommentSliderProps {
    comments: CommentsType
}

function CommentSlider({comments}:CommentSliderProps) {
    return (
        <div className={styles.slider}>
            {comments.comments.map(item => (
                <Comment type={"slider"} key={item.id}>
                    {item.body}
                </Comment>
            ))}
        </div>
    );
}

export default CommentSlider;