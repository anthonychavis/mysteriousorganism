import { survivingOrganisms } from './mysterious-organism';

const { sample1 } = survivingOrganisms;
const { sample30 } = survivingOrganisms;

console.log('sample obj', sample1);
console.log('sample complement strand', sample1.complementStrand);
console.log(sample1.compareDNAWith(sample30));
console.log('sample dna pre-mutation', sample1.dna);
sample1.mutate();
console.log(
    'sample complement strand after mutation',
    sample1.complementStrand
);
console.log('sample dna post-mutation', sample1.dna);
