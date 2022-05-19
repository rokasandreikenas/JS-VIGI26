const fruits = ["Apple", "Orange", "Pear"];

// .pop() - pašalina paskutinį masyvo elementą ir jį grąžina
// const lastElement = fruits.pop();
// fruits.pop() veikia taip pat

// .shift() - pašalina pirmąjį masyvo elementą ir jį grąžina
// const firstElement = fruits.shift();
// fruits.shift();

// .push() - prideda naują elementą į masyvo galą
// fruits.push("Pineapple");

// .unshift() - prideda naują elementą į masyvo pradžią
// fruits.unshift("Banana");

// fruits.unshift("Plum");
// fruits.push("Pineapple", "Banana");

const upperCasedFruits = [];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];

  const upperCased = fruit.toUpperCase();
  upperCasedFruits.push(upperCased);
}
// ["APPLE"]
// ["APPLE", "ORANGE"]
// ["APPLE", "ORANGE", "PEAR"]

// console.log(fruits);
// console.log(upperCasedFruits);

// Callback funkcija

function log(name) {
  console.log(name);
}

function showAlert(callback) {
  callback("Rokas");
}

const names = ["bOb", "heLlEn", "jAck"];

//showAlert(log);
//document.addEventListener("click", log)

// Ciklas kuris praeina per visus masyvo elementus
// .forEach()

// names.forEach(showName);
// function showName(name) {
//   console.log(name);
// }

// names.forEach((name, index) => {
//   console.log(index + name);
// });

// names.forEach( (name, index) => {  }  )

// Ciklas kuris preaina per visus masyvo elementus ir grąžina naują masyvą
// .map()

// const modifiedNames = names.map((name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// });

// console.log(names);
// console.log(modifiedNames);

const ages = [12, 15, 23, 27, 25, 30, 35, 38];

// Ciklas kuris praeina per visus masyvo elementus ir grąžina naują masyva jeigu reikšmė yra true (positive)
// .filter()

const moreThanTwenty = ages.filter((age) => {
  return age > 20;
});

const lessThanTwenty = ages.filter((age) => age < 20);

// console.log(moreThanTwenty);
// console.log(lessThanTwenty);

const cars = ["Bmw", "Lamborghini", "Audi", "Lada", "mercedes"]; // "VW"
// Suranda pirmą elementą iš masyvo kuris atitinka kriterijų (true) ir jį grąžina
// .find()

// const foundCar = cars.find((car) => car.charAt(0) === "L");

// Patikrina ar nors vienas elementas atitinka kriterijų ir grąžina true arba false
// .some()

// const hasShortName = cars.some((car) => car.length < 3);

// console.log(hasShortName);

// Patikrina ar kiekvienas elementas atitinka kriterijų ir grąžina true arba false
// .every()

const isEveryUpperCased = cars.every(
  (car) => car.charAt(0) === car.charAt(0).toUpperCase()
);

console.log(isEveryUpperCased);
