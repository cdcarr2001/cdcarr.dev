import { createContext, useState, type MouseEvent, type ReactElement } from "react";
import Image, { type ClickedImageEvent } from "./components/Image";
import GalleryPopup from "./components/GalleryPopup";

import './ImageGallery.css';

// TODO document
// TODO probably redo all the CSS to try and avoid using position absolute

export const ClickedImageContext = createContext<string | null>(null);

export default function ImageGallery(
    props: ImageGalleryProps
): ReactElement {

    const [ imageThumbnails ] = useState<ReactElement[]>(generateImageElementsArray(props.imagePaths));
    const [ isPoppedUp, setIsPoppedUp ] = useState<boolean>(false);
    const [ popupIndex, setPopupIndex ] = useState<number | null>(null);

    const openPopupAtIndex = (index: number): void => {

        // If index is not in range of images return immediately
        if (index < 0 || index >= props.imagePaths.length) {

            return;
        }

        setPopupIndex(index);
    }

    const onClickHandler = (event: MouseEvent) => {

        let imageEvent = event as ClickedImageEvent;

        if (imageEvent.imageIndex != undefined) {

            openPopupAtIndex(imageEvent.imageIndex);
            setIsPoppedUp(true);
        }
    }

    return(
        <>
            <div
                className='image-gallery'
                style={{
                    width: props.width,
                    height: props.height,
                    borderWidth: props.borderWidth,
                    borderColor: props.borderColor,
                    backgroundColor: props.backgroundColor
                }}
                onClick={onClickHandler}
            >
                <div
                    className='gallery-images'
                >
                    {imageThumbnails}
                </div>
                {
                    isPoppedUp &&
                    <GalleryPopup
                        images={imageThumbnails}
                        popupIndex={popupIndex}
                        closePopup={() => {setIsPoppedUp(false)}}
                    />
                }
            </div>
            
        </>
    );
}

type ImageGalleryProps = {

    imagePaths: string[],
    width?: string | number,
    height?: string | number,
    borderWidth?: string | number,
    borderColor?: string,
    backgroundColor?: string
}

function generateImageElementsArray(imagePaths: string[]): ReactElement[] {

    let imageArray: ReactElement[] = [];

    for (let index = 0; index < imagePaths.length; index++) {

        imageArray.push(
            <Image
                imagePath={imagePaths[index]}
                index={index}
            />
        );
    }

    return(imageArray);
}