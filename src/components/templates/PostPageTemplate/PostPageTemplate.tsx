import styles from "../MainPageTemplate/mainPageTemplate.module.css";
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