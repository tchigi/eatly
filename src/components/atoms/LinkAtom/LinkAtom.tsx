import React from 'react';
import Heading from "../Heading/Heading.tsx";
import styles from "./linkAtom.module.css"
import Icon from "../Icon/Icon.tsx";
import {NavLink, useLocation} from "react-router-dom";

interface LinkProps {
    children: React.ReactNode;
    linkTo: string;
    iconType?: string;
    type?: string;
    highlighted?: boolean;
}

function LinkAtom({children, linkTo, iconType, type = "header", highlighted}: LinkProps) {
    const location = useLocation()

    function isActiveHandler(isActive: boolean) {
        const base = isActive && (location.pathname !== "/") ? styles.active : `${styles.link} ${styles[type]}`
        return highlighted ? `${base} ${styles.highlighted}` : base
    }

    if (type === "shorts") {
        return (
            <NavLink to={linkTo} className={`${styles.link} ${styles[type]}`}>
                <Heading headingLevel={"h3"} headingStyles={styles.linkH3}>
                    {children}
                </Heading>
                {iconType ? <Icon id={iconType}/> : null}
            </NavLink>
        )
    }

    return (
        <NavLink to={linkTo} className={({isActive}) => isActiveHandler(isActive) }>
            <Heading headingLevel={"p"} headingStyles={styles.linkP}>
                {children}
            </Heading>
            {iconType ? <Icon id={iconType}/> : null}
        </NavLink>
    )
}

export default LinkAtom;
