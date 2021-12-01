const fs = require('fs/promises');

const parseInput = async () => {
  const data = await fs.readFile('./input', { encoding: 'utf-8' });
  return data.split('\n');
}

const solve = async () => {
  const lines = await parseInput();
  const numbers = lines.map(Number);
  let prev;
  let count = 0;
  for(let i = 0; i < numbers.length; i++) {
    let sum = numbers[i+2] + numbers[i+1] + numbers[i];
    if(prev && prev < sum) count++;
    prev = sum;
  }
  return count;
}

solve().then(console.log)
