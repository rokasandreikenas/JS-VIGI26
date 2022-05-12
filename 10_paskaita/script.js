// Objekto savybė (property) yra reikšmės (string, number, array, object ir t.t.) mėlyna spalva
// Objekto metodai (method) yra funkcijos atitikmuo. Reikia iškviesti ir paduoti parametrus (nebūtinai) getElementById()

// index.html yra document

const nameInput = document.getElementById("name");

nameInput.addEventListener("click", handleClickOnName);

// background-color: red
// backgroundColor = "red"

function handleClickOnName() {
  nameInput.style.color = "red";
  nameInput.style.background = "blue";
  nameInput.style.textAlign = "right";
  nameInput.style.fontSize = "72px";
}

const jumpButton = document.getElementById("jump");

jumpButton.addEventListener("click", handleJump);

jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";

let inTop = true;

function handleJump() {
  if (inTop) {
    // going to bottom
    jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px;";
    jumpButton.textContent = "Jump to top";
    inTop = false;
  } else {
    // going back to top
    jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
    jumpButton.textContent = "Jump to bottom";
    inTop = true;
  }

  //   inTop = !inTop;
}

const backwardsButton = document.getElementById("backwards");

backwardsButton.addEventListener("click", handleGoBackwards);

let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;";
const topRight = "position: absolute; top: 10px; right: 10px;";
const bottomRight = "position: absolute; bottom: 10px; right: 10px;";
const bottomLeft = "position: absolute; bottom: 10px; left: 10px;";

backwardsButton.style.cssText = topLeft;

function handleGoBackwards() {
  if (position === 0) {
    backwardsButton.style.cssText = bottomLeft;
  } else if (position === 1) {
    backwardsButton.style.cssText = bottomRight;
  } else if (position === 2) {
    backwardsButton.style.cssText = topRight;
  } else {
    backwardsButton.style.cssText = topLeft;
    position = -1;
  }

  position++;
}
