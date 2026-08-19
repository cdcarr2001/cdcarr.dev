import type { ProjectJSON } from "../components/Project";
import { PROJECTS_DIR } from "../Projects";

/**
 * Fetch a project by name
 * @param project Name of project to fetch
 * @returns Promise of project json
 */
export default async function fetchProject(project: string): Promise<ProjectJSON> {

    return(fetch(`${PROJECTS_DIR}/${project}/${project}.json`)
        .then((response) => {
            return(response.json())
        }).then((data) => {
            return(data as ProjectJSON);
        }));
}

