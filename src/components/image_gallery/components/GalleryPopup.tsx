import { useEffect, useReducer, useState, type ActionDispatch, type MouseEvent, type ReactElement } from "react";

// TODO document
// TODO add exit button maybe?

export default function GalleryPopup(
    props: GalleryPopupProps
): ReactElement {

    const [ thumbnailImages, setThumbnailImages ] = useState<ReactElement[][]>();

    const [ imageIndex, setIndex ] = useReducer(
        (currentIndex: number, newIndex: number) => {

            if (newIndex < 0 || newIndex >= props.images.length) {

                console.error(`Cannot set index to ${newIndex}: out of range`);
                return(currentIndex);
            }
            else {

                return(newIndex);
            }
        },
        props.popUpIndex
    );

    const shiftIndex = (direction: 'left' | 'right'): void => {

        switch (direction) {

            case "left": {

                if (imageIndex == 0) {

                    setIndex(props.images.length - 1);
                }
                else {

                    setIndex(imageIndex - 1);
                }
                break;
            }
            case "right": {

                if (imageIndex == props.images.length - 1) {

                    setIndex(0);
                }
                else {

                    setIndex(imageIndex + 1);
                }
                break;
            }
        }
    }

    const onClickHandler = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        props.closePopup();
    }

    const onClickContainerHandler = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();
    }

    const onLeftButton = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        shiftIndex('left');
    }

    const onRightButton = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        shiftIndex('right');
    }

    const onThumbnailClick = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        let imageIndexRaw = (event.target as HTMLElement).dataset.imageIndex;

        if (imageIndexRaw) {
            
            setIndex(Number.parseInt(imageIndexRaw));
        }
    }

    useEffect(() => {

        let imagesCopy: ReactElement[] = [...props.images];

        let arrayLengthMinusCenter = imagesCopy.length - 1;

        let halfArray = arrayLengthMinusCenter / 2;

        let leftAmount = Math.ceil(halfArray);

        let rightAmount = Math.floor(halfArray);

        let centerImage = imagesCopy.slice(imageIndex, imageIndex + 1);
        let leftImages: ReactElement[] = [];
        let rightImages: ReactElement[] = [];

        for (let amount = 0, index = imageIndex - 1; leftAmount > amount; amount++, index--) {

            if (index < 0) {

                index += imagesCopy.length;
            }
            
            leftImages.unshift(imagesCopy[index]);
        }

        for (let amount = 0, index = imageIndex + 1; rightAmount > amount; amount++, index++) {

            if (index > imagesCopy.length - 1) {

                index -= imagesCopy.length;
            }
            
            rightImages.push(imagesCopy[index]);
        }

        setThumbnailImages([leftImages, centerImage, rightImages]);
    }, [imageIndex]);

    return(
        <div
            className='image-gallery-popup'
            onClick={onClickHandler}
        >
            <div
                className='popup-container'
                onClick={onClickContainerHandler}
            >
                <div
                    className='popup-image-container'
                >
                    {props.images[imageIndex]}
                </div>
                <div
                    className='thumbnails'
                >

                    {
                        thumbnailImages ? 
                            <div
                                className='thumbnail-containers-container left'
                            >
                                {thumbnailImages[0].map((image, index) => (
                                    <div
                                        key={index}
                                        className='thumbnail-image-container'
                                        onClick={onThumbnailClick}
                                    >
                                        {image}
                                    </div>
                                ))}
                            </div>
                            : undefined
                    }
                    {
                        thumbnailImages ?
                            <div
                                className='thumbnail-containers-container center'
                            >
                                <div
                                    className='thumbnail-image-container'
                                    onClick={onThumbnailClick}
                                >
                                    {thumbnailImages[1]}
                                </div>
                            </div>
                            : undefined
                    }
                    {
                        thumbnailImages ?
                            <div
                                className='thumbnail-containers-container right'
                            >
                                {thumbnailImages[2].map((image, index) => (
                                    <div
                                        key={index}
                                        className='thumbnail-image-container'
                                        onClick={onThumbnailClick}
                                    >
                                        {image}
                                    </div>
                                ))}
                            </div>
                            : undefined
                    }
                </div>
                <button
                    className='arrow left'
                    onClick={onLeftButton}
                >
                    <p>{"<"}</p>
                </button>
                <button
                    className='arrow right'
                    onClick={onRightButton}
                >
                    <p>{">"}</p>
                </button>
            </div>
        </div>
    );
}

type GalleryPopupProps = {
    
    images: ReactElement[],
    popUpIndex: number,
    closePopup: ActionDispatch<[]>
}