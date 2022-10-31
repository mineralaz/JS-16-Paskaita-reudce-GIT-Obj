"use strict";
console.log("sort.js");

const users = [
  {
    name: "James",
    age: 65,
    gender: "male",
    town: "London",
  },
  {
    name: "Jane",
    age: 27,
    gender: "female",
    town: "Kaunas",
  },
  {
    name: "Mike",
    age: 35,
    gender: "male",
    town: "Kaunas",
  },

  {
    name: "June",
    age: 47,
    gender: "female",
    town: "London",
  },
];

console.table(users);
// // isrikiavom pagal amziu didejancia tvarka
// users.sort((a, b) => a.age - b.age);
// console.table(users);

// // isrikiavom pagal amziu mazejancia tvarka
// users.sort((a, b) => b.age - a.age);
// console.table(users);

// rikiuojam pagal miesta
users.sort((a, b) => (a.town > b.town ? 1 : -1));
console.table(users);

// rikiuojam pagal gender
users.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("a.gender.localeCompare(b.gender)");
console.table(users);
// isrikiuoti musu masyva pagal varda
// a - z
users.sort((a, b) => (a.name > b.name ? 1 : -1));
console.table(users);
// z - a
users.sort((a, b) => (a.name < b.name ? 1 : -1));
console.table(users);

// 1. uzduotis =========================================================================
// taikomes
const pNumsEl = document.getElementById("nums");
const nums = [5, 10, 1, 50, 12];

// 1.i ` <p id="nums"></p>` surasyti skaicius is `const nums = [5, 10, 1, 50, 12];`
const stringFromArray = nums.join(", ");
pNumsEl.textContent = stringFromArray;

//     2.paspaudus pelyte ant to paragrafo isrikiuoti skaicius didejancia tvarka
pNumsEl.addEventListener("click", () => {
  nums.sort((x, y) => x - y);
  pNumsEl.textContent = nums.join(", ");
});
