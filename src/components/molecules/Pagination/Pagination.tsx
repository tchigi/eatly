import React from 'react';
import styles from "./pagination.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store.ts";
import {useGetBlogQuery} from "../../../store/services/blogApi.ts";
import Button from "../../atoms/Button/Button.tsx";
import {incrementPage, decrementPage} from "../../../store/slices/blogSlice.ts";

function Pagination(props) {
    const dispatch = useDispatch()
    const page = useSelector((state: RootState) => state.blog.page)
    const {data} = useGetBlogQuery(page)

    function isLeftArrowDisabled() {
        return page === 1
    }
    function isRightArrowDisabled() {
        return data.total <= data.skip + data.limit
    }

    return (
        <div className={styles.container}>
            <Button label={null} iconType={"paginationArrow"} theme={"ghost"} disabled={isLeftArrowDisabled()} onclickFunction={() => dispatch(decrementPage())}/>
            <Button label={null} iconType={"paginationArrow"} theme={"ghost"} disabled={isRightArrowDisabled()} onclickFunction={() => dispatch(incrementPage())}/>
        </div>
    );
}

export default Pagination;