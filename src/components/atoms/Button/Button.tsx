import styles from "./button.module.css"
import Icon from "../Icon/Icon.tsx";

interface ButtonProps {
    label: string;
    theme?: string;
    iconType?: string;
}

function Button({label, theme = "primary", iconType}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[theme]}`}
            onClick={() => {
            }}
        >
            <label className={styles.label}>{label}</label>
            {iconType ? <Icon id={iconType}/> : null}
        </button>
    )
}

export default Button;