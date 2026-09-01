import type { MouseEvent, ReactElement } from "react";

export default function Image(
    props: ImageProps
): ReactElement {

    // If image path is a blank string, return a blank element
    if (props.imagePath == "") {

        return(<></>);
    }

    const onClickHandler = (event: MouseEvent): void => {

        // Do not use event.preventDefault as we want this to bubble up to the parent

        let imageEvent = event as ClickedImageEvent;

        imageEvent.imageIndex = props.index;
    }

    return(
        <div
            className='image-container'
            data-index={props.index}
            onClick={onClickHandler}
        >
            <img
                className='image-thumbnail'
                src={props.imagePath}
            />
        </div>
    );
}

type ImageProps = {

    imagePath: string,
    index: number,
    openPopupAtIndex?: (index: number) => void
}

export type ClickedImageEvent = MouseEvent & {

    imageIndex: number;
}