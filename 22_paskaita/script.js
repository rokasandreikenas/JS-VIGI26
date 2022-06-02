const networkRequest = () => {
  setTimeout(() => {
    console.log("Async Code");
  }, 4000);
};

// console.log("Hello World");
// networkRequest();
// console.log("The End");

// const resolvedPromise = new Promise((resolve, reject) => {
//   resolve("17 celsius, Vilnius");
// });

// resolvedPromise.then((response) => {
//   console.log(`Dabar yra ${response}`);
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//   reject("Tinklas yra perkrautas. Pabandykite veliau");
// });

// rejectedPromise
//   .then((response) => {
//     console.log(`Dabar yra ${response}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Kreipimasis i oro tarnyba");
//   });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("17 celsius, Vilnius");
    reject("Tinklas yra perkrautas. Pabandykite veliau");
  }, 4000);
});

const renderWeather = (response) => {
  const weather = document.getElementById("weather");
  weather.textContent = `Dabar yra ${response}`;
};

const showError = (err) => {
  const error = document.getElementById("error");
  error.textContent = err;
  error.style.color = "red";
};

const showPriceMessage = () => {
  const header = document.getElementById("header");
  header.textContent = "Jus pasinaudojote oru paslauga. Jums tai kainavo 5ct";
};

const getWeather = async () => {
  try {
    const response = await promise;
    renderWeather(response);
  } catch (error) {
    showError(error);
  } finally {
    showPriceMessage();
  }
};

getWeather();

// async function getWeatherFunc() {}

// promise
//   .then((response) => {
//     renderWeather(response);
//   })
//   .catch((error) => {
//     showError(error);
//   })
//   .finally(() => {
//     showPriceMessage();
//   });
