import { useEffect, useRef, useState, type ReactElement } from "react";
import Select, { type ActionMeta, type MultiValue } from "react-select";

// TODO document
// TODO add name search
// TODO add dynamic options based on currently visible projects

export default function Filters(): ReactElement {

    /** Project previews container reference */
    const projectPreviews = useRef<HTMLElement>(null);
    /** Language filtering options */
    const [ groupOptions, setGroupOptions ] = useState<GroupOptions[]>([]);

    const formatGroupLabel = (group: GroupOptions) => {

        return(
            <div
                className='group-label'
            >
                <span>{group.label}</span>
                <span>{group.options.length}</span>
            </div>
        )
    }

    const filterPrograms = (options: MultiValue<Option>, action: ActionMeta<Option>) => {

        // TODO add filter
    }

    useEffect(() => {

        // Set project containers
        projectPreviews.current = document.getElementById('project-containers');

        // If project containers has not been set
        if (!projectPreviews.current) {

            // Log the error and return, as the page is functional even without a search
            console.error("Could not find project containers!");
            return;
        }

        /** All projects with a project preview */
        let projects = projectPreviews.current.getElementsByClassName('project-preview-container');

        /** All languages seen */
        let languages: string[] = [];
        /** All libraries seen */
        let libraries: string[] = [];
        /** All frameworks seen */
        let frameworks: string[] = [];
        /** All technologies seen */
        let technologies: string[] = [];

        // Gather all relevant information from project previews for filtering
        for (let project of Array.from(projects) as HTMLElement[]) {

            /** Project languages */
            let pLanguages = project.dataset.languages?.split(',');
            /** Project libraries */
            let pLibraries = project.dataset.libraries?.split(',');
            /** Project frameworks */
            let pFrameworks = project.dataset.frameworks?.split(',');
            /** Project technologies */
            let pTechnologies = project.dataset.technologies?.split(',');

            // Add all new languages to the filter list
            for (let language of pLanguages ? pLanguages : []) {

                if (language && !languages.includes(language)) {

                    languages.push(language);
                }
            }
            // Add all new libraries to the filter list
            for (let library of pLibraries ? pLibraries : []) {

                if (library && !libraries.includes(library)) {

                    libraries.push(library);
                }
            }
            // Add all new frameworks to the filter list
            for (let framework of pFrameworks ? pFrameworks : []) {

                if (framework && !frameworks.includes(framework)) {

                    frameworks.push(framework);
                }
            }
            // Add all new technologies to the filter list
            for (let technology of pTechnologies ? pTechnologies : []) {

                if (technologies && !technologies.includes(technology)) {

                    technologies.push(technology);
                }
            }
        }

        // Sort all arrays alphabetically
        languages = [...languages].sort((a, b) => {return(a.localeCompare(b))});
        libraries = [...libraries].sort((a, b) => {return(a.localeCompare(b))});
        frameworks = [...frameworks].sort((a, b) => {return(a.localeCompare(b))});
        technologies = [...technologies].sort((a, b) => {return(a.localeCompare(b))});

        /** Language options */
        let languageOptions: Option[] = [];
        /** Library options */
        let libraryOptions: Option[] = [];
        /** Framework options */
        let frameworkOptions: Option[] = [];
        /** Technology options */
        let technologyOptions: Option[] = [];

        // Turn language strings into options
        for (let language of languages) {

            languageOptions.push({label: language, value: language, type: "language"});
        }
        // Turn library strings into options
        for (let library of libraries) {

            libraryOptions.push({label: library, value: library, type: "library"});
        }
        // Turn framework strings into options
        for (let framework of frameworks) {

            frameworkOptions.push({label: framework, value: framework, type: "framework"});
        }
        // Turn technology strings into options
        for (let technology of technologies) {

            technologyOptions.push({label: technology, value: technology, type: "technology"});
        }

        setGroupOptions([

            {label: "Languages", options: languageOptions},
            {label: "Libraries", options: libraryOptions},
            {label: "Frameworks", options: frameworkOptions},
            {label: "Technologies", options: technologyOptions}
        ]);
    }, []);

    return(
        <Select<any, true, GroupOptions>
            id='project-filters'
            isMulti={true}
            options={groupOptions}
            onChange={filterPrograms}
            formatGroupLabel={formatGroupLabel}
            placeholder='Search for projects...'
        />
    );
}

/** Option type for filter */
type Option = {

    /** Value to filter by */
    readonly value: string,
    /** Label to display */
    readonly label: string,
    /** Option type */
    readonly type: 'language' | 'library' | 'framework' | 'technology';
}

/** Grouped options type for filter */
type GroupOptions = {

    /** Label for group */
    readonly label: string,
    /** Options of the group */
    readonly options: readonly Option[];
}