let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let task = [];
let taskIdCounter = 1;

function render(){
    taskList.innerHTML = "";
    
    task.forEach((task) => {
        let li = document.createElement("li");
        li.classList.add("task-item");

        let span = document.createElement("span");
        span.classList.add("task-text");
        span.textContent = `Task: ${task.text}  Completed: ${task.completed}`;;

        let btnwrapper = document.createElement("div");
        btnwrapper.classList.add("task-buttons");

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";
        completeBtn.addEventListener("click", () => {    
            completeTask(task.id);
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        btnwrapper.appendChild(completeBtn);
        btnwrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnwrapper);

        taskList.appendChild(li);

    });
};

function addTask(){
    let taskText = taskInput.value.trim();

    if(taskText == ""){
        return;
    }

    let newTask = {
        id: taskIdCounter++,
        text: taskText,
        completed: false
    };

    task.push(newTask);
    taskInput.value = "";
    render();
}

addBtn.addEventListener("click", addTask);

console.log(task);

function completeTask(id) {

    let selectedTask = task.find((task) => task.id == id);

    selectedTask.completed = !selectedTask.completed;

    render();
}

function deleteTask(id) {
    task = task.filter((task) => task.id != id);
    render();
}