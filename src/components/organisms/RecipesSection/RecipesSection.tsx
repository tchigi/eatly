import styles from './recipesSection.module.css';
import Link from "../../atoms/Link/Link.tsx";
import RecipesShorts from "../../molecules/RecipesShorts/RecipesShorts.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";

function RecipesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                    Our Top <span>Recipes</span>
                </Heading>
                <div className={styles.recipesContainer}>
                    <RecipesShorts badge={"Pizza"} title={"Chicken"} time={"25 min"} score={"4.9"}
                                   imgSrc={"src/assets/images/resturentImage.png"}/>
                    <RecipesShorts badge={"Pizza"} title={"Chicken"} time={"25 min"} score={"4.9"}
                                   imgSrc={"src/assets/images/resturentImage.png"}/>
                    <RecipesShorts badge={"Pizza"} title={"Chicken"} time={"25 min"} score={"4.9"}
                                   imgSrc={"src/assets/images/resturentImage.png"}/>
                </div>
                <Link linkTo={"/"} iconType={"arrowRight"}>
                    View All
                </Link>
            </div>
            <Hr marginTop={"7.6rem"}/>
        </section>
    );
}

export default RecipesSection;