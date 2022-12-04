const fs = require("fs");
const argumentFile = process.argv[2];
const parseInput = fs.readFileSync(argumentFile, "utf-8").split("\n");

const AssignmentPars = (pairs) => {
  const [first, second] = pairs.split(",");
  const [first_lower, first_upper] = first.split("-").map(Number);
  const [second_lower, second_upper] = second.split("-").map(Number);
  if (
    (first_lower >= second_lower && first_upper <= second_upper) ||
    (first_lower <= second_lower && first_upper >= second_upper)
  )
    return 1;
  else return 0;
};

const OverlappingPairs = (pairs) => {
  const [first, second] = pairs.split(",");
  const [first_lower, first_upper] = first.split("-").map(Number);
  const [second_lower, second_upper] = second.split("-").map(Number);
  if (first_lower > second_upper || second_lower > first_upper) return 0;
  else return 1;
};

const part1 = (parseInput) => {
  return parseInput
    .map((x) => AssignmentPars(x))
    .reduce((prev, curr) => prev + curr, 0);
};

const part2 = (parseInput) => {
  return parseInput
    .map((x) => OverlappingPairs(x))
    .reduce((prev, curr) => prev + curr, 0);
};

console.log(`Part 1: ${part1(parseInput)}`);
console.log(`Part 2: ${part2(parseInput)}`);
