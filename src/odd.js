const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger;

console.log("\n ");

do {
        positiveInteger = Number(readlineSync.question("Positive integer: "));

} while (positiveInteger > MAX
        || positiveInteger < MIN
        || Number.isNaN(positiveInteger)
        || Number.isInteger(positiveInteger) == false)

let output = 0;
let x = 0;

while (positiveInteger > 0) {
        while ((positiveInteger % 10) !== 0) {
                positiveInteger -= 1;
                x += 1;
        }

        x = Number(x);
        output = Number(output);

        if (x % 2 === 1) {
                output += x;
        }

        positiveInteger /= 10;

        x = 0;

}

console.log("\n" + output.toLocaleString() + ".");
