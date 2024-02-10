import styles from './bannerItem.module.css'
import Heading from "../Heading/Heading.tsx";

interface BannerItemProps {
    title: string;
    children: React.ReactNode;
}

function BannerItem({title, children}:BannerItemProps) {
    return (
        <div className={styles.bannerItem}>
            <Heading headingLevel={"p"} fontFamily={"Public Sans"} fontWeight={"700"} fontSize={"2.7rem"} lineHeight={"3.38rem"} color={"rgb(255, 255, 255)"}>
                {title}
            </Heading>
            <Heading headingLevel={"p"} fontFamily={"Inter"} fontWeight={"500"} fontSize={"0.9rem"} lineHeight={"1.35rem"} color={"rgb(197, 191, 237)"}>
                {children}
            </Heading>
        </div>
    );
}

export default BannerItem;