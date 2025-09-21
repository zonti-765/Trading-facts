// Елементи

let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');


// Додавання завдання до списку
function addTaskToDOM(task) {
    let li = document.createElement('li');
    //Метод document.createElement() створює новий HTML-елемент

    li.innerHTML = task;

    taskList.appendChild(li);
    //Метод appendChild додає елемент (який ми створили) 
    // до іншого елемента як "дитину" - до наших UL
}

// Додавання завдання
addTaskBtn.onclick = function () {
    let task = taskInput.value;

    // Збереження у Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
//JSON.parse() — перетворює JSON-рядок в масив для використання.
    
    tasks.push(task);
    // Метод push дописує нове завдання task до кінця списку завдань tasks.
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Додавання до списку
    addTaskToDOM(task);
    taskInput.value = '';
};


// Завантаження завдань при завантаженні сторінки
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
    }
}; 
function deleteonclick () {
    localStorage.clear();
    alert("delete storage")
}