const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height;
let leftSide;
let rightSide;
let output;

console.log("\n ");

do {
        height = Number(readlineSync.question("Height: "));
} while (height > MAX
        || height < MIN
        || Number.isNaN(height)
        || Number.isInteger(height) == false)

console.log("\n ")

for (var i = height; i > 0; i--) {
        leftSide = "";
        rightSide = "";
        output = "";

        for (j = 0; j <= height; j++) {
                leftSide = leftSide + "#";
        }
        for (l = 0; l < i - 1; l++) {
                leftSide = leftSide.replace(leftSide.charAt(l), " ");
        }
        for (z = i - 2; z < height; z++) {
                rightSide = rightSide + "#";
        }

        output = leftSide + " " + rightSide;

        console.log(output);
}
