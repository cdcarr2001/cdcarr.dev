import { useRef, useState, type ActionDispatch, type MouseEvent, type ReactElement } from "react";

// TODO document
// TODO finish visuals
// TODO Implement buttons, click and drag, and/or scrolling for moving images in gallery
// TODO maybe sync with popup button presses?

export default function Gallery(
    props: GalleryProps
): ReactElement {

    const galleryContainerRef = useRef<HTMLDivElement>(null);
    // Must spread operator the array or it will cause a desync with popup image gallery
    const [ images, setImages ] = useState([...props.images]);
    
    const onImageClickHandler = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        let imageIndexRaw = (event.target as HTMLElement).dataset.imageIndex;

        if (imageIndexRaw) {
            
            props.popUpImage(Number.parseInt(imageIndexRaw));
        }
    }

    const onLeftButtonClick = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        // If the gallery container reference is not found, do nothing and return
        if (!galleryContainerRef.current) {

            return;
        }

        if (galleryContainerRef.current?.scrollWidth > galleryContainerRef.current?.clientWidth) {

            let image = images.pop()!;

            setImages([image, ...images]);
        }
    }

    const onRightButtonClick = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        // If the gallery container reference is not found, do nothing and return
        if (!galleryContainerRef.current) {

            return;
        }

        if (galleryContainerRef.current?.scrollWidth > galleryContainerRef.current?.clientWidth) {

            let image = images.shift()!;
            setImages([...images, image]);
        }
    }

    return(
        <div
            className="image-gallery"
            style={{
                height: props.height,
                maxHeight: props.height,
                width: props.width,
                maxWidth: props.width
            }}
        >
            <div
                ref={galleryContainerRef}
                className='gallery-container'
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className='gallery-image-container'
                        onClick={onImageClickHandler}
                    >
                        {image}
                    </div>
                ))}
            </div>
            <button
                className='arrow left'
                onClick={onLeftButtonClick}
            >
                <p>{"<"}</p>
            </button>
            <button
                className='arrow right'
                onClick={onRightButtonClick}
            >
                <p>{">"}</p>
            </button>
        </div>
    );
}

type GalleryProps = {

    imagePaths: string[],
    popUpImage: ActionDispatch<[number]>,
    images: ReactElement[],
    height?: number | string,
    width?: number | string,
}