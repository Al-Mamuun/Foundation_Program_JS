let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// let addBtnAlt = document.querySelector("button");
// let addBtnAlt = document.querySelector("#addBtn");
// console.log(addBtnAlt);

// addBtn.addEventListener("click",function(){
//     console.log("Clicked");
// });

addBtn.addEventListener("click",() => {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskInput.value;
  //let btnwrapper = document.createElement("div");
  let btnwrapper = document.createElement("span");
  
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";

  btnwrapper.appendChild(completeBtn);
  btnwrapper.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnwrapper);

  taskList.appendChild(li);
  taskInput.value == " ";
});

// taskInput.addEventListener("keypress",(event) => {
//   if (event.key === "Enter"){
//     console.log("Mamun",taskInput.value);
//   }
// });

// let li = document.createElement("li");
// li.textContent = "Mamun";
// taskList.appendChild(li);

