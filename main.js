const wrapper = document.querySelector("wrapper");
const appNameContainer = document.querySelector(".app-name-container");
const inputContainer = document.querySelector(".input-container");
const yetTodoRenderContainer = document.querySelector(
  ".yet-todo-render-container"
);
const doneTodoRenderContainer = document.querySelector(
  ".done-todo-render-container"
);
const input = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");

const todoArray = [];
let todoId = 0;

const currentTimeMaker = () => {
  const createdAt =
    String(new Date().getFullYear()) +
    "." +
    String(new Date().getDay()).padStart(2, "0") +
    "." +
    String(new Date().getDate()).padStart(2, "0") +
    "/" +
    String(new Date().getHours()).padStart(2, "0") +
    ":" +
    String(new Date().getMinutes()).padStart(2, "0");
  return createdAt;
};

inputButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue) {
    let isDone = false;
    todoId++;
    const createdAt = currentTimeMaker();
    const yetTodoObject = {
      todoId,
      inputValue,
      isDone,
      createdAt,
    };

    todoArray.push(yetTodoObject);
  }
  renderTodo(todoArray);
  // 모든 과정 처리 후 인풋 창 다시 빈 값으로
  input.value = "";
});

const renderTodo = (todoArray) => {
  // 기존 값이 존재하면 지워 준다
  while (yetTodoRenderContainer.firstChild) {
    yetTodoRenderContainer.removeChild(yetTodoRenderContainer.firstChild);
  }

  while (doneTodoRenderContainer.firstChild) {
    doneTodoRenderContainer.removeChild(doneTodoRenderContainer);
  }

  todoArray.map((todoObject) => {
    if (!todoObject.isDone) {
      const contentsBox = document.createElement("div");
      const contents = document.createElement("div");
      const deleteButton = document.createElement("button");
      const doneButton = document.createElement("button");

      deleteButton.innerHTML = "삭제";
      doneButton.innerHTML = "완료";
      contents.innerHTML = todoObject.inputValue;

      contentsBox.append(contents, doneButton, deleteButton);
      yetTodoRenderContainer.append(contentsBox);
    } else {
    }
  });
};
