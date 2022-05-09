const exampleForm = document.getElementById("example-form");

exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
  event.preventDefault();

  const nameInput = document.querySelector("input[name=name]");
  const surnameInput = document.querySelector("input[name=surname]");
  const result = document.getElementById("example-result");

  const fullName = `${nameInput.value} ${surnameInput.value}`;
  result.textContent = `Sveikinam ${fullName}, jūs priimtas!`;

  nameInput.value = "";
  surnameInput.value = "";
}

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", handleSubmitRegisterForm);

function handleSubmitRegisterForm(event) {
  event.preventDefault();

  const username = document.querySelector("input[name=username]");
  const password = document.querySelector("input[name=password]");
  const email = document.querySelector("input[name=email]");
  const result = document.querySelector("#register-result");

  result.textContent = `${username.value}, ${email.value} registered.`;

  username.value = "";
  password.value = "";
  email.value = "";
}

const additionalForm = document.getElementById("additional-form");

additionalForm.addEventListener("submit", handleSubmitAdditionalForm);

function handleSubmitAdditionalForm(event) {
  event.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked');
  console.log(gender.value);

  const fruits = document.querySelectorAll("input[name='fruit']:checked");
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit.value);
  }
}
