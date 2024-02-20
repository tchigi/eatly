import styles from "../MainPageTemplate/mainPageTemplate.module.css";
import Blog from "../../organisms/Blog/Blog.tsx";
import SinglePost from "../../organisms/SinglePost/SinglePost.tsx";


function PostPageTemplate() {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <SinglePost/>
            </div>
        </main>
    );
}

export default PostPageTemplate;