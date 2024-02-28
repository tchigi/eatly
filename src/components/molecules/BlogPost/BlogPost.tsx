import styles from "./blogPost.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import BlogPostBody from "../../atoms/BlogPostBody/BlogPostBody.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import {NavLink} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo.tsx";

interface BlogPostProps {
    title: string,
    tags: Array<string>,
    reactions: string,
    body: string,
    id: number,
    userId: number
}

function BlogPost({title, tags, reactions, body, id, userId}: BlogPostProps) {
    const convertTags = [...tags].map(x => "#" + x).join(", ")

    return (
        <NavLink to={`/post/${id}`} className={styles.container}>
            <div className={styles.titleContainer}>
                <Heading headingStyles={styles.title} headingLevel={"h3"}>
                    {title}
                </Heading>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.firstLine}>
                    <UserInfo userId={userId}/>
                    <div className={styles.reactionsContainer}>
                        <p>{reactions}</p>
                        <Icon id={"star"}/>
                    </div>
                </div>
                <Heading headingLevel={"p"} headingStyles={styles.tags}>
                    {convertTags}
                </Heading>
            </div>
            <BlogPostBody body={body}/>
        </NavLink>
    );
}

export default BlogPost;