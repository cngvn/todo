const email = document.getElementsByClassName("email")[0]
const email1 = localStorage.getItem("email")
email.innerHTML = "" + email1
function addTask() {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
    const formattedTime = formatter.format(date);
    
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <span class="timestamp">${formattedTime}</span>
        <button class="remove" onclick="removeTask(this)">Remove</button>
        <button onclick="comp(this)">Complete</button>
        <button class="edit" onclick="edit(this)">Edit</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
}
function removeTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}
function comp(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}
function edit(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const currentText = span.textContent;
    const newTaskText = prompt('Edit task', currentText);
    if (newTaskText.trim() === '') {
        alert('Task cannot be empty');
        return;
    }
    span.textContent = newTaskText;
}





