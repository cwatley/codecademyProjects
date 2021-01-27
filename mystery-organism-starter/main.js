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

function pAequorFactory(id, dnaString){
  this.specimenNum = id;
  this.dna = dnaString;
  this.mutate = function() {
    let preMutateBaseIndex = Math.floor(Math.random()*15);
    let preMutateBase = this.dna[preMutateBaseIndex];
    /*console.log('Current DNA string: ', this.dna);
    console.log('PreMutateBaseIndex: ', preMutateBaseIndex);
    console.log('PreMutateBase: ', preMutateBase);*/
    let postMutateBase;
    do {
      postMutateBase = returnRandBase();
      //console.log('PostMutateBase: ', postMutateBase);
    } while (preMutateBase === postMutateBase);
    //console.log(this.dna[preMutateBaseIndex]);
    this.dna[preMutateBaseIndex] = postMutateBase;
    //console.log(this.dna[preMutateBaseIndex]);
    //console.log(/*'Current DNA string: ', this.dna*/'test');
    return this.dna;
  };
  this.compareDNA = function(pAequor) {
    let j = 0;
    for (let i = 0; i < 15; ++i){
      if(this.dna[i] === pAequor.dna[i]){
        ++j;
      };
    };
    console.log('Specimen #', this.specimenNum, 'and Specimen #', pAequor.specimenNum, 'have', (j/15).toPrecision(3),'% DNA in common.');
  };
  this.willLikelySurvive = function(){
    let j = 0
    for(let i = 0; i < 15; ++i){
      if(this.dna[i] === 'C' || this.dna[i] === 'G'){
        ++j;
      };
    };
    if((j/15) >= .6){
      return true;
    } else {
      return false;
    };
  };
};

/*let testAnimalOne = new pAequorFactory(45, mockUpStrand());
let testAnimalTwo = new pAequorFactory(52, mockUpStrand());

testAnimalOne.compareDNA(testAnimalTwo);

console.log(testAnimalOne.mutate());

console.log('DNA String: ', testAnimalOne.dna, testAnimalOne.willLikelySurvive());
/*
let testAnimalThree = new pAequorFactory(12, mockUpStrand());
console.log(testAnimalThree.specimenNum);
*/
let testAnimalArray = [];
let testAnimal = [];
let i = 0;
do {
  testAnimal[i] = new pAequorFactory(i, mockUpStrand());
  if (testAnimal[i].willLikelySurvive()){
    testAnimalArray.push(testAnimal[i]);
  };
  ++i;
} while (testAnimalArray.length < 30);


//console.log(testAnimalArray[3].specimenNum);

for (let i = 0; i < 30; ++i){
  console.log(testAnimalArray[i].specimenNum, testAnimalArray[i].dna);
}


