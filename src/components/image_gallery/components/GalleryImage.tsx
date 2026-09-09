import type { ReactElement } from "react";

/**
 * Gallery image with css applied
 * @param props src: Image source path; index: index in array of images
 * @returns <img> element
 */
export default function GalleryImage(
    props: GalleryImageProps
): ReactElement {

    return(
        <img
            className='image'
            src={props.src}
            data-image-index={props.index}
        />
    );
}

type GalleryImageProps = {

    src: string,
    index?: number
}