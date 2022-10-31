"use strict";
console.log("reduce.js");
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 7, 1, 50, 12];

// avg one way 5 + 7 + 1 + 50 + 12 = 75 / 5 = 15
// avg other way 5/5 + 7/5 + 1/5 + 50/5 + 12/5 = 15

// surasti bendra masyvo reiksmiu suma su forEach
{
  let total = 0;
  nums.forEach((sk, i, arr) => {
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
}

// avg su forEach
{
  let total = 0;
  nums.forEach((sk, i, arr) => {
    // sumuoti su total
    total = total + sk;
  });
  const avg = total / nums.length;
  console.log("avg ===", avg);

  // one way

  // const avgReduce = nums.reduce((total, sk, i, arr) => total + sk, 0) / nums.length;
  // other way
  const avgReduce = nums.reduce(
    (total, sk, i, arr) => total + sk / arr.length,
    0
  );

  console.log("avgReduce ===", avgReduce);
}

{
  // su forEach atrinkti didziausia masyvo reiksme
  // 'hint (math.max()) palengvinimas'
  let maxVal = nums[0];
  nums.forEach((sk) => {
    // if (sk > maxVal) {
    //   maxVal = sk;
    // }
    maxVal = Math.max(maxVal, sk);
  });
  console.log("maxVal ===", maxVal);

  console.log("Math.max(5, 7, 1, 50, 12) ===", Math.max(5, 7, 1, 50, 12));
  console.log("Math.max(...nums) ===", Math.max(...nums));

  // su reduce atrinkti didziausia masyvo reiksme

  const maxReduce = nums.reduce((max, sk) => {
    return Math.max(max, sk);
  }, nums[0]);
  console.log("maxReduce ===", maxReduce);
}

{
  // sugeneruoti html sarasa is masyvo
  const colors = ["red", "green", "blue", "yellow"];
  // <ol id="colors"></ol>
  const colEl = document.getElementById("colors");
  // map generate elements
  //   const htmlString = colors.map((color) => `<li> ${color} </li>`).join("");
  //   colEl.innerHTML = htmlString;

  // reduce generate elements

  const htmlString = colors.reduce(
    (acc, color) => acc + `<li> ${color} </li>`,
    ""
  );

  console.log("htmlString ===", htmlString);
  colEl.innerHTML = htmlString;
}
