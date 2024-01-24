function addTodo() {
    const newTaskInput = document.getElementById('newTask');
    const todoList = document.getElementById('todoList');

    if (newTaskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.className = 'todo-item';
      newTask.innerHTML = `
        <span class="value">${newTaskInput.value}</span>
        <input class="check" type="checkbox">
      `;
      todoList.appendChild(newTask);
      newTask.addEventListener("click",(e)=>{
        if(e.target.className==="value"){
          newTask.remove();
        }
        else{
          return;
        }
        
      })
      newTaskInput.value = '';
    }
  }

  