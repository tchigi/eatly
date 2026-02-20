import styles from "./button.module.css"
import Icon from "../Icon/Icon.tsx";

interface ButtonProps {
    label: string | null;
    theme?: "primary" | "inverted" | "ghost";
    iconType?: string;
    onclickFunction?: () => void;
    disabled?: boolean;
    iconPos?: "left" | "right"
}

function Button({label, theme = "primary", iconType, iconPos, onclickFunction, disabled = false}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[theme]}`}
            onClick={onclickFunction}
            disabled={disabled}
        >
            {iconType && iconPos === "left" ? <Icon id={iconType}/> : null}
            {label ? <label className={styles.label}>{label}</label> : null}
            {iconType && iconPos === "right" ? <Icon id={iconType}/> : null}
        </button>
    )
}

export default Button;