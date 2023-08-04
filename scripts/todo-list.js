// we should group the name and due date together.

const todoList =[{
  name: 'make dinner',
  dueDate: '2023-07-29'
  },
  {name: 'wash dishes',
  dueDate:'2023-07-29'}
  ];
//here we use accumulator pattern to make an array to put todo list in there.
// and because we want to update the todo list every time that we click on add button, we should put the code on a function to reuse that every time.

renderTodoList();

function renderTodoList(){
let todoListHTML =  '';
//arrow function
todoList.forEach((todoObject, index)=>{
    
    const {name, dueDate} = todoObject;
  
    // the below technique is 'generating the HTML': instead of writing all the HTML by hand up, we looped through any array and we generated the HTML.
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
    todoListHTML +=html

});

// so this will get that div element and put it inside our JavaScript.
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click', ()=>{
    todoList.splice(index, 1);
    renderTodoList();
  })
})

}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=> {
  addTodo();
})

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
  // name:name,
  // dueDate: dueDate
  //if the property and the variable name are the same, we can just type a comma and type it out once.
  name ,
  dueDate
  });
 
  
// after adding the value to the array, we want to clear the input box and return to the default.
  inputElement.value = "";

  //console.log(document.querySelector('.js-todo-name').innerHTML);

  //at this state we want to show the name of todo in the webpage.
  // we can use loops (let us run some code over and over)

  //document.querySelector('.js-todo-name').innerHTML=todoList;
renderTodoList();
}
