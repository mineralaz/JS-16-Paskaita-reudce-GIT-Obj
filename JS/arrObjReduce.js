"use strict";
console.log("arrObjReduce.js");

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
    name: "Serbentautas",
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

// gauti visu useriu amziu vidurki

const usersAvg = users.reduce((avg, uObj) => avg + uObj.age, 0) / users.length;
console.log("usersAvg ===", usersAvg);

const ages =
  users.map((uObj) => uObj.age).reduce((avg, sk) => avg + sk, 0) / users.length;
console.log("ages ===", ages);

const { name } = users[0];

// 1. gauti visu vardu ilgiu vidurki
const namesLengthAvg =
  users.reduce((avg, user) => avg + user.name.length, 0) / users.length;
console.log("namesLengthAvg ===", namesLengthAvg);
// 2. grazinti jauniausia zmogu
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const jauniausiasZmogus = users.reduce((foundYoungest, user) => {
  if (user.age < foundYoungest.age) {
    foundYoungest = user;
  }
  return foundYoungest;
}, users[0]);

console.log("jauniausiasZmogus ===", jauniausiasZmogus);

// 3. Extra sunkesne. Grazinti const rez = {London: 2, Kaunas: 3}

// kiek nariu yra is londono?
const londUsersObj = users.reduce(
  (accObj, uObj) => {
    // atliekam veiksmus su objektu
    if (uObj.town === "London") {
      accObj.London++;
    }
    // grazinam objekta, ne veiksma su objektu
    return accObj;
  },
  { London: 0 }
);

console.log("londUsersObj ===", londUsersObj);

// kiek nariu yra is Kauno?
const kaunUsersObj = users.reduce(
  (accObj, uObj) => {
    // atliekam veiksmus su objektu
    if (uObj.town === "Kaunas") {
      accObj.Kaunas++;
    }
    // grazinam objekta, ne veiksma su objektu
    return accObj;
  },
  { Kaunas: 0 }
);
console.log("kaunUsersObj ===", kaunUsersObj);

const rez = { ...londUsersObj, ...kaunUsersObj };
console.log("rez ===", rez);
