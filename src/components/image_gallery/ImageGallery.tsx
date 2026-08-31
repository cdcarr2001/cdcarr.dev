import type { ReactElement } from "react";

import './ImageGallery.css';

export default function ImageGallery(
    props: ImageGalleryProps
): ReactElement {

    return(
        <div
            className='image-gallery'
            style={{
                width: props.width,
                height: props.height,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor
            }}
        >
            {props.imagePaths.map((image) => (

                <div
                    className='image-container'
                >
                <img
                    className='image-thumbnail'
                    src={image}
                />
                </div>
            ))}
        </div>
    );
}

type ImageGalleryProps = {

    imagePaths: string[],
    width?: string | number,
    height?: string | number,
    borderWidth?: string | number,
    borderColor?: string,
    backgroundColor?: string
}