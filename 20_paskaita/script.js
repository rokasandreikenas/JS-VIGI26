class Cat {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  isFat() {
    if (this.weight >= 5) {
      return `${this.name} yra storas kačiukas`;
    } else {
      return `${this.name} yra plonas kačiukas`;
    }
  }
}

const cat = new Cat("Kleopatras", 7);

// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]
// arr.filter(x => isNaN(x))

const randomArray = [1, 5, "a", "g", "z", 6];

const removeNumbersFromArray = (array) => array.filter((x) => isNaN(x));
const removeLettersFromArray = (array) => array.filter((x) => !isNaN(x));

// const removedNumbers = removeNumbersFromArray(randomArray);
// const removedLetters = removeLettersFromArray(randomArray);

// console.log(removedNumbers);
// console.log(removedLetters);

let test = "Petras 123 Slekys";

// split("") ["a", "b", "c"]
// map(char)  => "a" + "a"
// join("") => ["a", "a"] => "aa"

const newTest = test
  .split("")
  .map((char) => (isNaN(char) ? char + char : char))
  .join("");

// isNaN("a") ? "a" + "a" : "a" => "aa"
// isNaN(1) ? "1" + "1" : "1" => "1"

const testString = "Rokas !@#$%^ Tomas 123";
// ats: "Rokas !!@@##$$%%^^ Tomas 112233"

// !true => false
// !false => true
// !!true => true
// !!false => false
// !!"rokas" => true
// !"rokas" => false

// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas.
// Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių.
// Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

// patikrini ar susideda is 5 skaiciu
// patikrinti ar susideda is 3 skaiciu ir 2 raidziu
// patikrinti ar turi tarpa

// const checkPostCode = (postCode) => {
//   const letters = removeLettersFromArray(postCode.split(""));
//   const numbers = removeNumbersFromArray(postCode.split(""));

//   if (postCode.includes(" ")) {
//     return false;
//   } else if (letters.length === 5) {
//     return true;
//   } else if (letters.length === 2 && numbers.length === 3) {
//     return true;
//   } else {
//     return false;
//   }
// };

function checkPostCode(postCode) {
  const letters = removeLettersFromArray(postCode.split(""));
  const numbers = removeNumbersFromArray(postCode.split(""));

  if (postCode.includes(" ")) {
    return false;
  } else if (letters.length === 5) {
    return true;
  } else if (letters.length === 2 && numbers.length === 3) {
    return true;
  } else {
    return false;
  }
}

const code = "12345"; // true

console.log(checkPostCode(code));
