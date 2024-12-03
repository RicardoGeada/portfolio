/**
 * Project
 * @prop {string} name - The project name.
 * @prop {string} languages - The programming languages and tools used.
 * @prop {string} description - A short description of the project.
 * @prop {string} link - A link to the project for testing.
 * @prop {string} github - A link to the github repository.
 * @prop {string} image - An image to show a preview of the project.
 */
export interface Project {
    name : string;
    languages : string;
    description: string;
    link: string;
    github: {
        frontend: string,
        backend?: string,
    };
    image?: string;
}