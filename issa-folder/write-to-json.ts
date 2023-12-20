import { error } from 'console';
import fs from 'fs';
// import { jsonOrgs } from '../mysterious-organism';
import { survivingOrganisms } from '../mysterious-organism';

// console.log(jsonOrgs);
const jsonFile = './issa-folder/orgs30.json';
// fs.writeFile(jsonFile, jsonOrgs, 'utf8', (err: NodeJS.ErrnoException | null) =>
fs.writeFile(
    jsonFile,
    JSON.stringify(survivingOrganisms),
    'utf8',
    (err: NodeJS.ErrnoException | null) =>
        err
            ? console.error('Error writing file: ', error)
            : console.log('Data written to file successfully.')
);
