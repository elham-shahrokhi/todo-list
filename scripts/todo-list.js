const todoList =[];
//here we use accumulator pattern to make an array to put todo list in there.
// and because we want to update the todo list every time that we click on add button, we should put the code on a function to reuse that every time.

renderTodoList();

function renderTodoList(){
let todoListHTML =  '';
for (let i=0; i< todoList.length; i++){
  const todo = todoList[i];

  // the below technique is 'generating the HTML': instead of writing all the HTML by hand up, we looped through any array and we generated the HTML.
  const html = `<p>${todo}</p>`
  todoListHTML +=html
  console.log(todoListHTML);
}
// so this will get that div element and put it inside our JavaScript.
document.querySelector('.js-todo-list').innerHTML = todoListHTML;}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  
// after adding the value to the array, we want to clear the input box and return to the default.
  inputElement.value = "";

  //console.log(document.querySelector('.js-todo-name').innerHTML);

  //at this state we want to show the name of todo in the webpage.
  // we can use loops (let us run some code over and over)

  //document.querySelector('.js-todo-name').innerHTML=todoList;
renderTodoList();
}
