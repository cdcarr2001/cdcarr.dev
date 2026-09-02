import type { ReactElement } from "react";
import Filters from "./components/Filters";
import ProjectPreview from "./components/ProjectPreview";
import { PROJECT_MAP } from "./constants/ProjectMap";

import './Projects.css';

// TODO make look cleaner
// TODO add sorting feature

/**
 * Projects page
 * @returns Projects page ReactElement
 */
export default function Projects(): ReactElement {

    /** Preview of all projects */
    const projectPreviews: ReactElement[] = makePreviews();

    return(
        <div
            id='projects'
        >
            <div
                className="header"
            >
                <h1>Projects</h1>
                <Filters/>
            </div>
            <div
                id='project-containers'
            >
                {projectPreviews.map((element, index) => (
                    <ul key={index}>
                        {element}
                    </ul>
                ))}
            </div>
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