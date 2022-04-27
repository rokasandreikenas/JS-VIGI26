// One line komentaras

/* 
    Sveiki čia yra
    Multi line komentaras
*/

// Sukuriam kintamuosius su let
let myName;
let age;
let mySurname;
let fullName;
let result;
let average;
let percent;

// console.log(myName); // undefined - yra vienas iš tipų, naudojamas kai kintamasis yra sukurtas, bet neturi priskirtos reikšmės

// Priskiriam kintamiejam reikšmes
myName = "Rokas"; // string - reikšmė apsirašanti tarp kabučių "" arba ''
age = 23; // number - reikšmė apsirašanti iš skaičių. Sveikas skaičius pvz 10 arba su kableliu 3.14
mySurname = "Andreikenas";
fullName = myName + " " + mySurname; // sudėtis - tarp dviejų tokių pačių tipų "Rokas" + "Andreikenas" + "Frontend" = "RokasAndreikenasFrontend"
result = age + age + age - 9; // 23 + 23 + 23 - 9 = 60
result = result + result; // 60 + 60 = 120
average = (8 + 8 + 9 + 10 + 10) / 5; // 45 / 5 = 9
// Is viso surinkta 60e, as atnesiau 20e
percent = (100 * 20) / 60; // 33.33
percentOutput = percent + "%"; // 33.33%  number + string = string

// console.log(myName);

// console.log(9 + 9); // 18
// console.log("9" + "9"); // "99"
// console.log("760" + 40); // "76040"

// sukuriam kintamuosius su const

const myDogName = "Grikis";
const myDogAge = 7;
const doubleDogName = myDogName + myDogName;
const greetings = "Sveikas" + " " + myDogName + "!";

let question = "How are you?";

// console.log(question);

question = "Kaip laikaisi?";
// console.log(question);

// 1. Kada naudoti let ir kada const? Naudoti let tik tada, kai reikšmė yra kintanti. Kitais atvejais naudoti const
// 2. Sukrūs kintamąjį - visada priskiriam pradinę reikšmę.
// 3. Visada naudojam triguba lygybę (tikrina reikšmę ir tipą)
// 4. Visos neigiamos reikšmįs yra - undefined, null, 0, "", false

// string, number, boolean (bool)

const yes = true; // teigiama reikšmė
const no = false; // neigiama reikšmė
let isAdult = true;

// console.log("Rokas" == "rokas"); // "Rokas" yra lygus "rokas" = false
// console.log(10 == 10); // 10 yra lygu 10 = true
// console.log(10 != 10); // 10 yra nelygu 10 = false
// console.log(5 != 4); // 5 yra nelygu 4 = true

// Dviguba lygybe tikrina ar reikšmė yra lygi
// console.log("5" == 5);
// Triguba lygybe tikrina ar reišmė yra lygi ir tipas yra toks pat
// console.log("5" === 5);
