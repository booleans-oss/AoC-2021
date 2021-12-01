const fs = require('fs/promises');

const parseInput = async () => {
  const data = await fs.readFile('./input', { encoding: 'utf-8' });
  return data.split('\n');
}

const solve = async () => {
  const lines = await parseInput();
  const numbers = lines.map(Number);
  return numbers.reduce((count, num, index, arr) => {
    if(arr[index-1] && num > arr[index-1]) return count+1
    else return count;
  }, 0);
}

solve().then(console.log)
