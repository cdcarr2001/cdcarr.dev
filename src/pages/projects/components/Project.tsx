import type { ReactElement } from "react";
import { useParams } from "react-router";
import { PROJECT_MAP } from "../constants/ProjectMap";
import ProjectNotFound from "./ProjectNotFound";
import ImageGallery from "@components/image_gallery/ImageGallery";

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

function parseDate(dateString: string): string {

    let split = dateString.split("-");

    let date = new Date();

    if (split[0]) {

        date.setFullYear(Number.parseInt(split[0]));
    }
    if (split[1]) {

        date.setMonth(Number.parseInt(split[1]) - 1);
    }
    if (split[2]) {

        date.setDate(Number.parseInt(split[2]));
    }

    // If the date failed to be processed (indicated by being NaN)
    if (!date.getDate()) {

        // Return date string as is
        return(dateString);
    }

    return(date.toLocaleString('default', { month: 'long', year: "numeric" }));
}