const prekes = [
  { id: 1, name: "Apple", description: "asd" },
  { id: 1, name: "Apple", description: "asd" },
];

const nameEl = document.getElementById("name");

nameEl.textContent = "Rokas";
nameEl.style.color = "green";

const body = document.querySelector("body");
body.style.backgroundColor = "#4267B2";

document.body.style.background = "#4267B2";

const greetingEl = document.getElementById("greeting");
greetingEl.textContent = "Labadiena, geros dienos!";
greetingEl.style.textAlign = "center";

// greetingEl.style.display = "flex";
// greetingEl.style.justifyContent = "center";
// greetingEl.style.alignItems = "center";
// greetingEl.style.height = "80vh";

const div = document.createElement("div");
div.textContent = "Mano naujas divas";
document.body.append(div); // istumia i gala kaip vaikini elementa
// document.body.prepend(div); // istumia i prieki kaip vaikini elementa

const container = document.createElement("div");
const p = document.createElement("p");
const img = document.createElement("img");
img.src = "adresas";
img.alt = "alternative text";

img.setAttribute("src", "addresas");
img.setAttribute("alt", "alt text");

container.append(p, img);

// document.querySelector("#id").append(container);

const blackCube = document.createElement("div");
blackCube.style.backgroundColor = "black";
blackCube.style.height = "100px";
blackCube.style.width = "100px";
document.body.append(blackCube);

const cardOne = document.createElement("div");
const cardTwo = document.createElement("div");
const cardThree = document.createElement("div");

cardOne.style.backgroundColor = "yellow";
cardOne.style.height = "50px";
cardOne.style.width = "50px";

cardTwo.style.backgroundColor = "green";
cardTwo.style.height = "100px";
cardTwo.style.width = "100px";

cardThree.style.backgroundColor = "red";
cardThree.style.height = "150px";
cardThree.style.width = "150px";

document.body.prepend(cardOne, cardTwo, cardThree);

const fruits = ["banana", "apple", "pear"];

// sukurti ul
// daryti cikla
// sukurti elementa
// prideti i ul
// po ciklo append i body
