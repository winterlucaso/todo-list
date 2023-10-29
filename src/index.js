// import initializeApplication from './application';
import { createTask } from './task';

// New Task button
const taskModal = document.getElementById('task-modal')
const addTaskBtn = document.getElementById('add-task-btn');
    addTaskBtn.addEventListener("click", (e) => {
        taskModal.showModal();
        // toDoList.addTask(createTask("do ur laundry", "today"));
    })

const taskContainer = document.getElementById("task-container");

const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskDate = document.getElementById("task-date");
const taskPriority = document.getElementById("task-priority");
const taskProjects = document.getElementById("task-projects");

const taskTitleError = document.getElementById("title-error");
const taskDescriptionError = document.getElementById("description-error");
const taskDateError = document.getElementById("date-error");
const taskPriorityError = document.getElementById("priority-error");
// const taskProjectsError = document.getElementById("projects-error");

form.addEventListener('submit', (e) => { // form submit EventListener
    if (!validateInputs()) {
        e.preventDefault();
        console.log("Prevented Default Submit");
    }
    else {
        e.preventDefault();
        let task = createTask(
            taskTitle.value, 
            taskDescription.value, 
            taskDate.value, 
            taskPriority.value,
            taskProjects.value
        );

        toDoList.addTask(task);
        addTaskToDOM(task);

        clearFormInputs();

        taskModal.close(); // Close modal
    };
});

cancelBtn.addEventListener('click', (e) => { // cancelBtn EventListener
    clearFormInputs();
    taskModal.close();
});

function validateInputs() { // Return false if there are errors
    let errorState = false;
    if (taskTitle.value === "") {
        taskTitleError.innerText = "*Please enter title";
        errorState = true;
    } else {
        taskTitleError.innerText = "";
    }

    if (taskDescription.value === "") {
        taskDescriptionError.innerText = "*Please enter description";
        errorState = true;
    } else {
        taskDescriptionError.innerText = "";
    }

    if (taskDate.value === "") {
        taskDateError.innerText = "*Please enter the date";
        errorState = true;
    } else {
        taskDateError.innerText = "";
    }

    if (taskPriority.value === "") {
        taskPriorityError.innerText = "*Please enter the priority";
        errorState = true;
    } else {
        taskPriorityError.innerText = "";
    }

    if (errorState) {
        console.log("Validating: false");
        return false;
    }
    console.log("Validating: true");
    return true;
}

function clearFormInputs() {
    console.log("Clearing Form Inputs");

    taskTitle.value = ""; 
    taskDescription.value = ""; 
    taskDate.value = "";
    taskPriority.value = "";

    taskTitleError.innerText = "";
    taskDescriptionError.innerText = "";
    taskDateError.innerText = "";
    taskPriorityError.innerText = "";
}

// Create array of ToDo Items
class ToDoList {
    constructor () {
        this.list = [];
    }

    addTask(newTask) {
        this.list.push(newTask);
        console.log("Adding '" + newTask.title + "' at index: " + (this.list.length - 1));
        console.log(this.list);
    }
    
    removeTask(index) {
        console.log("Removing Task...");
        this.list.splice(index, 1);
    }
}

function addTaskToDOM(task) {
    console.log("Adding task to DOM");

    const taskArticle = document.createElement('article');
    taskArticle.classList.add('task-article');
    taskContainer.appendChild(taskArticle);

    const articleTitle = document.createElement('h3');
    articleTitle.innerText = task.title;
    taskArticle.appendChild(articleTitle);

    const articleDescription = document.createElement('div');
    articleDescription.innerText = task.description;
    taskArticle.appendChild(articleDescription);

    const articleDate = document.createElement('div');
    articleDate.innerText = task.date;
    taskArticle.appendChild(articleDate);

    const articlePriority = document.createElement('div');
    articlePriority.innerText = task.priority;
    taskArticle.appendChild(articlePriority);

    const articleProjects = document.createElement('div');
    articleProjects.innerText = task.project;
    taskArticle.appendChild(articleProjects);
}

// class Project {
//     constructor () {
//         this.list = [];
//     }
    
//     updateFromToDoList() {
        
//     }

//     function toUpper(string) {
//         return string.toUpperCase();
//     }
//     const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
//     const upperCats = cats.map(toUpper);
// }

const toDoList = new ToDoList();

const sampleTask1 = createTask("Laundry", "do ur laundry", "today", "low", "on");
toDoList.addTask(sampleTask1);
addTaskToDOM(sampleTask1);


const sampleTask2 = createTask("Taxes", "pay ur taxes", "tomorrow", "high", "off");
toDoList.addTask(sampleTask2);
addTaskToDOM(sampleTask2);


// For specific categories, filter from the main array to fill the new category

// initializeApplication();