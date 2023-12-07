export const testSamples = (() => {
    interface OrganismObj {
        specimenNum: number;
        dna: string[];
        _complementStrand: string[];
        mutate(): string[];
        compareDNAWith(pAequor: { dna: string[]; specimenNum: number }): void;
        readonly complementStrand: string[];
        setComplementStrand: () => void;
        willLikelySurvive(): boolean;
    }
    const dnaBases = ['A', 'T', 'C', 'G'];
    const mockUpStrand = () => {
        const newStrand: string[] = [];
        for (let i = 0; i < 15; i++) {
            newStrand.push(
                dnaBases[Math.floor(Math.random() * dnaBases.length)]
            );
        }
        return newStrand;
    };
    const pAequorFactory = (num: number, dnaArr: string[]): OrganismObj => {
        return {
            specimenNum: num,
            dna: dnaArr,
            _complementStrand: [],
            compareDNAWith(pAequor: { dna: string[]; specimenNum: number }) {
                let count = 0;
                for (let i = 0; i < this.dna.length; i++) {
                    if (this.dna[i] === pAequor.dna[i]) count++;
                }
                console.log(
                    `This specimen, #${this.specimenNum}, and specimen #${
                        pAequor.specimenNum
                    } have ${((count / this.dna.length) * 100).toFixed(
                        2
                    )}% DNA in common`
                );
                return;
            },
            get complementStrand() {
                this.setComplementStrand();
                return this._complementStrand;
            },
            setComplementStrand() {
                this._complementStrand = [];
                for (let base of this.dna) {
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
                }
                return;
            },
            mutate() {
                const baseIndex = Math.floor(Math.random() * this.dna.length);
                const selectedBase = this.dna[baseIndex];
                const newBases = dnaBases.filter(base => base !== selectedBase);
                this.dna[baseIndex] =
                    newBases[Math.floor(Math.random() * newBases.length)];
                this.setComplementStrand();
                return this.dna;
            },
            willLikelySurvive() {
                let count = 0;
                for (let base of this.dna) {
                    if (base === 'C' || base === 'G') count++;
                }
                return count / this.dna.length >= 0.6;
            },
        };
    };
    const survivingOrganisms: { [key: string]: OrganismObj } = {};
    let sampleNum = 1;
    for (let i = 0; Object.keys(survivingOrganisms).length < 30; i++) {
        let dna = mockUpStrand(),
            org = pAequorFactory(i, dna);
        if (org.willLikelySurvive())
            survivingOrganisms[`sample${sampleNum++}`] = org;
    }
    // samples named 1-30
    return survivingOrganisms;
})();
