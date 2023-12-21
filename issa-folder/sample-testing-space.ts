// import { survivingOrganisms, jsonOrgs } from './mysterious-organism';
// import orgs30 from './server/orgs30.json';
import { readFileSync } from 'fs';
import { PAequorTesting } from '../class-organism';

// fix any !!
let orgs30;
// const filePath = './issa-folder/orgs30.json';
try {
    // const orgs30Data = readFileSync('./issa-foder/orgs30.json', 'utf8');
    const orgs30Data = readFileSync('./issa-folder/orgs30.json', 'utf8');
    orgs30 = JSON.parse(orgs30Data);
} catch (e) {
    console.error(e);
    orgs30 = {};
    throw e;
}
// } else {
// console.error('filePath invalid');
// }

// console.log(orgs30);
const printObj = (obj: {}, mssg?: string) =>
    mssg
        ? console.log(mssg, JSON.stringify(obj, null, 4))
        : console.log(JSON.stringify(obj, null, 4));
// printObj(orgs30);

// const { sample19 } = survivingOrganisms;
let { sample19 } = orgs30;
// sample19 = new PAequorTesting(sample19._dna, sample19.specimenNum, sample19.dnaLength);
sample19 = new PAequorTesting(sample19);
// const { sample30 } = survivingOrganisms;
let { sample30 } = orgs30;
sample30 = new PAequorTesting(sample30);

// console.log('sample obj', sample19);
printObj(sample19, 'sample19 obj: ');

console.log('sample complement strand', sample19.complementStrand);
console.log('sample dna strand', sample19.dna);
console.log('sample dna strand', sample30.dna);

// const persistingOrgs = JSON.parse(jsonOrgs);
// const { sample20 } = persistingOrgs;
// console.log('new sample19 ', sample20);
// console.log('persistingOrgs ', persistingOrgs.);
// console.log('json ',

console.log(sample19.compareDNAWith(sample30));

// console.log('sample dna pre-mutation', sample19.dna);
// let cool = 0;
// for (let base in sample19.dna) {
//     if (sample19.dna[base] === sample30.dna[base]) cool++;
// }
// sample19.mutate();
// console.log(
// 'sample complement strand after mutation',
// sample19.complementStrand
// );
// console.log('sample dna post-mutation', sample19.dna);

// console.log(cool / 15);
