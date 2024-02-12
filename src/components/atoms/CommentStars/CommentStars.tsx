import styles from "./commentStars.module.css"
import Icon from "../Icon/Icon.tsx";

interface CommentStarProps {
    count: number
}

function CommentStars({count}: CommentStarProps) {
    const starsHandler = count > 5 ? 5 : count < 1 ? 1 : count

    function starsRender(x: number) {
        const result = []

        for (let i = 0; i < x; i++) {
            result.push(`star${i}`)
        }

        return (
            <>
                {result.map((item) => {
                    return <Icon id={"commentStar"} key={item}/>
                })}
            </>
        )
    }


    return (
        <div className={styles.starsContainer}>
            {starsRender(starsHandler)}
        </div>
    );
}

export default CommentStars;