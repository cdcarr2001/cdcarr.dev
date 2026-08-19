import { PROJECTS_DIR } from "../Projects";

/**
 * Fetch projects from public directory
 * @returns Promise of projects json list
 */
export default async function fetchProjects(): Promise<string[]> {

    return(fetch(`${PROJECTS_DIR}/projects.json`)
        .then((response) => {
            return(response.json())
        }).then((data) => {
            return(data);
        }));
}