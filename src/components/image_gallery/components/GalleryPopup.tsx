import { useReducer, type ActionDispatch, type MouseEvent, type ReactElement } from "react";

// TODO document
// TODO add image thumbnails to popup tray

export default function GalleryPopup(
    props: GalleryPopupProps
): ReactElement {

    const [ imageIndex, changeIndex ] = useReducer(
        (prev: number, direction: 'right' | 'left') => {

            switch (direction) {

                case "right": {

                    if (prev == props.children.length - 1) {

                        return(0);
                    }
                    else {

                        return(prev + 1);
                    }
                }
                case "left": {

                    if (prev == 0) {

                        return(props.children.length - 1);
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
                    {props.children[imageIndex]}
                </div>
                <div
                    className='thumbnails'
                >
                    <span>Thumbnails here!</span>
                </div>
                <button
                    className='arrow left'
                    onClick={onLeftButton}
                >
                    <span>{"<"}</span>
                </button>
                <button
                    className='arrow right'
                    onClick={onRightButton}
                >
                    <span>{">"}</span>
                </button>
            </div>
        </div>
    );
}

type GalleryPopupProps = {
    
    children: ReactElement[],
    popUpIndex: number,
    closePopup: ActionDispatch<[]>
}