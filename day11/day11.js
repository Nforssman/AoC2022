const fs = require("fs");
const argumentFile = process.argv[2];
const Monkeys = [];
let monkeyCount = [0, 0, 0, 0, 0, 0, 0, 0];
let prodOfAllTestValues = 1;
const StartItems = (item) => {
  let monkey = [];
  const currentMonkey = item.split("\n");
  let items = currentMonkey[1].split(":")[1];
  let operation = currentMonkey[2].split("old")[1];
  let testValue = currentMonkey[3].split("by")[1];
  let isTrue = currentMonkey[4].split("monkey")[1];
  let isFalse = currentMonkey[5].split("monkey")[1];

  monkey[0] = items.split(",").map((x) => parseInt(x));
  monkey[1] = operation.trim();
  monkey[2] = parseInt(testValue);
  monkey[3] = parseInt(isTrue);
  monkey[4] = parseInt(isFalse);
  prodOfAllTestValues *= monkey[2];
  Monkeys.push(monkey);
};
const parseInput = fs
  .readFileSync(argumentFile, "utf-8")
  .split("\n\n")
  .map((items) => StartItems(items));

const calculateNewValue = (operation, old, value) => {
  let newValue = 0;
  switch (operation) {
    case "+":
      newValue = old + parseInt(value);
      break;
    case "-":
      newValue = old - parseInt(value);
      break;
    case "/":
      newValue = old / parseInt(value);
      break;
    case "*":
      newValue = old * parseInt(value);
      break;
  }
  return newValue;
};

const rounds = (Monkeys, times) => {
  for (let i = 0; i < times; i++) {
    Monkeys.forEach((element, index) => {
      monkeyCount[index] += element[0].length;
      for (let j = 0; j <= element[0].length - 1; j++) {
        let opAndValue = element[1].split(" ");
        if (opAndValue[1] === undefined) opAndValue[1] = element[0][j];
        element[0][j] = calculateNewValue(
          opAndValue[0],
          element[0][j],
          opAndValue[1]
        );
        let smallerValue = element[0][j] % prodOfAllTestValues;
        if (element[0][j] % element[2] === 0) {
          Monkeys[element[3]][0].push(smallerValue);
          Monkeys[index][0].splice(j, 1);
        } else {
          Monkeys[element[4]][0].push(smallerValue);
          Monkeys[index][0].splice(j, 1);
        }
        j--;
      }
    });
  }
};
const part1 = () => {
  rounds(Monkeys, 10000);
  monkeyCount.sort((a, b) => b - a, 0);
  return monkeyCount[0] * monkeyCount[1];
};
console.log(`Answer to part 1: ${part1(parseInput)}`);
