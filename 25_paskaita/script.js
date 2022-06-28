const renderTodo = (todo) => {
  const { id, completed, title } = todo;

  const todoEl = document.createElement("div");
  const todoTitle = document.createElement("p");
  const todoActions = document.createElement("div");
  const todoStatus = document.createElement("span");
  const deleteButton = document.createElement("button");

  todoEl.className = "todo";
  todoTitle.className = completed ? "todo-title done" : "todo-title";
  todoStatus.className = completed ? "todo-status done" : "todo-status";
  todoActions.className = "todo-actions";
  deleteButton.className = "todo-delete";

  todoTitle.textContent = title;
  deleteButton.textContent = "Delete";

  todoStatus.addEventListener("click", () => {
    todoStatus.classList.toggle("done");
    todoTitle.classList.toggle("done");
    todoStatus.completed = !todoStatus.completed;
  });

  deleteButton.addEventListener("click", () => {
    const params = {
      method: "DELETE",
    };

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, params)
      .then((resp) => resp.json())
      .then(() => {
        console.log("successfully deleted: ", todo);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  todoActions.append(todoStatus, deleteButton);
  todoEl.append(todoTitle, todoActions);
  document.querySelector(".todo-container").prepend(todoEl);
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((response) => {
    const todos = response.slice(0, 5);

    todos.forEach((todo) => renderTodo(todo));
  })
  .catch((error) => {
    console.error(error);
  });

const handleAddTodo = () => {
  const todoText = document.querySelector('input[name="todo-text"]');
  const newTodo = { title: todoText.value, completed: false };

  const params = {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/todos", params)
    .then((resp) => resp.json())
    .then((response) => {
      renderTodo(response);
      todoText.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
};

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", handleAddTodo);
