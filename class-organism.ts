export default class PAequor {
    _complementStrand: string[] = [];
    #dnaBases = ['A', 'T', 'C', 'G'];
    _dna = this.#mockUpStrand();
    dnaLength = this._dna.length;
    // reflects number of completed iterations w/in survivingOrganismsFill() until this organism was created -- zero-based
    specimenNum: number;
    constructor(i: number) {
        this.specimenNum = i;
        this.#setComplementStrand(this._dna);
    }
    compareDNAWith(pAequor: { dna: string[]; specimenNum: number }) {
        let count = 0;
        for (let i = 0; i < this.dnaLength; i++)
            this._dna[i] === pAequor.dna[i] && count++;
        return `This specimen, #${this.specimenNum}, and specimen #${
            pAequor.specimenNum
        } have ${((count / this.dnaLength) * 100).toFixed(2)}% DNA in common`;
    }
    get complementStrand() {
        return this._complementStrand;
    }
    get dna() {
        return this._dna;
    }
    #mockUpStrand(): string[] {
        const newStrand: string[] = [];
        for (let i = 0; i < 15; i++)
            newStrand.push(this.#dnaBases[this.#ranNum(this.#dnaBases.length)]);
        return newStrand;
    }
    // mutate single dna pair
    mutate() {
        const baseIndex = this.#ranNum(this.dnaLength);
        const selectedBase = this._dna[baseIndex];
        const newBases = this.#dnaBases.filter(base => base !== selectedBase);
        this._dna[baseIndex] = newBases[this.#ranNum(newBases.length)];
        if (!this.willLikelySurvive())
            console.log(
                'The mutation of a DNA base-pair has caused this organism to die.'
            );
        this.#setComplementStrand(this._dna);
        return this._dna;
    }
    #ranNum(multiplier: number) {
        return Math.floor(Math.random() * multiplier);
    }
    #setComplementStrand(dna: string[]) {
        this._complementStrand = [];
        for (let base of dna)
            switch (base) {
                case 'A':
                    this._complementStrand.push('T');
                    break;
                case 'T':
                    this._complementStrand.push('A');
                    break;
                case 'C':
                    this._complementStrand.push('G');
                    break;
                case 'G':
                    this._complementStrand.push('C');
                    break;
                default:
                    'bug in the code';
            }
        return;
    }
    willLikelySurvive() {
        let count = 0;
        for (let base of this._dna) if (base === 'C' || base === 'G') count++;
        return count / this.dnaLength >= 0.6;
    }
}
