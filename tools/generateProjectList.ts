import fs from 'fs';

/**
 * Read directories from public/projects, filter out the example and projects.json, and write to
 * public json
 */
function generateProjectList(): void {

    // Get items in projects directory
    let items = fs.readdirSync(`./public/projects`);

    // Filter out example project and projects json
    items = items.filter(item => !['ex_project', 'projects.json'].includes(item));

    // Write to a json
    fs.writeFileSync(
        './public/projects/projects.json',
        JSON.stringify(items)
    );

    // Log run to console
    console.log('Generated project list');
}

generateProjectList();