// for JSON data
export class PAequorSamples {
    #dnaBases = ['A', 'T', 'C', 'G'];
    _dna;
    dnaLength;
    // reflects number of completed iterations w/in survivingOrganismsFill() until this organism was created -- zero-based
    specimenNum;
    constructor(i: number) {
        this.specimenNum = i;
        this._dna = this.#mockUpStrand();
        this.dnaLength = this._dna.length;
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
    #ranNum(multiplier: number) {
        return Math.floor(Math.random() * multiplier);
    }
    willLikelySurvive() {
        let count = 0;
        for (let base of this._dna) if (base === 'C' || base === 'G') count++;
        return count / this.dnaLength >= 0.6;
    }
}

// for experimenting w/samples
export class PAequorTesting {
    #complementStrand: string[] = [];
    #dnaBases = ['A', 'T', 'C', 'G'];
    _dna;
    dnaLength;
    // reflects number of completed iterations w/in survivingOrganismsFill() until this organism was created -- zero-based
    specimenNum: number;
    constructor(jsonSample: {
        _dna: string[];
        dnaLength: number;
        specimenNum: number;
    }) {
        this._dna = jsonSample._dna;
        this.dnaLength = jsonSample.dnaLength;
        this.specimenNum = jsonSample.specimenNum;
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
        return this.#complementStrand;
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
        this.#complementStrand = [];
        for (let base of dna)
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
        return;
    }
    willLikelySurvive() {
        let count = 0;
        for (let base of this._dna) if (base === 'C' || base === 'G') count++;
        return count / this.dnaLength >= 0.6;
    }
}
