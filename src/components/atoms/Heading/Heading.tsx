import React from "react";
import "./heading.module.css";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    fontFamily: "Manrope" | "Poppins" | "Inter" | "Public Sans" | "Quicksand";
    fontWeight: "400" | "500" | "600" | "700" | "800";
    fontSize: string;
    lineHeight: string;
    color: string;
    letterSpacing?: string
}

function Heading({headingLevel = "p", fontFamily, fontWeight, fontSize, lineHeight, color, letterSpacing, children}: HeadingProps) {
    const inlineStyles = {
        fontFamily: `${fontFamily}, system-ui, sans-serif`,
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: lineHeight,
        color: color,
        letterSpacing: letterSpacing,
    }

    const NewHeading = ({...props}: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement(headingLevel, props, children)

    return <NewHeading style={inlineStyles}>{children}</NewHeading>
}

export default Heading;