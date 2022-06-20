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

// const hours = 24.5;
// let result = "";

// if (hours >= 0 && hours < 6) {
//   result = "Naktis";
// } else if (hours >= 6 && hours < 12) {
//   result = "Rytas";
// } else if (hours >= 12 && hours < 18) {
//   result = "Diena";
// } else if (hours >= 18 && hours <= 24) {
//   result = "Vakaras";
// } else {
//   result = "Netinkamas skaicius";
// }

// const price = 10;
// const result = price > 10 ? "Perku" : "Neperku";

// const hours = 5;
// const message =
//   hours >= 0 && hours < 6
//     ? "Naktis"
//     : hours >= 6 && hours < 12
//     ? "Rytas"
//     : hours >= 12 && hours < 18
//     ? "Diena"
//     : hours >= 18 && hours <= 24
//     ? "Vakaras"
//     : "blogas laikas";
// console.log(message);

// const myName = "Julija";
// const nameLength = myName.length;
// const firstChar = myName[0]; // charAt(0)
// const lastChar = myName[myName.length - 1]; // myName.charAt(nameLength - 1)

// console.log(firstChar);
// console.log(lastChar);
// console.log(myName.length);

// for (let i = 0; i < nameLength; i++) {
//   const char = myName[i];
//   console.log(char);
// }

// for (let i = 0; i < myName.length; i++) {
//   const char = myName[i];
//   console.log(`${i + 1} raide yra ${char}`);
// }

// Turi return

// function square(number) {
//   return number * number;
// }

// const squared = square(5);

// // console.log(squared);
// // console.log(square(5));

// function cube(number) {
//   return number * number * number;
// }

// console.log(cube(6));

// function multiplied(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiplied(4, 9));

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(34, 56));

// function subtraction(num1, num2) {
//   return num1 - num2;
// }

// console.log(subtraction(27, 98));

// function divide(num1, num2) {
//   return num1 / num2;
// }

// console.log(divide(28, 7));

const myString = "Rokas, labadiena @@!@#123";

function stringLength(string) {
  return string.length;
}

console.log(stringLength(myString));

function compareNumbers(num1, num2) {
  // return num1 > num2;
  // return num1 > num2 ? true : false;
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}

console.log(compareNumbers(10, 5));

function firstAndLastChar(string) {
  // charAt
  // slice(-1)
  return string[0] + string[string.length - 1];
}

console.log(firstAndLastChar("Zveriukas"));

// Neturi return

function showMessage(message) {
  console.log(message);
}

// Neturi argumentu

function getRandomNumber() {
  return Math.random();
}

showMessage("Rokas");

console.log(getRandomNumber());
