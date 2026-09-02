import { useReducer, type ActionDispatch, type MouseEvent, type ReactElement } from "react";

// TODO document
// TODO add image thumbnails to popup tray
// TODO add exit button maybe?

export default function GalleryPopup(
    props: GalleryPopupProps
): ReactElement {

    const [ imageIndex, changeIndex ] = useReducer(
        (prev: number, direction: 'right' | 'left') => {

            switch (direction) {

                case "right": {

                    if (prev == props.images.length - 1) {

                        return(0);
                    }
                    else {

                        return(prev + 1);
                    }
                }
                case "left": {

                    if (prev == 0) {

                        return(props.images.length - 1);
                    }
                    else {

                        return(prev - 1);
                    }
                }
            }
        },
        props.popUpIndex
    );

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

        changeIndex('left');
    }

    const onRightButton = (event: MouseEvent): void => {

        event.preventDefault();
        event.stopPropagation();

        changeIndex('right');
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