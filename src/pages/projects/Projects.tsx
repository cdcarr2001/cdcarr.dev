import type { ReactElement } from "react";
import ProjectPreview from "./components/ProjectPreview";
import { PROJECT_MAP } from "./constants/ProjectMap";

/**
 * Projects page
 * @returns Projects page ReactElement
 */
export default function Projects(): ReactElement {

    /** Preview of all projects */
    const projectPreviews: ReactElement[] = makePreviews();

    return(
        <div>
            Projects page
            {projectPreviews}
        </div>
    );
}

/**
 * Make previews for all projects
 * @returns List of Project Preview react elements
 */
function makePreviews(): ReactElement[] {

    let elements: ReactElement[] = [];

    for (let [, projectJSON] of PROJECT_MAP) {

        elements.push(<ProjectPreview projectJson={projectJSON}/>);
    }

    return(elements);
}