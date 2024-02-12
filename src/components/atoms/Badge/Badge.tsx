import styles from "./badge.module.css"
interface BadgeProps {
    label: string;
    textColor?: string;
    bgColor?: string;
}

function Badge({label, textColor = "rgb(218, 163, 26)", bgColor = "rgb(247, 237, 208)"}:BadgeProps) {
    return (
        <div className={styles.badge} style={{color: textColor, backgroundColor: bgColor}}>
            {label}
        </div>
    );
}

export default Badge;