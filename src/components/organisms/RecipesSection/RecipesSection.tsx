import styles from './recipesSection.module.css';
import RecipesShorts from "../../molecules/RecipesShorts/RecipesShorts.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";
import {useGetRecipesQuery} from "../../../store/services/recipesApi.ts";
import BlogPost from "../../molecules/BlogPost/BlogPost.tsx";
import Pagination from "../../molecules/Pagination/Pagination.tsx";

function RecipesSection() {
    const {data, error, isLoading} = useGetRecipesQuery()


    return (
        <section className={styles.section} id="recipes">
            <div className={styles.sectionContainer}>
                <Heading headingLevel={"h2"} headingStyles={styles.h2}>
                    Our Top <span>Recipes</span>
                </Heading>
                <div className={styles.recipesContainer}>
                    {error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data.recipes ? (
                        <>
                            {
                                [...data.recipes].sort((a, b) => b.rating - a.rating).slice(0, 3).map((item) => (

                                    <RecipesShorts badge={item.tags} title={item.name}
                                                   time={`${item.cookTimeMinutes + item.prepTimeMinutes}min`}
                                                   score={item.rating}
                                                   imgSrc={item.image} key={item.id}/>

                                ))
                            }
                        </>
                    ) : null
                    }
                </div>
            </div>
            <Hr/>
        </section>
    );
}

export default RecipesSection;