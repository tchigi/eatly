import styles from "./mainSectionFigure.module.css"
import OrderCard from "../OrderCard/OrderCard.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";

function MainSectionFigure() {

    return (
        <figure className={styles.figure}>
            <div className={styles.orderContainer}>
                <OrderCard label={"Chicken Hell"} status={"On The Way"} time={"3:09 PM"} imageId={"chickenHell"}/>
                <CustomImage source={"src/assets/images/topRightWave.png"} altText={"Top Right Wave"}
                             imageStyles={styles.topRightWave}/>
            </div>
            <div className={styles.foodContainer}>
                <CustomImage source={"src/assets/images/foodImage.png"} altText={"Food Image"}
                             imageStyles={styles.foodImage}/>
                <CustomImage source={"src/assets/images/arrow.png"} altText={"Arrow"}
                             imageStyles={styles.arrow}/>
            </div>
            <div className={styles.graphContainer}>
                <CustomImage source={"src/assets/images/graph.png"} altText={"graph"}
                             imageStyles={styles.graph}/>

                <CustomImage source={"src/assets/images/bottomLeftWave.png"} altText={"Bottom Left Wave"}
                             imageStyles={styles.bottomLeftWave}/>
            </div>
        </figure>
    );
}

export default MainSectionFigure;