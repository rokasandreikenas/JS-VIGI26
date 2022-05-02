const clientAge = 16;
const legalAge = 20;

// jeigu clientAge yra daugiau arba lygu legalAge
// if (clientAge >= legalAge) {
//   console.log(`Pasiekęs ${legalAge}`);
// } else {
//   console.log(`Nepasiekęs ${legalAge}`);
// }

// const myName = "Rokas";
// if (myName.length > 6) {
//   console.log("Ilgas vardas");
// }

// const age = 110;

// // || - or (arba)
// // && - and (ir)

// if (1 > age > 100) {
//   console.log("Invalid age");
// } else if (age < 18) {
//   console.log("Child");
// } else {
//   console.log("Adult");
// }

// const myAge = 15;

// if (17 >= myAge >= 1) {
//   console.log("Child");
// } else if (myAge >= 100 || myAge < 1) {
//   console.log("Invalide age");
// } else {
//   console.log("Adult");
// }

const car = "Seat";

if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("BMW Group");
} else {
  console.log("Nei vienam");
}

if (car === "Seat" && car.length > 3) {
  console.log("Tai yra Seatas ir pavadinimas ilgesnis uz 3");
}
