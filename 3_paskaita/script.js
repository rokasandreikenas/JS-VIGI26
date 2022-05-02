// console.log("Trecia paskaita switch, ternary operatoriai, for ciklas");

// const number = 7;

// argumentas key turi atitikti case reikšmę.

// if (number === 1) {
//   console.log("Pirmadienis");
// } else if (number === 2) {
//   console.log("Antadienis");
// } else if (number === 3) {
//   console.log("Treciadienis");
// } else if (number === 4) {
//   console.log("Ketvirtadienis");
// } else if (number === 5) {
//   console.log("Penktadienis");
// } else if (number === 6 || number === 7) {
//   console.log("Savaitgalis");
// } else {
//   console.log("Blogai irasyta savaites diena");
// }

// switch (number) {
//   case 1:
//     console.log("Pirmadienis");
//     break;
//   case 2:
//     console.log("Antadienis");
//     break;
//   case 3:
//     console.log("Treciadienis");
//     break;
//   case 4:
//     console.log("Ketvirtadienis");
//     break;
//   case 5:
//     console.log("Penktadienis");
//     break;
//   case 6:
//   case 7:
//     console.log("Savaitgalis");
//     break;
//   default:
//     console.log("Blogai irasyta savaites diena");
//     break;
// }

// const age = 15;
// const legalAge = 18;
// const drinkingAge = 20;
// const celciusDegrees = 26;

// let result = "pilnametis";

// if (age < legalAge) {
//   result = "nepilnametis";
// }
// //                    if salyga        patenkina        else
// const resultTernary = age < legalAge ? "nepilnametis" : "pilnametis";
// const drink = age >= drinkingAge ? "Beer" : "Milk";
// const weather =
//   celciusDegrees <= 0 ? "Cold" : celciusDegrees < 25 ? "Warm" : "Hot";

// Naudoti template string tik tada, kai dedame kintamuosius į vidų.

const myName = "Rokas";
const surname = "Andreikenas";

console.log(myName + " " + surname);
console.log(`${myName} ${surname}`);

const fullNameOld = myName + " " + surname;
const fullNameNew = `${myName} ${surname}`;
