const fs = require("fs");
const argumentFile = process.argv[2];
const parseInput = fs.readFileSync(argumentFile, "utf-8");

const FindMarker = (parse, start) => {
  const packets = [];
  let index = 0;
  for (const ch of parse) {
    if (packets.length < start) packets.push(ch);
    else {
      packets.unshift(ch);
      packets.pop();
      const arr = [];
      packets.forEach((x) => {
        if (!arr.includes(x)) {
          arr.push(x);
        }
      });
      if (arr.length === start) return index + 1;
    }
    index++;
  }
};

const part1 = (parseInput) => {
  return FindMarker(parseInput, 4);
};

const part2 = (parseInput) => {
  return FindMarker(parseInput, 14);
};

console.log(`Answer to part 1: ${part1(parseInput)}`);
console.log(`Answer to part 2: ${part2(parseInput)}`);
