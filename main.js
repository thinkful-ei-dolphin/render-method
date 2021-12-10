window.addEventListener("DOMContentLoaded", main);
const todoDb = [];  

///Event Listeners
// [What are we listening to?][addEventListner([Event],[What do we want to happen when this happens])]

function main() {
 let ul = document.querySelector(".todos");
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchterm = document.querySelector('#input');
    let formData = new FormData(event.target);
    let todo = Object.fromEntries(formData);
    todoDb.push(todo);
    console.log(todoDb);
   searchterm.value='';
   render();
  });

  function render(){
    //generate Template
    let template = generateTemplate();
    console.log(template);
    //render that template to the page
    ul.innerHTML = template.join('');
  }

  function generateTemplate(){
    return todoDb.map(item=>`<li> ${item.todo}</li>`);
  }

  document.querySelector('.sortbtn').addEventListener('click',sortItems);
  function sortItems(){
    todoDb.sort((a,b)=>{
      if(a.todo.toLowerCase()> b.todo.toLowerCase()){
        return -1
      } else if(a.todo.toLowerCase()< b.todo.toLowerCase()){
        return 1;
      }
      return 0;
    }
    );
    render();
  }


}
