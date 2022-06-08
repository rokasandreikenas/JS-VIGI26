// GET - gauna esamus įrašus
// POST - sukuria nauja įrašą
// PUT - modifikuoja esantį įrašą
// DELETE - ištrina esamą įrašą

// const url = "https://jsonplaceholder.typicode.com/comments";
// fetch(url)

const renderComment = (comment) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = `[${comment.email}] {${comment.name}} ${comment.body}`;
  document.body.prepend(paragraph);
};

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((resp) => resp.json())
  .then((response) => {
    const firstItem = response[0];
    renderComment(firstItem);
  })
  .catch((error) => {
    console.error(error, ": Failed to load comments");
  });

const renderUser = (user) => {
  const addressCity = user.address.city;
  const companyName = user.company.name;
  const email = user.email;

  const tdAddressCity = document.createElement("td");
  const tdCompanyName = document.createElement("td");
  const tdEmail = document.createElement("td");

  tdAddressCity.textContent = addressCity;
  tdCompanyName.textContent = companyName;
  tdEmail.textContent = email;

  const trUser = document.createElement("tr");
  trUser.append(tdAddressCity, tdCompanyName, tdEmail);

  document.getElementById("users").append(trUser);
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((user) => renderUser(user));
  })
  .catch((error) => {
    console.error(error, ": Failed to load users");
  });

const renderUserCard = (user) => {
  const photo = document.createElement("img");
  const userName = document.createElement("h3");
  const email = document.createElement("p");
  const street = document.createElement("p");

  photo.src = "https://g4.dcdn.lt/images/pix/vyras-81892715.jpg";
  photo.alt = `${user.name} photo`;
  userName.textContent = user.username;
  email.textContent = user.email;
  street.textContent = user.address.street;

  // pakeisti street spalva i zalia
  // pakeisti email spalva i pilka
  street.style.color = "green";
  email.style.color = "grey";

  const card = document.createElement("div");
  card.className = "card";
  card.append(photo, userName, email, street);

  document.querySelector(".cards").append(card);
};

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((resp) => resp.json())
  .then((response) => {
    renderUserCard(response);
  })
  .catch((error) => {
    console.error(error, ": Failed to load user");
  });
