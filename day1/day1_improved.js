const fs = require("fs");
const argumentFile = process.argv[2];

let parseInput = fs
  .readFileSync(argumentFile, "utf-8")
  .split("\n\n")
  .map((x) => x.split("\n").map(Number));

let caloriesTotal = [];
parseInput.forEach((element) => {
  let calories = element.reduce((curr, prev) => curr + prev, 0);
  caloriesTotal.push(calories);
});
caloriesTotal.sort((a, b) => b - a);

const part1 = (caloriesTotal) => {
  return caloriesTotal[0];
};

const part2 = (caloriesTotal) => {
  return caloriesTotal[2] + caloriesTotal[1] + caloriesTotal[0];
};

console.log(`Answer to part 1: ${part1(caloriesTotal)}`);
console.log(`Answer to part 2: ${part2(caloriesTotal)}`);
