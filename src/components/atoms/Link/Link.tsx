import React from 'react';
import Heading from "../Heading/Heading.tsx";
import styles from "./link.module.css"
import Icon from "../Icon/Icon.tsx";

interface LinkProps {
    children: React.ReactNode;
    linkTo: string;
    iconType?: string;
    type?: string;
}

function Link({children, linkTo, iconType, type = "default"}: LinkProps) {
    if (type === "shorts") {
        return (
            <a href={linkTo} className={styles.link}>
                <Heading headingLevel={"h3"} headingStyles={styles.linkH3}>
                    {children}
                </Heading>
                {iconType ? <Icon id={iconType}/> : null}
            </a>
        )
    }

    return (
        <a href={linkTo} className={styles.link}>
            <Heading headingLevel={"p"} headingStyles={styles.linkP}>
                {children}
            </Heading>
            {iconType ? <Icon id={iconType}/> : null}
        </a>
    )
}

export default Link;
