export default class PAequor {
    // reflects number of completed iterations w/in survivingOrganismsFill() until this organism was created -- zero-based
    specimenNum: number;
    #dnaBases = ['A', 'T', 'C', 'G'];
    #dna = this.#mockUpStrand();
    #complementStrand: string[] = [];
    constructor(i: number) {
        this.specimenNum = i;
        this.setComplementStrand(this.#dna);
    }
    get dna() {
        return this.#dna;
    }
    get complementStrand() {
        return this.#complementStrand;
    }
    compareDNAWith(pAequor: { dna: string[]; specimenNum: number }) {
        let count = 0;
        for (let i = 0; i < this.#dna.length; i++)
            this.#dna[i] === pAequor.dna[i] && count++;

        return `This specimen, #${this.specimenNum}, and specimen #${
            pAequor.specimenNum
        } have ${((count / this.#dna.length) * 100).toFixed(2)}% DNA in common`;
    }
    setComplementStrand(dna: string[]) {
        this.#complementStrand = [];
        for (let base of dna) {
            switch (base) {
                case 'A':
                    this.#complementStrand.push('T');
                    break;
                case 'T':
                    this.#complementStrand.push('A');
                    break;
                case 'C':
                    this.#complementStrand.push('G');
                    break;
                case 'G':
                    this.#complementStrand.push('C');
                    break;
                default:
                    'bug in the code';
            }
        }
        return;
    }
    #mockUpStrand(): string[] {
        const newStrand: string[] = [];
        for (let i = 0; i < 15; i++) {
            newStrand.push(
                this.#dnaBases[PAequor.ranNum(this.#dnaBases.length)]
            );
        }
        return newStrand;
    }
    // mutate single dna pair
    mutate() {
        const baseIndex = PAequor.ranNum(this.#dna.length);
        const selectedBase = this.#dna[baseIndex];
        const newBases = this.#dnaBases.filter(base => base !== selectedBase);
        this.#dna[baseIndex] = newBases[PAequor.ranNum(newBases.length)];
        if (!this.willLikelySurvive())
            console.log(
                'The mutation of a DNA base-pair has caused this organism to die.'
            );
        this.setComplementStrand(this.#dna);
        return this.#dna;
    }
    static ranNum(multiplier: number) {
        return Math.floor(Math.random() * multiplier);
    }
    willLikelySurvive() {
        let count = 0;
        for (let base of this.#dna) {
            if (base === 'C' || base === 'G') count++;
        }
        return count / this.#dna.length >= 0.6;
    }
}
