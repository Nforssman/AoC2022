const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .replace(/\r/g, "")
  .trim()
  .split("\n");
let Matrix = [];
let ScenicScore = 0;
let x = input[0].length - 1;
let y = input.length - 1;

const MatrixSetup = () => {
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      let vector = [];
      let trees = [0, 0, 0, 0];
      for (let left = j - 1; left >= 0; left--) {
        trees[0]++;
        if (parseInt(input[i][left]) >= parseInt(input[i][j])) break;
        if (left === 0) {
          vector.push([i, j]);
        }
      }
      for (let right = j + 1; right <= input[i].length; right++) {
        trees[1]++;
        if (parseInt(input[i][right]) >= parseInt(input[i][j])) break;
        if (right === input[i].length) {
          vector.push([i, j]);
        }
      }

      for (let upp = i - 1; upp >= 0; upp--) {
        trees[2]++;
        if (parseInt(input[upp][j]) >= parseInt(input[i][j])) break;
        if (upp === 0) {
          vector.push([i, j]);
        }
      }
      for (let down = i + 1; down <= input[i].length - 1; down++) {
        trees[3]++;
        if (parseInt(input[down][j]) >= parseInt(input[i][j])) break;
        if (down === input[i].length - 1) {
          vector.push([i, j]);
        }
      }
      let tempSum = 1;
      trees.forEach((element) => {
        tempSum *= element;
      });
      if (tempSum > ScenicScore) ScenicScore = tempSum;
      if (vector.length > 0) Matrix.push([i, j]);
    }
  }
};
MatrixSetup();
console.log(Matrix.length + 2 * (x + y));
console.log(ScenicScore);
