const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = null;
let upperBound = null;

do {
        lowerBound = Number(readlineSync.question("\nLower bound: "));
        upperBound = Number(readlineSync.question("Upper bound: "));

} while (lowerBound > MAX
        || upperBound > MAX
        || lowerBound < MIN
        || upperBound < MIN
        || Number.isNaN(lowerBound)
        || Number.isNaN(upperBound)
        || Number.isInteger(lowerBound) == false
        || Number.isInteger(upperBound) == false)

let addend = ((lowerBound % 2) === 0) ? lowerBound : lowerBound + 1;
lowerBound = addend;
let total = null;

while (lowerBound <= upperBound) {
        total += lowerBound;
        lowerBound += 2;
}

console.log("\n" + total.toLocaleString() + ".");
