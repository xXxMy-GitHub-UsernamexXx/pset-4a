const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height;
let output;

console.log("\n ");

do {
        height = Number(readlineSync.question("Height: "));
} while (height > MAX
        || height < MIN
        || Number.isNaN(height)
        || Number.isInteger(height) == false)

console.log("\n ");

for (var i = height; i > 0; i--) {
        output = "";

        for (j = 0; j <= height; j++) {
                output = output + "#";
        }
        for (l = 0; l < i - 1; l++) {
                output = output.replace(output.charAt(l), " ");
        }
        console.log(output);
}
