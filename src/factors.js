const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger;
let x = 1;
let y;
let output = "";
let root;

console.log("\n ");

do {
        positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (positiveInteger > MAX
        || positiveInteger < MIN
        || Number.isNaN(positiveInteger)
        || Number.isInteger(positiveInteger) == false)

root = Math.sqrt(positiveInteger);

if (root % 1 == 0) {
        y = Number(root) + 1;
} else {
        y = Number(root);
}

if (positiveInteger == 4) {
        console.log("1, 4, 2.");
} else {
        while (x < y) {
                if ((positiveInteger / x) % 1 == 0) {
                        if (positiveInteger / x == x) {
                                output = output + String(x);
                                if (x < root - 1) {
                                        output = output + ", ";
                                } else {
                                        output = output + ".";
                                }
                        } else {
                                output = output + String(x) + ", " + String(positiveInteger / x);
                                if (x < root - 1) {
                                        output = output + ", ";
                                }  else {
                                        output = output + ".";
                                }
                        }
                }

                x += 1;
        }

        console.log("\n" + output);
}
