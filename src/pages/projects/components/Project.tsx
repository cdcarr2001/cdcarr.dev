import type { ReactElement } from "react";
import { useParams } from "react-router";
import { PROJECT_MAP } from "../constants/ProjectMap";
import ProjectNotFound from "./ProjectNotFound";

// TODO document

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