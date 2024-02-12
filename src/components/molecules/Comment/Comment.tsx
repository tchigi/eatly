import styles from "./comment.module.css"
import React from "react";
import Heading from "../../atoms/Heading/Heading.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import CommentStars from "../../atoms/CommentStars/CommentStars.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";

interface CommentProps {
    type: "main" | "slider",
    name?: string,
    period?: string,
    stars: number,
    children: React.ReactNode,
}

function Comment({type = "slider", name, period, stars, children}: CommentProps) {
    if (type === "main") {
        return (
            <div className={styles.commentContainer}>
                <div className={styles.header}>
                    <div className={styles.avatar}>
                        <CustomImage source={"src/assets/images/avatar.png"} altText={"Comment Avatar"}/>
                    </div>
                    <div className={styles.textContainer}>
                        <Heading headingLevel={"h3"} headingStyles={styles.h3}>
                            {name}
                        </Heading>
                        <Heading headingLevel={"p"} headingStyles={styles.p}>
                            {period}
                        </Heading>
                    </div>
                    <Icon id={"quotes"}/>
                </div>
                <div className={styles.text}>
                    {children}
                </div>
                <CommentStars count={stars}/>
            </div>
        )
    }
    return (
        <div className={styles.commentContainer}>
            <div className={styles.text}>
                {children}
            </div>
            <CommentStars count={stars}/>
        </div>
    );
}

export default Comment;