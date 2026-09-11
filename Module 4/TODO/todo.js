let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let task = [];
let taskIdCounter = 1;

function redner(){
    taskList.innerHTML = "";
    task.forEach((task) => {
        let li = document.createElement("li");
        li.classList.add("task-item");

        let span = document.createElement("span");
        span.classList.add("task-text");
        span.textContent = task.text;

        let btnwrapper = document.createElement("div");
        btnwrapper.classList.add("task-button");

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

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
    redner();
}

addBtn.addEventListener("click", addTask);