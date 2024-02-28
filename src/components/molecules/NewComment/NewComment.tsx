import React, {useState} from 'react';
import Button from "../../atoms/Button/Button.tsx";
import styles from "./newComment.module.css"
import {useAddPostCommentMutation} from "../../../store/services/commentsApi.ts";
import {useDispatch} from "react-redux";
import {addNewComment} from "../../../store/slices/newCommentsSlice.ts";

interface NewCommentProps {
    postId: number,
}

function NewComment({postId}: NewCommentProps) {
    const [comment, setComment] = useState("")
    const [addComment] = useAddPostCommentMutation()
    const dispatch = useDispatch()

    function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setComment(e.target.value)
    }

    async function onSendHandler() {
        if (comment) {
            const res = await addComment({
                body: comment,
                postId: postId,
                userId: 1,
            }).unwrap()
            dispatch(addNewComment(res))
            setComment("")
        }
    }

    return (
        <div className={styles.container}>
            <textarea placeholder={"Enter  your comment"} value={comment} onChange={onChangeHandler}
                      className={styles.input}/>
            <Button label={"Send"} onclickFunction={onSendHandler}/>
        </div>
    );
}

export default NewComment;