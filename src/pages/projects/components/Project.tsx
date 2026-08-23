import type { ReactElement } from "react";
import { useParams } from "react-router";
import { PROJECT_MAP } from "../constants/ProjectMap";
import ProjectNotFound from "./ProjectNotFound";

// TODO document
// TODO fix missing unique key error
// TODO add information about project
// TODO add more CSS for the page

export default function Project(): ReactElement {

    /** Project name */
    const { projectName } = useParams();
    /** Project JSON */
    const projectJson = PROJECT_MAP.get(projectName!);

    if (!projectJson) {

        return(<ProjectNotFound/>);
    }

    return(
        <div>
            <h1>
                {projectJson.name}
            </h1>
        </div>
    );
}