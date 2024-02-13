import styles from "./banner.module.css"
import BannerItem from "../../atoms/BannerItem/BannerItem.tsx";
import Hr from "../../atoms/Hr/Hr.tsx";
import CustomImage from "../../atoms/Image/CustomImage.tsx";

function Banner() {
    return (
        <div className={styles.banner}>
            <BannerItem title={"10K+"}>
                Satisfied Costumers <br/>
                All Great Over The World
            </BannerItem>
            <Hr width={"0"} height={"auto"} color={"rgba(197, 197, 197, .15)"}/>
            <BannerItem title={"4M"}>
                Healthy Dishes Sold <br/>
                Including Milk Shakes Smooth
            </BannerItem>
            <Hr width={"0"} height={"auto"} color={"rgba(197, 197, 197, .15)"}/>
            <BannerItem title={"99.99%"}>
                Reliable Customer Support <br/>
                We Provide Great Experiences
            </BannerItem>
            <CustomImage source={"src/assets/images/bannerLines/line1.png"} altText={"line1"}
                         imageStyles={styles.line1}/>
            <CustomImage source={"src/assets/images/bannerLines/line2.png"} altText={"line2"}
                         imageStyles={styles.line2}/>
            <CustomImage source={"src/assets/images/bannerLines/line3.png"} altText={"line3"}
                         imageStyles={styles.line3}/>
            <CustomImage source={"src/assets/images/bannerLines/line4.png"} altText={"line4"}
                         imageStyles={styles.line4}/>
        </div>
    );
}

export default Banner;