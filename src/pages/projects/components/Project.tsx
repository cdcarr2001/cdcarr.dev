import type { ReactElement } from "react";
import { useParams } from "react-router";
import { PROJECT_MAP } from "../constants/ProjectMap";
import ProjectNotFound from "./ProjectNotFound";
import ImageGallery from "../../../components/image_gallery/ImageGallery";

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

    return(
        <div
            id='project'
        >
            <div
                className='project-images'
            >
                <ImageGallery
                    imagePaths={projectJson.extraImages}
                />
            </div>
            <div
                className='header'
            >
                <h1>
                    {projectJson.name}
                </h1>
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
                <h4>Description:</h4>
                {projectJson.desc}
            </div>
        </div>
    );
}
/*

            <img
                className='project-banner'
                src={projectJson.bannerImage ? projectJson.bannerImage : undefined}
            />
*/