const fs = require("fs");
const argumentFile = process.argv[2];
let temp = "";

const parseInput = fs.readFileSync(argumentFile, "utf-8").split("\n");
const GetItem = (Rucksack) => {
  const firstCompartement = Rucksack.substring(0, Rucksack.length / 2);
  const secondCompartement = Rucksack.substring(Rucksack.length / 2);

  for (const item of firstCompartement) {
    if (secondCompartement.includes(item)) return item;
  }
};

const GetValue = (item) => {
  return item == item.toUpperCase()
    ? item.charCodeAt(0) + 27 - "A".charCodeAt(0)
    : item.charCodeAt(0) + 1 - "a".charCodeAt(0);
};

const part1 = () => {
  return parseInput
    .map((x) => GetItem(x))
    .reduce((prev, curr) => prev + GetValue(curr), 0);
};

const GetItemFromGroup = (group) => {
  const [a, b, c] = group.split(",");
  for (const item of a) {
    if (b.includes(item) && c.includes(item)) {
      return item;
    }
  }
};
const GroupOfItems = [];
const GetGroups = () => {
  parseInput.forEach((ele, index) => {
    if (index % 3 === 0 && index != 0) {
      GroupOfItems.push(temp);
      temp = "";
    }
    temp += ele + ",";
    if (index === parseInput.length - 1) {
      GroupOfItems.push(temp);
    }
  });
};
const part2 = () => {
  GetGroups();
  return GroupOfItems.map((group) => GetItemFromGroup(group)).reduce(
    (prev, curr) => prev + GetValue(curr),
    0
  );
};
console.log(`part 1: ${part1(parseInput)}`);
console.log(`part 2: ${part2(parseInput)}`);
