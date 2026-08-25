import type { ReactElement } from "react";
import type { ProjectJson } from "../types/ProjectJson";
import { NavLink } from "react-router";

// TODO document
// TODO respect line character limit
// TODO improve visuals
// TODO add sorting feature

export default function ProjectPreview(
    props: ProjectPreviewProps
): ReactElement {

    /** Languages used in the project */
    const languages: string[] = props.projectJson.programmingLanguages?.concat(props.projectJson.otherLanguages);
    /** Libraries used in the project */
    const libraries: string[] = props.projectJson.libraries;
    /** Frameworks used in the project */
    const frameworks: string[] = props.projectJson.frameworks;
    /** Technologies used in the project */
    const technologies: string[] = props.projectJson.otherTechnologies;

    return(
        <div
            id={`project-${props.projectJson.name}-preview`}
            key={`project-${props.projectJson.name}-preview`}
            className='project-preview-container'
            data-languages={languages}
            data-libraries={libraries}
            data-frameworks={frameworks}
            data-technologies={technologies}
        >
            <NavLink
                to={`/projects/${props.projectJson.name}`}
                className='navlink'
            >
                <div
                    className='project-preview'
                >
                    <div
                        className='project-image'
                    >
                    </div>
                    <div
                        className='project-name'
                    >
                        {props.projectJson.name}
                    </div>
                    <div
                        className='project-info'
                    >
                        {languages.map(
                            language => <span className='project-info-bubble'>{language}</span>
                        )}
                    </div>
                </div>
            </NavLink>
        </div>  
    );
}

type ProjectPreviewProps = {

    projectJson: ProjectJson;
}