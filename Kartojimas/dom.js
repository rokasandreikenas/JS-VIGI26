// const prekes = [
//   { id: 1, name: "Apple", description: "asd" },
//   { id: 1, name: "Apple", description: "asd" },
// ];

// const nameEl = document.getElementById("name");

// nameEl.textContent = "Rokas";
// nameEl.style.color = "green";

// const body = document.querySelector("body");
// body.style.backgroundColor = "#4267B2";

// document.body.style.background = "#4267B2";

// const greetingEl = document.getElementById("greeting");
// greetingEl.textContent = "Labadiena, geros dienos!";
// greetingEl.style.textAlign = "center";

// // greetingEl.style.display = "flex";
// // greetingEl.style.justifyContent = "center";
// // greetingEl.style.alignItems = "center";
// // greetingEl.style.height = "80vh";

// const div = document.createElement("div");
// div.textContent = "Mano naujas divas";
// document.body.append(div); // istumia i gala kaip vaikini elementa
// // document.body.prepend(div); // istumia i prieki kaip vaikini elementa

// const container = document.createElement("div");
// const p = document.createElement("p");
// const img = document.createElement("img");
// img.src = "adresas";
// img.alt = "alternative text";

// img.setAttribute("src", "addresas");
// img.setAttribute("alt", "alt text");

// container.append(p, img);

// // document.querySelector("#id").append(container);

// const blackCube = document.createElement("div");
// blackCube.style.backgroundColor = "black";
// blackCube.style.height = "100px";
// blackCube.style.width = "100px";
// document.body.append(blackCube);

// const cardOne = document.createElement("div");
// const cardTwo = document.createElement("div");
// const cardThree = document.createElement("div");

// cardOne.style.backgroundColor = "yellow";
// cardOne.style.height = "50px";
// cardOne.style.width = "50px";

// cardTwo.style.backgroundColor = "green";
// cardTwo.style.height = "100px";
// cardTwo.style.width = "100px";

// cardThree.style.backgroundColor = "red";
// cardThree.style.height = "150px";
// cardThree.style.width = "150px";

// document.body.prepend(cardOne, cardTwo, cardThree);

// const fruits = ["banana", "apple", "pear"];

// const myButton = document.getElementById("my-button");

// let count = 0;

// myButton.addEventListener("click", (event) => {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// });

// function handleClick(event) {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// }

// myButton.addEventListener("click", handleClick);

// const showNameButton = document.querySelector("#show-name");

// showNameButton.addEventListener("click", () => {
//   const nameEl = document.querySelector("#name");
//   nameEl.textContent = "Rokas";
//   nameEl.style.color = "red";
// });

// let numberCount = 0;

// const plusButton = document.getElementById("plus");
// plusButton.addEventListener("click", () => {
//   numberCount++;
//   document.getElementById("result-number").textContent = numberCount;
// });

// const minusButton = document.getElementById("minus");
// minusButton.addEventListener("click", () => {
//   numberCount--;
//   document.getElementById("result-number").textContent = numberCount;
// });

// let number500Count = 0;

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => renderResultNumber("+"));

// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => renderResultNumber("-"));

// const resetButton = document.getElementById("reset500");
// resetButton.addEventListener("click", () => renderResultNumber());

// function renderResultNumber(action) {
//   if (action === "+") {
//     number500Count += 500;
//   } else if (action === "-") {
//     number500Count -= 500;
//   } else {
//     number500Count = 0;
//   }
//   document.getElementById("result500-number").textContent = number500Count;
// }

const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']");
  const email = document.querySelector("input[name='email']");
  const age = document.querySelector("input[name='age']");
  const password = document.querySelector("input[name='password']");

  const result = document.createElement("h2");
  result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;
  document.body.append(result);
});
