//  lib/math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593;
function diff(x, y) {return x - y};

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi));

//  otherApp.js
import { sum } from "lib/math"
console.log(sum(8, 10));


