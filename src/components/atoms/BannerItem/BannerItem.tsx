import styles from './bannerItem.module.css'
import Heading from "../Heading/Heading.tsx";

interface BannerItemProps {
    title: string;
    children: React.ReactNode;
}

function BannerItem({title, children}: BannerItemProps) {
    return (
        <div className={styles.bannerItem}>
            <Heading headingLevel={"p"} headingStyles={styles.title}>
                {title}
            </Heading>
            <Heading headingLevel={"p"} headingStyles={styles.children}>
                {children}
            </Heading>
        </div>
    );
}

export default BannerItem;