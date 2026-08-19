import { use, useRef, type ReactElement } from "react";
import { useLocation, useParams } from "react-router";
import fetchProject from "../utilities/fetchProject";

// TODO document

export default function Project(): ReactElement {

    /** Project name */
    const {projectName} = useParams();
    /** Data passed from navlink */
    var projectJson: any = useLocation().state?.projectJson;

    // TODO fetch data if not passed to project (ie, when using url instead of navlink)

    //const datapromise = useRef(fetchProject(projectName!));

    //projectJson = projectJson ? projectJson : use(datapromise.current);

    return(
        <div>
            <h1>
                {projectJson?.name}
            </h1>
        </div>
    );
}

export type ProjectJSON = {
    name: string,
    shortDesc: string,
    desc: string,
    details: string,
    languages: string[],
    frameworks: string[],
    dateStart: string,
    dateEnd: string,
    previewImage: string,
    extraImages: string[];
}