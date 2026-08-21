/**
 * The format of a project JSON file
 */
export type ProjectJson = {
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