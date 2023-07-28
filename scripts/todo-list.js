const todoList =[];
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  
// after adding the value to the array, we want to clear the input box and return to the default.
  inputElement.value = "";
}
