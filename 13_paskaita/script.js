// Žinoti primityvius duomenų tipus ir jų apibrėžimą.
// Boolean object
// Number object
// String object

/* 
    Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
    There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
*/

const name = "Rokas";
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue = null;

const isHotString = Boolean(isHot).toString();
// const isHotString = isHot.toString();

// console.log(isHot + isHot);
// console.log(isHotString + isHotString);

const count = "15";
const countNumber = Number(count);

// console.log(count + count);
// console.log(countNumber + countNumber);

// integer - sveikasis skaičius
// console.log(Number.isInteger(5.5));

// paverčiam į string
const myNumber = 5.756;
// console.log(Number(myNumber).toString());
// console.log(myNumber.toString());

// užapvalina po kablelio
// console.log(myNumber.toFixed(2));

// 3.75 + 2.40 + 3.32 * 0.17

const salary = 10.7413666666667;

// console.log(salary.toFixed(2));

const sentence = "My name is Rokas and I am very happy";

// Suranda stringe kito stringo dalį. Case-sensitive (didžiosios, mažosios raidės)
// console.log(sentence.includes("happy"));
// console.log(sentence.slice(0, 16)); // pradžia ir pabaiga
// console.log(sentence.slice(21)); // nuo pradžios iki pat pabaigos
// console.log(sentence.slice(0, -5)); // nuo pradžios iki nukirpto galo
// console.log(sentence.slice(-5)); // nuo galo

// const badText = "   Help  "
// console.log(badText.trim()); // nuima tuscius tarpus nuo priekio ir galo

const upperCased = sentence.toUpperCase(); // visas raides padaro didžiasias
// console.log(upperCased);

const lowerCased = sentence.toLowerCase(); // visas raides padaro mažasias
// console.log(lowerCased);

// Patikrina ar stringai yra vienodi (not case-sensitive)
function areSameStrings(firstString, secondString) {
  return firstString.toUpperCase() === secondString.toUpperCase();
}

const resultCount = 5;
const dog = "Rikis";

// pakartoja stringa tiek kiek paduodam į argumentą
const result = dog.repeat(resultCount);

// console.log(result);
// let result = "";

// for (let i = 0; i < resultCount; i++) {
//   result += dog;
// }

const tagInput = "Prekyba Marketingas Programavimas Vadyba";
const tags = tagInput.split(" ");

const countryInput = "Anglija, Sveicarija, Amerika, Latvija, Gruzija";
const countries = countryInput.split(", ");

// console.log(tags)
// console.log(countries);
