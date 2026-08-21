import type { ReactElement } from "react";
import { useParams } from "react-router";

// TODO document

export default function ProjectNotFound(): ReactElement {

    /** Project name */
    const { projectName } = useParams();

    return(
        <div>
            <h1>
                No project with the name {projectName} was found!
            </h1>
        </div>
    );
}