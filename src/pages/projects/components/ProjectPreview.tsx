import type { ReactElement } from "react";
import type { ProjectJson } from "../types/ProjectJson";
import { NavLink } from "react-router";

// TODO document
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
                    className='project-preview-container'
                >
                    {<div
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
                                    {languages.map(
                                        language => <span className='project-info-bubble language'>{language}</span>
                                    )}
                                </div>
                            }
                            {
                                libraries.length > 0 &&
                                <div>
                                    {libraries.map(
                                        library => <span className='project-info-bubble library'>{library}</span>
                                    )}
                                </div>
                            }
                            {
                                frameworks.length > 0 &&
                                <div>
                                    {frameworks.map(
                                        framework => <span className='project-info-bubble framework'>{framework}</span>
                                    )}
                                </div>
                            }
                            {
                                technologies.length > 0 &&
                                <div>
                                    {technologies.map(
                                        technology => <span className='project-info-bubble technology'>{technology}</span>
                                    )}
                                </div>
                            }
                        </div>
                    </div>}
                </div>
            </NavLink>
        </div>  
    );
}

type ProjectPreviewProps = {

    projectJson: ProjectJson;
}