import styles from "./blogPost.module.css"
import Heading from "../../atoms/Heading/Heading.tsx";
import BlogPostBody from "../../atoms/BlogPostBody/BlogPostBody.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import {NavLink} from "react-router-dom";

interface BlogPostProps {
    title: string,
    tags: Array[string],
    reactions: string,
    body: string,
    id: number
}

function BlogPost({title, tags, reactions, body, id}: BlogPostProps) {
    const convertTags = [...tags].map(x => "#" + x).join(", ")

    return (
        <NavLink to={`/post/${id}`} className={styles.container}>
            <div className={styles.titleContainer}>
                <Heading headingStyles={styles.title} headingLevel={"h3"}>
                    {title}
                </Heading>
            </div>
            <div className={styles.middleContainer}>
                <Heading headingLevel={"p"} headingStyles={styles.tags}>
                    {convertTags}
                </Heading>
                <div className={styles.reactionsContainer}>
                    <p>{reactions}</p>
                    <Icon id={"star"}/>
                </div>
            </div>
            <BlogPostBody body={body}/>
        </NavLink>
    );
}

export default BlogPost;