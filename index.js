function addTask() {
    const taskInput = document.getElementById('taskInput')
    
    const taskValue = taskInput.value;


    if (taskValue === '') {
        alert('Please enter  task');
        return;
    }
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="remove" onclick="removeTask(this)">Remove</button>
        <button onclick="Comp(this)">Complete</button>
        <button class="edit" onclick="edit(this)">Edit</button>
    `
    taskList.appendChild(li);
    taskInput.value = '';
}
function removeTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}
function Comp(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}
function edit(button) {
    const li = button.parentElement;
    console.log(button.parentElement)
    const span = li.querySelector('span');
    const currentText = span.textContent;
    const newTaskText = prompt('Edit task', currentText);
    span.textContent = newTaskText;     
}


//*

// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskValue = taskInput.value.trim(); 
//     if (taskValue) {
//       const listItem = document.createElement('li')
//       const textNode = document.createTextNode(taskValue);
//       listItem.appendChild(textNode);
//       const taskList = document.getElementById('taskList');
//       taskList.appendChild(listItem);
//       taskInput.value = '';
//     } else {
      
//       alert('Please enter a task!');
//     }
//   }
//   document.getElementById('taskInput').addEventListener('keypress', function (e) {
//     if (listItem.value === 'Enter') {
//       addTask();
//     }
//   });
  