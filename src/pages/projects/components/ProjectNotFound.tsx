import type { ReactElement } from "react";
import { NavLink, useParams } from "react-router";

/**
 * Project not found indicator
 * @returns ReactElement for when a project is not found
 */
export default function ProjectNotFound(): ReactElement {

    /** Project name */
    const { projectName } = useParams();

    return(
        <div
            id='project-not-found'
        >
            <h1>
                Could not find project: {projectName}
            </h1>
            <h2>
                Click <NavLink to='/projects'>here</NavLink> to return to the projects page.
            </h2>
        </div>
    );
}