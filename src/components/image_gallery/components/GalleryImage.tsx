import type { ReactElement } from "react";

// TODO document

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