import type { ReactElement } from "react";
import { useParams } from "react-router";
import { PROJECT_MAP } from "../constants/ProjectMap";
import ProjectNotFound from "./ProjectNotFound";
import ImageGallery from "@components/image_gallery/ImageGallery";
import ExternalLink from "@components/external_link/ExternalLink";
import { parseDate } from "@utils/parseDate";

// TODO improve layout

/**
 * Individual Project page
 * @returns Project page ReactElement
 */
export default function Project(): ReactElement {

    /** Project name */
    const { projectName } = useParams();
    /** Project JSON */
    const projectJson = PROJECT_MAP.get(projectName!);

    if (!projectJson) {

        return(<ProjectNotFound/>);
    }

    /** Languages used in the project */
    const languages: string[] = projectJson.programmingLanguages?.concat(projectJson.otherLanguages);
    /** Libraries used in the project */
    const libraries: string[] = projectJson.libraries;
    /** Frameworks used in the project */
    const frameworks: string[] = projectJson.frameworks;
    /** Technologies used in the project */
    const technologies: string[] = projectJson.otherTechnologies;
    /** Start date of the project */
    const startDate: string = parseDate(projectJson.dateStart);
    /** End date of the project */
    const endDate: string = parseDate(projectJson.dateEnd);

    return(
        <div
            id='project'
        >
            <div
                className='header'
            >
                <h1>
                    {projectJson.name}
                </h1>
                <h1>
                    {startDate == endDate ? startDate : `${startDate} - ${endDate}`}
                </h1>
            </div>
            <div
                className='project-images'
            >
                <ImageGallery
                    imagePaths={projectJson.extraImages}
                />
            </div>
            <div
                className='project-information'
            >
                {
                    languages.length > 0 &&
                    <div>
                        {`Languages: ${languages.join(', ')}`}
                    </div>
                }
                {
                    libraries.length > 0 &&
                    <div>
                        {`Libraries: ${libraries.join(', ')}`}
                    </div>
                }
                {
                    frameworks.length > 0 &&
                    <div>
                        {`Frameworks: ${frameworks.join(', ')}`}
                    </div>
                }
                {
                    technologies.length > 0 &&
                    <div>
                        {`Technologies: ${technologies.join(', ')}`}
                    </div>
                }
                {
                    projectJson.links?.github ? 
                    <div
                        className='project-links'
                    >
                        <ExternalLink link={projectJson.links.github} site='github'/>
                    </div>
                    : undefined
                }
            </div>
            <div
                className='project-description'
            >
                <h3>Description:</h3>
                {projectJson.desc.split('\n').map((text, index) => (
                    <p
                        key={index}
                    >
                        {text}
                        <br/>
                    </p>
                ))}
            </div>
            <div
                className='project-details'
            >
                <h3>Details:</h3>
                {projectJson.details.split('\n').map((text, index) => (
                    <p
                        key={index}
                    >
                        {text}
                        <br/>
                    </p>
                ))}
            </div>
            <div
                className='project-knowledge'
            >
                <h3>Knowledge and Experience</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Before</th>
                            <th>After</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projectJson.knowledge.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.item}</td>
                                    <td>{item.before}</td>
                                    <td>{item.after}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}