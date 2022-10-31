"use strict";
console.log("reduce.js");

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 7, 1, 50, 12];

// surasti bendra masyvo reiksmiu suma su forEach
let total = 0;
nums.map((sk, i, arr) => {
  // sumuoti su total
  total = total + sk;
});
console.log("total ===", total);

// surasti bendra masyvo reiksmiu suma su reduce
const reduceRezult = nums.reduce((total, sk, i, arr) => {
  // isspausdinti su console kiekvienos iteracijos
  // index, total, sk
  console.log(`iteracija ${i}, sk: ${sk}, total : ${total}`);

  return total + sk;
}, 0);
console.log("reduceRezult ===", reduceRezult);
