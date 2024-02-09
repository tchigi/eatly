import SocialMediaIcon from "../../atoms/SocialMediaIcon/SocialMediaIcon.tsx";
import styles from "./socialMediaContainer.module.css"

function SocialMediaContainer() {
    return (
        <div className={styles.socialMediaContainer}>
            <SocialMediaIcon id={"instagram"}/>
            <SocialMediaIcon id={"linkedin"}/>
            <SocialMediaIcon id={"facebook"}/>
            <SocialMediaIcon id={"twitter"}/>
        </div>
    );
}

export default SocialMediaContainer;