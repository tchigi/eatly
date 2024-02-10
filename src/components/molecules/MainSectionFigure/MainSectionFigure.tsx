import styles from "./mainSectionFigure.module.css"
import OrderCard from "../OrderCard/OrderCard.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";

function MainSectionFigure() {

    return (
        <figure className={styles.figure}>
            <OrderCard label={"Chicken Hell"} status={"On The Way"} time={"3:09 PM"} imageId={"chickenHell"}/>
            <CustomImage source={"src/assets/images/graph.png"} altText={"graph"}
                         imageStyles={styles.graph}/>
            <CustomImage source={"src/assets/images/foodImage.png"} altText={"Food Image"}
                         imageStyles={styles.foodImage}/>
            <CustomImage source={"src/assets/images/arrow.png"} altText={"Arrow"}
                         imageStyles={styles.arrow}/>
            <CustomImage source={"src/assets/images/bottomLeftWave.png"} altText={"Bottom Left Wave"}
                         imageStyles={styles.bottomLeftWave}/>
            <CustomImage source={"src/assets/images/topRightWave.png"} altText={"Top Right Wave"}
                         imageStyles={styles.topRightWave}/>
        </figure>
    );
}

export default MainSectionFigure;