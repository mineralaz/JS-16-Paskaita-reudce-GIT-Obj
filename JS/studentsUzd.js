"use strict";
console.log("studentsUzd.js");

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

// 1. atrinkti i nauja masyva studentus kurie turi masina
const studentsHasCar = students.reduce((arr, student) => {
  if (student.hasCar === true) {
    arr.push(student);
  }
  return arr;
}, []);
console.log("studentsHasCar ===", studentsHasCar);
// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach
const studentaiTurintysMasinas = [];
students.forEach((student) => {
  if (student.hasCar === true) {
    studentaiTurintysMasinas.push(student);
  }
});
console.log("studentaiTurintysMasinas ===", studentaiTurintysMasinas);

// 2. Atrinkti i nauja masyva zmones is Vilniaus
const studentInVilnius = students.reduce((arr, student) => {
  if (student.town === "Vilnius") {
    arr.push(student);
  }
  return arr;
}, []);
console.log("studentInVilnius ===", studentInVilnius);

// 3. Atrinkti i nauja masyva moteris
const moterys = students.reduce((arr, student) => {
  if (student.gender === "female") {
    arr.push(student);
  }
  return arr;
}, []);
console.log("moterys ===", moterys);
// 4. suzinoti ar yra nors vienas zmogus is Kauno
const isThereAnyoneFromKaunas = students.reduce((isThere, student) => {
  if (student.town === "Kaunas") {
    isThere = true;
  }
  return isThere;
}, Boolean);
console.log("isThereAnyoneFromKaunas ===", isThereAnyoneFromKaunas);
// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
const kiekJaunesniuNei26 = students.reduce((total, student) => {
  if (student.age < 26) {
    total++;
  }
  return total;
}, 0);
console.log("kiekJaunesniuNei26 ===", kiekJaunesniuNei26);

// 6 Grazinti nauja masyva kuriame yra visu zmoniu amziai;
const amziai = students.reduce((arr, student) => {
  arr.push(student.age);
  return arr;
}, []);
console.log("amziai ===", amziai);
// 7. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas

// 8. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

// 9. Gauti visu zmoniu metu suma .reduce
const visuZmoniuMetuSuma = students.reduce((total, student) => {
  total += student.age;
  return total;
}, 0);
console.log("visuZmoniuMetuSuma ===", visuZmoniuMetuSuma);
// 10. suskaiciuoti visu zmoniu metu vidurki
const visuZmoniuMetuvidurkis = students.reduce(
  (total, student, i, arr) => total + student.age / students.length,
  0
);
console.log("visuZmoniuMetuvidurkis ===", visuZmoniuMetuvidurkis);

// 11 surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa

// 12 sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
