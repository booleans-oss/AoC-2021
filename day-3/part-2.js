const fs = require('fs/promises');

const parseInput = async () => {
  const data = await fs.readFile('./input', { encoding: 'utf-8' });
  return data.split('\n');
}

const solve = async () => {
  const numbers = await parseInput();
  let oxygenrating;
  let carbonrating;
  let currentOxyArray = numbers;
  let currentCarbArray = numbers;
  for(let i = 0; i < numbers[0].length; i++) {
    if(!oxygenrating) {
      currentOxyArray = filter(currentOxyArray, i);
      if(currentOxyArray.length === 1) oxygenrating = currentOxyArray[0]
    }
    if(!carbonrating) {
      currentCarbArray = filter(currentCarbArray, i, 1);
      if(currentCarbArray.length === 1) carbonrating = currentCarbArray[0]
    }

    console.log(`${i} round: `, currentOxyArray, currentCarbArray)
  }

  return parseInt(oxygenrating, 2) * parseInt(carbonrating, 2)
}

const filter = (arr, bit, opp) => {
  const arr0 = arr.filter(letter => letter[bit] === "0");
  const arr1 = arr.filter(letter => letter[bit] === "1");

    if(arr0.length < arr1.length) {
      return opp ? arr0 : arr1;
    }
    else if(arr0.length > arr1.length){
      return opp ? arr1 : arr0;
    } else return opp ? arr0 : arr1;
}

solve().then(console.log);
