import { testSamples } from './mysterious-organism';
// WORKS !! Obj of Objs for readability/portability (as long as mem can handle)
// console.log(testSamples);
const { sample1 } = testSamples;
console.log(sample1);
console.log(sample1.complementStrand);

const { sample30 } = testSamples;

// compareTwoDNA(sample1.dna, sample30.dna);
sample1.compareDNAWith(sample30);
console.log(sample1.specimenNum);

console.log(sample1.complementStrand);
sample1.mutate();
console.log(sample1.complementStrand);

// CLASS ??
// const thing1 = new testSamplesClass();
// const thing2 = new testSamplesClass();

// OLD Arr of Objs
// console.log(testSamples[0]);
// const zero = testSamples[0];
// console.log('zero', zero);
// const zero = testSamples[0].dna;
// const one = testSamples[1].dna;
// console.log('1 ', zero, '2 ', one);
// console.log('1 ', zero, '2 ', testSamples[0].complementStrand);
// console.log('3', testSamples[0].mutate());
// console.log('1 ', zero, '2 ', testSamples[0].complementStrand);
