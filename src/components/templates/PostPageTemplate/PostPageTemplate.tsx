import styles from "./postPageTemplate.module.css";
import SinglePost from "../../organisms/SinglePost/SinglePost.tsx";


function PostPageTemplate() {
    return (
        <main className={styles.main} data-testid={"main"}>
            <div className={styles.wrapper} data-testid={"postPage"}>
                <SinglePost/>
            </div>
        </main>
    );
}

export default PostPageTemplate;