import { useReducer, type MouseEvent, type ReactElement } from "react";

export default function GalleryPopup(
    props: GalleryPopupProps
): ReactElement {

    const updateIndex = (state: number, action: 'right' | 'left'): number  => {

        switch (action) {
            
            case "right":

                if (state == props.images.length - 1) {

                    return(0);
                }
                else {

                    return(++state);
                }
            case "left":

                if (state == 0) {

                    return(props.images.length - 1);
                }
                else {

                    return(--state);
                }
        }
    }

    const [ currentImageIndex, changeImage ] = useReducer(updateIndex, props.popupIndex ? props.popupIndex : 0);

    const onBackgroundClickHandler = (event: MouseEvent): void => {

        event.preventDefault();

        props.closePopup();
    }

    const onLeftButtonClickHandler = (event: MouseEvent): void => {

        event.stopPropagation();

        changeImage('left');
    }

    const onrightButtonClickHandler = (event: MouseEvent): void => {

        event.stopPropagation();
    
        changeImage('right');
    }

    const onGalleryClickHandler = (event: MouseEvent): void => {

        event.stopPropagation();
    }

    const onThumbnailClickHandler = (event: MouseEvent): void => {

        event.stopPropagation();
    }

    return(
        <div
            className='gallery-popup'
            onClick={onBackgroundClickHandler}
        >
            <button
                className='arrow left'
                onClick={onLeftButtonClickHandler}
            >
                {"<"}
            </button>
            <button
                className='arrow right'
                onClick={onrightButtonClickHandler}
            >
                {">"}
            </button>
            <div
                className='gallery-images'
                onClick={onGalleryClickHandler}
            >
                <div
                    className='popup-image-container'
                >
                    {props.popupIndex != null && props.images[currentImageIndex]}
                </div>
            </div>
            <div
                className='popup-thumbnails'
                onClick={onThumbnailClickHandler}
            >
                <span>A</span>
            </div>
        </div>
    );
}

type GalleryPopupProps = {

    images: ReactElement[],
    popupIndex: number | null,
    closePopup: () => void;
}