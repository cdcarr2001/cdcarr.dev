import type { ActionDispatch, MouseEvent, ReactElement } from "react";

// TODO document
// TODO finish visuals
// TODO Implement buttons, click and drag, and/or scrolling for moving images in gallery

export default function Gallery(
    props: GalleryProps
): ReactElement {
    
    const onImageClickHandler = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        let imageIndexRaw = (event.target as HTMLElement).dataset.imageIndex;

        if (imageIndexRaw) {
            
            props.popUpImage(Number.parseInt(imageIndexRaw));
        }
    }

    return(
        <div
            className='gallery-container'
        >
            {props.children.map((image, index) => (
                <div
                    key={index}
                    className='gallery-image-container'
                    onClick={onImageClickHandler}
                >
                    {image}
                </div>
            ))}
        </div>
    );
}

type GalleryProps = {

    imagePaths: string[],
    popUpImage: ActionDispatch<[number]>,
    children: ReactElement[]
}