import { PAequorSamples } from './class-organism';
// make object containing 30 organism objects
const survivingOrganismsFill = () => {
    const survivingOrganisms: { [key: string]: PAequorSamples } = {};
    let sampleNum = 1;
    for (let i = 0; Object.keys(survivingOrganisms).length < 30; i++) {
        let org = new PAequorSamples(i);
        if (org.willLikelySurvive())
            survivingOrganisms[`sample${sampleNum++}`] = org;
    }
    return survivingOrganisms;
};
const survivingOrganisms = survivingOrganismsFill();
export { survivingOrganisms };
