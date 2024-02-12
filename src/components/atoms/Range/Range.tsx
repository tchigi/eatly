import styles from "./range.module.css"

interface RangeProps {
    value: number
}

function Range({value}: RangeProps) {
    const theme = value < 25 ? "red" : value < 50 ? "yellow" : "purple"

    return (
        <div className={styles.rangeBg + " " + styles[theme]}>
            <div className={styles.range} style={{width: `${value < 0 ? 0 : value > 100 ? 100 : value}%`}}></div>
        </div>
    );
}

export default Range;