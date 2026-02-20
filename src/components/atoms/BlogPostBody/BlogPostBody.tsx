import styles from "./blogPostBody.module.css"
import Heading from "../Heading/Heading.tsx";

interface BlogPostBodyProps {
    body: string
}
function BlogPostBody({body}:BlogPostBodyProps) {
    return (
        <div className={styles.container}>
            <Heading headingLevel={"p"} headingStyles={styles.body}>
                {body}
            </Heading>
        </div>

    );
}

export default BlogPostBody;