const fs = require("fs");
const argumentFile = process.argv[2];

const DetermineRoundPart1 = (round) => {
  const [elf, me] = round.map((x) => x.split(",")).map(String);
  if (elf === "A" && me === "X") return 1 + 3;
  if (elf === "A" && me === "Y") return 2 + 6;
  if (elf === "A" && me === "Z") return 3;
  if (elf === "B" && me === "X") return 1;
  if (elf === "B" && me === "Y") return 2 + 3;
  if (elf === "B" && me === "Z") return 3 + 6;
  if (elf === "C" && me === "X") return 1 + 6;
  if (elf === "C" && me === "Y") return 2;
  if (elf === "C" && me === "Z") return 3 + 3;
};

const DetermineRoundPart2 = (round) => {
  const [elf, me] = round.map((x) => x.split(",")).map(String);
  if (elf === "A" && me === "X") return 3;
  if (elf === "A" && me === "Y") return 1 + 3;
  if (elf === "A" && me === "Z") return 2 + 6;
  if (elf === "B" && me === "X") return 1;
  if (elf === "B" && me === "Y") return 2 + 3;
  if (elf === "B" && me === "Z") return 3 + 6;
  if (elf === "C" && me === "X") return 2;
  if (elf === "C" && me === "Y") return 3 + 3;
  if (elf === "C" && me === "Z") return 1 + 6;
};

const parseInput = fs
  .readFileSync(argumentFile, "utf-8")
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

const part1 = () => {
  return parseInput
    .map((round) => DetermineRoundPart1(round))
    .reduce((prev, curr) => prev + curr, 0);
};

const part2 = () => {
  return parseInput
    .map((round) => DetermineRoundPart2(round))
    .reduce((prev, curr) => prev + curr, 0);
};
console.log(`Del 1: ${part1(parseInput)}`);
console.log(`Del 2: ${part2(parseInput)}`);
