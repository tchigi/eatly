import styles from './recipesSection.module.css';
import RecipesShorts from "../../molecules/RecipesShorts/RecipesShorts.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";

function RecipesSection() {
    return (
        <section className={styles.section} id="recipes">
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
            </div>
            <Hr/>
        </section>
    );
}

export default RecipesSection;