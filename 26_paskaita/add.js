const handleSubmitCar = (event) => {
  event.preventDefault();

  const brand = document.querySelector("input[name='brand']");
  const model = document.querySelector("input[name='model']");

  const car = { brand: brand.value, model: model.value };

  const params = {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch("https://olive-bead-glazer.glitch.me", params)
    .then((resp) => resp.json())
    .then((response) => {
      // viskas gerai
      // isskviesk funkcija kuri parodys sekmes pranesima
      console.log(response);
    })
    .catch((error) => {
      // kazkas negerai
      // iskviesk funkcija kuri parodys nesekmes pranesima
      console.error(error);
    });
};

const carForm = document.getElementById("car-form");
carForm.addEventListener("submit", handleSubmitCar);
