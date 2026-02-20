import styles from './singlePost.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {useGetSinglePostQuery} from "../../../store/services/singlePostApi.ts";
import Heading from "../../atoms/Heading/Heading.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import Button from "../../atoms/Button/Button.tsx";
import UserInfo from "../../molecules/UserInfo/UserInfo.tsx";
import SinglePostComments from "../../molecules/SinglePostComments/SinglePostComments.tsx";
import NewComment from "../../molecules/NewComment/NewComment.tsx";
import Spinner from "../../atoms/Spinner/Spinner.tsx";

function SinglePost() {
    const {postId} = useParams<{ postId: string }>()
    const adaptedPostId = Number(postId)
    // ^^^ Паттерн Адаптер (Adapter)

    const {data, error, isLoading} = useGetSinglePostQuery(adaptedPostId)
    const navigate = useNavigate()

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Spinner/>
            ) : data ? (
                <>
                    <div className={styles.postInfoContainer}>
                        <Heading headingLevel={"h3"} headingStyles={styles.title}>
                            {data.title}
                        </Heading>
                        <div className={styles.userInfoWrapper}>
                            <UserInfo userId={data.userId}/>
                            <div className={styles.tagsContainer}>
                                <div className={styles.reactionContainer}>
                                    {data.reactions.likes}
                                    <Icon id={"star"}/>
                                </div>
                                <p>{data.tags.map(item => "#" + item).join(", ")}</p>
                            </div>
                        </div>
                        <Heading headingLevel={"p"} headingStyles={styles.body}>
                            {data.body}
                        </Heading>
                        <Button label={"All Articles"} theme={"inverted"} iconType={"arrowRight"} iconPos={"left"}
                                onclickFunction={() => navigate("/blog")}/>
                    </div>
                    <SinglePostComments id={adaptedPostId}/>
                    <NewComment postId={adaptedPostId}/>
                </>

            ) : null
            }
        </>
    );
}

export default SinglePost;