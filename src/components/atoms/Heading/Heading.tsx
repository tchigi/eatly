import React from "react";
import "./heading.module.css";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    headingStyles: string;
}

function Heading({headingLevel = "p", headingStyles, children}: HeadingProps) {
    // ^^^ Паттерн Фасад - Facade

    const NewHeading = ({...props}: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement(headingLevel, props, children)

    // ^^^ Паттерн Constructor - Конструктор

    return <NewHeading className={headingStyles}>{children}</NewHeading>
}

export default Heading;