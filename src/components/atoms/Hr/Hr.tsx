import styles from "./hr.module.css"

interface HrProps {
    marginTop: string
}

function Hr({marginTop}: HrProps) {
    return (
        <hr style={{marginTop: marginTop}} className={styles.hr}/>
    );
}

export default Hr;