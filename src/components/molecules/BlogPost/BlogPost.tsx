import styles from "./blogPost.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import BlogPostBody from "../../atoms/BlogPostBody/BlogPostBody.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import {NavLink} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo.tsx";

interface BlogPostProps {
    post: {
        title: string,
        tags: Array<string>,
        reactions: { likes: number, dislikes: number },
        body: string,
        id: number,
        userId: number
    }
}

function BlogPost({post}: BlogPostProps) {
    const convertTags = [...post.tags].map(x => "#" + x).join(", ")

    return (
        <NavLink to={`/post/${post.id}`} className={styles.container} data-testid={"shortsPost"}>
            <div className={styles.titleContainer}>
                <Heading headingStyles={styles.title} headingLevel={"h3"}>
                    {post.title}
                </Heading>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.firstLine}>
                    <UserInfo userId={post.userId}/>
                    <div className={styles.reactionsContainer}>
                        <p>{post.reactions.likes}</p>
                        <Icon id={"star"}/>
                    </div>
                </div>
                <Heading headingLevel={"p"} headingStyles={styles.tags}>
                    {convertTags}
                </Heading>
            </div>
            <BlogPostBody body={post.body}/>
        </NavLink>
    );
}

export default BlogPost;