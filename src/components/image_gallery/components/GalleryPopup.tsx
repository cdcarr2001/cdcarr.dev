import { useReducer, type ActionDispatch, type MouseEvent, type ReactElement } from "react";

// TODO document
// TODO add image thumbnails to popup tray
// TODO add exit button maybe?

export default function GalleryPopup(
    props: GalleryPopupProps
): ReactElement {

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
                    <p>Thumbnails here!</p>
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