import type { ReactElement } from "react";
import type { ProjectJson } from "../types/ProjectJson";
import { NavLink } from "react-router";

// TODO document

export default function ProjectPreview(
    props: ProjectPreviewProps
): ReactElement {

    return(
        <NavLink
            to={`/projects/${props.projectJson.name}`}
            className='navlink'
        >
            <div
                id={`project-${props.projectJson.name}-preview`}
                key={`project-${props.projectJson.name}-preview`}
            >
                {props.projectJson.name}
            </div>
        </NavLink>
    );
}

type ProjectPreviewProps = {

    projectJson: ProjectJson;
}