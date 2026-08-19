import { use, type ReactElement } from "react";
import '@layouts/layouts.css'
import ProjectPreview from "./components/ProjectPreview";
import fetchProject from "./utilities/fetchProject";
import fetchProjects from "./utilities/fetchProjects";

export const PROJECTS_DIR = '/projects';
    
const PROJECT_PREVIEWS = makePreviews();

// TODO add a loading indicator and remove waiting for fetch to occur
// TODO document

export default function Projects(): ReactElement {

    // Wait for fetch to occur before rendering
    const projects: ReactElement[] = use(PROJECT_PREVIEWS);

    return(
        <div>
            Projects page
            {projects}
        </div>
    );
}

async function makePreviews() {

    let elements: ReactElement[] = [];

    for (let project of await fetchProjects()) {
        
        let json = await fetchProject(project);

        elements.push(<ProjectPreview projectJson={json}/>);
    }

    return(elements)
}