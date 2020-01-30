const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger;

do {
        positiveInteger = Number(readlineSync.question("\nPositive integer: "));

} while (positiveInteger > MAX
        || positiveInteger < MIN
        || Number.isNaN(positiveInteger)
        || Number.isInteger(positiveInteger) == false)

let output = "";
let x = 0;

while (positiveInteger > 0) {
        while ((positiveInteger % 10) !== 0) {
                positiveInteger -= 1;
                x += 1;
        }

        if (positiveInteger >= 10) {
                output = output + `${x}, `;
        } else if (positiveInteger < 10) {
                output = output + `${x}.`;
        }

        positiveInteger /= 10;

        x = 0;

}

console.log(output);
