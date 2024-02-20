import styles from './blogPageTemplate.module.css';
import Blog from "../../organisms/Blog/Blog.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";

function BlogPageTemplate() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                    Latest <span>Articles</span>
                </Heading>
                <Blog/>
            </div>
        </main>
    );
}

export default BlogPageTemplate;