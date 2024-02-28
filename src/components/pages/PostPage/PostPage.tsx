import PostPageTemplate from "../../templates/PostPageTemplate/PostPageTemplate.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {clearNewComments} from "../../../store/slices/newCommentsSlice.ts";

function PostPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearNewComments())
    }, []);


    return (
        <>
            <PostPageTemplate/>
        </>
    );
}

export default PostPage;