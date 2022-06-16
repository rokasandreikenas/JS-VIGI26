// const userName = "Rokas";
// const goodbye = `Viso gero ${userName}, lauksime sugrįžtant!`;

// const salary = 10000;
// const dollarSymbol = "$";

// const price = 10;

// if (price > 10) {
//   console.log("Perku");
// } else {
//   console.log("Neperku");
// }

// let result = "";
// if (price > 10) {
//   result = "Perku";
// } else {
//   result = "Neperku";
// }
// console.log(result);

// let result1 = "Neperku";
// if (price > 10) {
//   result1 = "Perku";
// }

const hours = 24.5;
let result = "";

if (hours >= 0 && hours < 6) {
  result = "Naktis";
} else if (hours >= 6 && hours < 12) {
  result = "Rytas";
} else if (hours >= 12 && hours < 18) {
  result = "Diena";
} else if (hours >= 18 && hours <= 24) {
  result = "Vakaras";
} else {
  result = "Netinkamas skaicius";
}

console.log(result);
