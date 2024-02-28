import styles from './blog.module.css';
import {useGetBlogQuery} from "../../../store/services/blogApi.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import BlogPost from "../../molecules/BlogPost/BlogPost.tsx";
import Pagination from "../../molecules/Pagination/Pagination.tsx";

function Blog() {
    const page = useSelector((state: RootState) => state.blog.page)
    const {data, error, isLoading} = useGetBlogQuery(page)

    return (
        <div className={styles.blogContainer}>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <div className={styles.grid}>
                        {
                            data.posts.map((post) => (
                                <BlogPost key={post.id} id={post.id} title={post.title} body={post.body}
                                          reactions={post.reactions}
                                          tags={post.tags} userId={post.userId}/>
                            ))
                        }
                    </div>
                    <Pagination/>
                </>
            ) : null
            }
        </div>
    );
}

export default Blog;