// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(no, dnaArray) {
    this.specimenNum = no;
    this.dna = dnaArray;
    this.mutate = function() {
        let changeId = Math.floor(Math.random() * 15);
        let strand = dnaArray[changeId];
        //console.log(strand);
        let ok = false;
        let newStrand;
        while (!ok) {
            newStrand = returnRandBase();
            if (newStrand != strand) { ok = true; }
        }

        dnaArray[changeId] = newStrand;
        return dnaArray;
    };
    this.compareDNA = function(otherPa) {
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === otherPa.dna[i]) { count++; }
        }
        let percent = (count / this.dna.length) * 100;
        console.log(`Specimin ${this.specimenNum} and specimin ${otherPa.specimenNum} have ${percent}% DNA in common`);
    };
    this.willLikelySurvive = function () {
        let count = 0;
        let rtn = false;
        for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === 'C') { count++; }
            if (this.dna[i] === 'G') { count++; }
        }
        console.log(this.dna);
        if ((count / this.dna.length) >= .6) { rtn = true; }
        return rtn;
    }
}

/*
 // Testing logs
let pA = new pAequorFactory(1, mockUpStrand());
let pA2 = new pAequorFactory(2, mockUpStrand());
console.log(pA);
//let pAm = new pA.mutate;
let pAm = pA.mutate();
console.log(pAm);
pA2.compareDNA(pA);

console.log(pA.willLikelySurvive());
*/

let count = 0;
let specimin = 0;
let survive = [];

while (count < 30) {
    specimin++;
    pA = new pAequorFactory(specimin, mockUpStrand());
    if (pA.willLikelySurvive()) {
        survive.push(pA);
        count++;
    }
    
}
console.log(survive);
