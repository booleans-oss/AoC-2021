const fs = require('fs/promises');

const parseInput = async () => {
  const data = await fs.readFile('./input', { encoding: 'utf-8' });
  return data.split('\n');
}

const solve = async () => {
  const numbers = await parseInput();
  let gammarate = "";
  let epsilonrate = "";
  for(let i = 0; i < numbers[0].length; i++) {
    const filter0 = letters.filter(l => l[i] === "0");
    const filter1 = letters.filter(l => l[i] === "1");
    if(filter0.length > filter1.length) {
      gammarate += "0";
      epsilonrate += "1"
    } else {
      gammarate += "1";
      epsilonrate += "0";
    }
  }
  return parseInt(gammarate, 2) * parseInt(epsilonrate, 2);
}

solve().then(console.log);
