import styles from "./badge.module.css"
interface BadgeProps {
    label: string;
    type: string;
}

function Badge({label, type}:BadgeProps) {
    const validType = type.toLowerCase()
    return (
        <div className={`${styles.badge} ${styles[validType]}`}>
            {label}
        </div>
    );
}

export default Badge;