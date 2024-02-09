import React from 'react';
import Heading from "../Heading/Heading.tsx";
import styles from "./link.module.css"

interface LinkProps {
    children: React.ReactNode;
    linkTo: string;
}
function Link({children, linkTo}: LinkProps) {

    return (
        <a href={linkTo} className={styles.link}>
            <Heading fontSize={"1.1rem"} fontFamily={"Inter"} fontWeight={"500"} lineHeight={"1.67rem"} headingLevel={"p"} color={"rgb(96, 96, 96)"}>
                {children}
            </Heading>
        </a>
    )
}

export default Link;
