import {useState} from 'react';
import styles from './customImage.module.css';
import Spinner from "../Spinner/Spinner.tsx";

interface ImageProps {
    source: string;
    altText: string;
    imageStyles?: string;
}

function CustomImage({source, altText, imageStyles}: ImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className={`${styles.placeholder} ${imageStyles ?? ''}`} aria-label={altText}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#c5c5c5" strokeWidth="1.5"/>
                    <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#c5c5c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="#c5c5c5"/>
                    <line x1="2" y1="2" x2="22" y2="22" stroke="#c5c5c5" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </div>
        );
    }

    return (
        <>
            {isLoading && (
                <div className={`${styles.spinnerWrapper} ${imageStyles ?? ''}`}>
                    <Spinner/>
                </div>
            )}
            <img
                src={source}
                alt={altText}
                className={imageStyles}
                style={isLoading ? {display: 'none'} : undefined}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
            />
        </>
    );
}

export default CustomImage;
