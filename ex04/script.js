const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let totalTasks = 0;


function updateCounter() {
    counter.textContent = "Total tasks: " + totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = taskText;
    deleteBtn.textContent = "Delete";

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        totalTasks--;
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    totalTasks++;
    updateCounter();

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});