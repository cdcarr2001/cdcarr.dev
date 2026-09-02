/**
 * The format of a project JSON file
 */
export type ProjectJson = {
    name: string,
    shortDesc: string,
    desc: string,
    details: string,
    goingIn: string[],
    comingOut: string[],
    programmingLanguages: string[],
    otherLanguages: string[],
    libraries: string[],
    frameworks: string[],
    otherTechnologies: string[],
    dateStart: string,
    dateEnd: string,
    previewImage: string,
    extraImages: string[];
}