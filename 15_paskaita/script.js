// Padeda ištrinti arba įterpti masyvo elementą į pasirinktą vietą
// .splice()

const sentence = ["I", "study", "JavaScript", "right", "now"];

// const firstTwoElements = sentence.splice(0, 2); // Ištrina pirmus du ir grąžina
// sentence.splice(2, 2); // nuo antros vietos ištrina du
// sentence.splice(2, 1, "TypeScript"); // Pakeičia masyvo elementą kitu
// sentence.splice(1, 4, "studied", "TypeScript", "before");
// console.log(sentence);

// const sliced = sentence.slice(0, 3); // Pirmus tris elementus
// const sliced = sentence.slice(-3); // Paskutinius tris

const numbers = [7, 8, 1, 0.5, 8, 6, 10, 20, 30, 40];

// const total = numbers.reduce((total, number) => {
//   return total + number;
// }, 0);

// const total = numbers.reduce((total, number) => total + number, 0);

// console.log("");
// console.log(total);

// const sortedAscendingOrder = numbers.sort((a, b) => a - b); // surikiuoja didejimo tvarka
// const sortedDescendingOrder = numbers.sort((a, b) => b - a); // surikiuoja mažėjimo tvarka
// console.log(sortedAscendingOrder);
// console.log(sortedDescendingOrder);

const styles = ["Jazz", "Blues"]; // 1
console.log(styles);
styles.push("Rock-n-Roll"); // 2
console.log(styles);
styles.splice(1, 1, "Classics"); // 3
console.log(styles);
const firstElement = styles.shift(); // 4
console.log(firstElement);
console.log(styles);
styles.unshift("Rap", "Reggae"); // 2
console.log(styles);

const arr = [11, -2, 34, 45];

// function getMaxSubSum(array) {
//   const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
//   return sum;
// }

function getMaxSubSum(array) {
  const sum = array.reduce((total, num) => {
    if (num > 0) {
      return total + num;
    } else {
      return total;
    }
  }, 0);
  return sum;
}

// const sum = getMaxSubSum(arr);
// console.log(sum);

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

const x = cars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0);

console.log(x);
