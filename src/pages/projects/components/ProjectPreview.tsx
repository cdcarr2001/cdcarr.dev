import type { ReactElement } from "react";
import type { ProjectJson } from "../types/ProjectJson";
import { NavLink } from "react-router";

// TODO document
// TODO improve visuals
// TODO add short description to preview when hovered over

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
                    <img
                        className='project-image'
                        src={props.projectJson.previewImage ? props.projectJson.previewImage : undefined}
                    />
                    <span
                        className='project-name'
                    >
                        {props.projectJson.name}
                    </span>
                    <div
                        className='project-info'
                    >
                        {
                            languages.length > 0 &&
                            <div>
                                {languages.map((language, index) => (
                                    <span key={index} className='project-info-bubble language'>{language}</span>
                                ))}
                            </div>
                        }
                        {
                            libraries.length > 0 &&
                            <div>
                                {libraries.map((library, index) => (
                                    <span key={index} className='project-info-bubble library'>{library}</span>
                                ))}
                            </div>
                        }
                        {
                            frameworks.length > 0 &&
                            <div>
                                {frameworks.map((framework, index) => (
                                    <span key={index} className='project-info-bubble framework'>{framework}</span>
                                ))}
                            </div>
                        }
                        {
                            technologies.length > 0 &&
                            <div>
                                {technologies.map((technology, index) => (
                                    <span key={index} className='project-info-bubble technology'>{technology}</span>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </NavLink>
        </div>  
    );
}

type ProjectPreviewProps = {

    projectJson: ProjectJson;
}