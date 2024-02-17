import styles from "./recipesShorts.module.css"
import Badge from "../../atoms/Badge/Badge.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import LinkAtom from "../../atoms/LinkAtom/LinkAtom.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";

interface RecipesShortsProps {
    badge: string;
    title: string;
    time: string;
    score: string;
    imgSrc: string;
}

function RecipesShorts({badge, title, time, score, imgSrc}: RecipesShortsProps) {
    return (
        <div className={styles.shorts}>
            <div className={styles.bg}>
                <CustomImage source={imgSrc} altText={"shortsImage"}/>
            </div>
            <div className={styles.shortsBody}>
                <Badge label={badge}/>
                <div className={styles.titleLine}>
                    <LinkAtom linkTo={"/"} type={"shorts"}>
                        {title}
                    </LinkAtom>
                    <button className={styles.bookMark} onClick={() => {
                    }}>
                        <Icon id={"bookMark"}/>
                    </button>
                </div>
                <div className={styles.infoContainer}>
                    <Heading headingLevel={"p"} headingStyles={styles.p}>
                        {time} •
                    </Heading>
                    <Icon id={"star"}/>
                    <Heading headingLevel={"p"} headingStyles={styles.p}>
                        {score}
                    </Heading>
                </div>
            </div>
        </div>
    );
}

export default RecipesShorts;