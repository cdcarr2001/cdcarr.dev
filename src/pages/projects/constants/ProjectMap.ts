import type { ProjectJson } from "../types/ProjectJson";
    
/** Map of all projects */
export const PROJECT_MAP: Map<string, ProjectJson> = await fetchProjects();

/**
 * Fetch all projects and add them to a map
 * @returns Map of all projects
 */
async function fetchProjects(): Promise<Map<string, ProjectJson>> {

    let projectMap = new Map<string, ProjectJson>();

    /** Array of projects */
    let projectsArray: string[] | null = await fetch(`/projects/projects.json`)
        .then((response) => {
            if (response.ok) {

                return(response.json());
            }
            else {

                return(null);
            }
        });

    if (projectsArray) {

        for (let project of projectsArray) {

            let projectJson: ProjectJson | null;
            
            projectJson = await fetch(`/projects/${project}/${project}.json`)
                .then((response) => {
                    if (response.ok) {

                        return(response.json());
                    }
                    else {

                        return(null);
                    }
                });

            if (projectJson) {

                projectMap.set(project, projectJson);
            }
            else {

                console.error(`Could not locate project ${project}`);
            }
        }
    }

    return(projectMap);
}