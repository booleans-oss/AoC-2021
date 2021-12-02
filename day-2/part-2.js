const fs = require('fs/promises');

const parseInput = async () => {
  const data = await fs.readFile('./input', { encoding: 'utf-8' });
  return data.split('\n');
}

const solve = async () => {
  const instructions = (await parseInput()).map(instruction => instruction.split(" "));
  let x = 0;
  let y = 0;
  let aim = 0;
  for(let i = 0; i < instructions.length; i++) {
    if(!instructions[i][1]) continue;
    if(instructions[i][0] === 'forward') {
      x += parseInt(instructions[i][1]);
      if(aim !== 0) y += parseInt(instructions[i][1]) * aim;
    }
    if(instructions[i][0] === 'down') aim += parseInt(instructions[i][1]);
    if(instructions[i][0] === 'up') aim -= parseInt(instructions[i][1]);
  }
  return x * y;
}

solve().then(console.log);
