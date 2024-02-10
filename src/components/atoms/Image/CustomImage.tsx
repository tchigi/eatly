interface ImageProps {
    source: string;
    altText: string;
    imageStyles?: string;
}

function CustomImage({ source, altText, imageStyles}: ImageProps) {
    return <img src={source} alt={altText} className={imageStyles}/>;
}

export default CustomImage;