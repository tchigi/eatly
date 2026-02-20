import styles from './singlePostComments.module.css';
import Heading from "../../atoms/Heading/Heading.tsx";
import {useGetPostCommentsQuery} from "../../../store/services/commentsApi.ts";
import Comment from "../Comment/Comment.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import Spinner from "../../atoms/Spinner/Spinner.tsx";

interface SinglePostCommentsProps {
    id: number
}

function SinglePostComments({id}: SinglePostCommentsProps) {
    const {data, error, isLoading} = useGetPostCommentsQuery(id)
    const newComments = useSelector((state: RootState) => state.newComments.newComments)

    return (
        <div className={styles.comments}>
            <Heading headingLevel={"h4"} headingStyles={styles.h4}>Comments</Heading>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Spinner/>
            ) : data ? (
                <div className={styles.commentsContainer}>
                    {data.comments.length || newComments.length
                        ? data.comments.concat(newComments).map(item => (
                            <Comment type={"main"} name={item.user.username} key={item.body}>
                                {item.body}
                            </Comment>
                        ))
                        : <Heading headingLevel={"h4"} headingStyles={styles.h4}>No Comments</Heading>}
                </div>
            ) : null
            }
        </div>

    );
}

export default SinglePostComments;