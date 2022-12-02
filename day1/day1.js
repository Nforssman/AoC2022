const fs = require("fs");
let answer1;
let answer2;
const argumentFile = process.argv[2];

const parseInput = fs.readFileSync(argumentFile, "utf-8").split("\n");

let arr = [];
let temp = [];
let inputSize = parseInput.length - 1;

for (var i = 0; i <= inputSize; i++) {
  let val = Math.floor(parseInput[i]);
  if (val != 0) {
    temp.push(val);
  }
  if (val === 0 || i == inputSize) {
    arr.push(temp);
    temp = [];
  }
}

const part1 = (parseInput) => {
  let input = parseInput;
  let max = 0;

  arr.forEach((element) => {
    let sum = 0;
    element.forEach((val) => {
      sum += val;
    });
    if (sum > max) max = sum;
  });

  return max;
};

const part2 = (parseInput) => {
  let calories = [0, 0, 0];
  arr.forEach((element) => {
    let sum = 0;
    element.forEach((val) => {
      sum += val;
    });

    if (sum > calories[0]) {
      calories[2] = calories[1];
      calories[1] = calories[0];
      calories[0] = sum;
    } else if (sum > calories[1]) {
      calories[2] = calories[1];
      calories[1] = sum;
    } else if (sum > calories[2]) {
      calories[2] = sum;
    }
  });

  return calories[2] + calories[1] + calories[0];
};

console.log(`Answer to part 1: ${part1(parseInput)}`);
console.log(`Answer to part 2: ${part2(parseInput)}`);
