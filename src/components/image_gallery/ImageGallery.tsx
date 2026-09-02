import { useCallback, useReducer, useState, type ReactElement } from "react";
import Gallery from "./components/Gallery";
import GalleryPopup from "./components/GalleryPopup";
import GalleryImage from "./components/GalleryImage";

import './ImageGallery.css';

// TODO document

export default function ImageGallery(
    props: ImageGalleryProps
): ReactElement {

    const [ images ] = useState<ReactElement[]>(createImagesFromSource(props.imagePaths));
    const [ popUpIndex, setPopUpIndex ] = useState(-1);
    const [ isPoppedUp, togglePopUp ] = useReducer(
        (prev: boolean, forceState?: boolean) => {

            if (forceState !=  undefined) {

                return(forceState);
            }
            else {

                return(prev ? false : true);
            }
        }, false);

    const popUpImage = useCallback((index: number): void => {

        // Check if index is in range of the image array
        if (index < 0 || index >= images.length) {

            console.error(`Cannot pop up image at index ${index}: index out of range`);
            return;
        }

        setPopUpIndex(index);
        togglePopUp(true)
    }, []);

    const closePopup = useCallback((): void => {

        togglePopUp(false);
    }, []);

    return(
        <>
                <Gallery
                    imagePaths={props.imagePaths}
                    popUpImage={popUpImage}
                width={props.width}
                height={props.height}
                images={images}
            />
            {  
                isPoppedUp &&
                <GalleryPopup
                    closePopup={closePopup}
                    popUpIndex={popUpIndex}
                >
                    {images}
                </GalleryPopup>
            }
        </>
    );
}

type ImageGalleryProps = {

    imagePaths: string[],
    height?: number | string,
    width?: number | string,
}

function createImagesFromSource(imagePaths: string[]): ReactElement[] {

    let images: ReactElement[] = [];

    for (let index = 0; index < imagePaths.length; index++) {

        images.push(<GalleryImage src={imagePaths[index]} index={index}/>);
    }

    return(images);
}