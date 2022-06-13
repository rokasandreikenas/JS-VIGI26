const renderTodo = (todo) => {
  const { completed, title } = todo;

  const todoEl = document.createElement("div");
  const todoTitle = document.createElement("p");
  const todoStatus = document.createElement("span");

  todoEl.className = "todo";
  todoTitle.className = "todo-title";
  todoStatus.className = completed ? "todo-status done" : "todo-status";

  todoTitle.textContent = title;

  todoEl.append(todoTitle, todoStatus);
  document.querySelector(".todo-container").prepend(todoEl);
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((response) => {
    const todos = response.slice(0, 10);

    todos.forEach((todo) => renderTodo(todo));
  })
  .catch((error) => {
    console.error(error);
  });
