import styles from "./mainSectionFigure.module.css"
import OrderCard from "../OrderCard/OrderCard.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";
import topRightWave from "../../../assets/images/topRightWave.png";
import foodImage from "../../../assets/images/foodImage.png";
import arrow from "../../../assets/images/arrow.png";
import graph from "../../../assets/images/graph.png";
import bottomLeftWave from "../../../assets/images/bottomLeftWave.png";

function MainSectionFigure() {

    return (
        <figure className={styles.figure}>
            <div className={styles.orderContainer}>
                <OrderCard label={"Chicken Hell"} status={"On The Way"} time={"3:09 PM"} imageId={"chickenHell"}/>
                <CustomImage source={topRightWave} altText={"Top Right Wave"}
                             imageStyles={styles.topRightWave}/>
            </div>
            <div className={styles.foodContainer}>
                <CustomImage source={foodImage} altText={"Food Image"}
                             imageStyles={styles.foodImage}/>
                <CustomImage source={arrow} altText={"Arrow"}
                             imageStyles={styles.arrow}/>
            </div>
            <div className={styles.graphContainer}>
                <CustomImage source={graph} altText={"graph"}
                             imageStyles={styles.graph}/>

                <CustomImage source={bottomLeftWave} altText={"Bottom Left Wave"}
                             imageStyles={styles.bottomLeftWave}/>
            </div>
        </figure>
    );
}

export default MainSectionFigure;