import styles from "./dropdown.module.css"
import Icon from "../Icon/Icon.tsx";
import {useState} from "react";

interface DropdownProps {
}

function Dropdown({}: DropdownProps) {
    const [currentOption] = useState("This month")
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.dropdown} onClick={() => {
            setIsActive(prevState => !prevState)
        }}>
            <div className={`${styles.currentOption} ${isActive ? styles.activeOption : ""}`}>
                {currentOption}
                <Icon id={"chevronDown"}/>
            </div>
            {/*<div className={styles.menu}></div>*/}
        </div>
    );
}

export default Dropdown;