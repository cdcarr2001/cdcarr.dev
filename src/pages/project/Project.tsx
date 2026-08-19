import type { ReactElement } from "react";
import { useParams } from "react-router";
import NotFound from "@pages/not_found/NotFound";

import './Project.css'

export default function Project(): ReactElement {

    /** Project name from URL path */
    const { projectName } = useParams();
    /** Project JSON */

    

    
    return(
        <div
            id={`project-${projectName}`}
            className="project"
        >
            "Project info here!"
        </div>
    );
}