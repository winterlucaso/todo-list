import initializeApplication from './application';
// import 

const toDoList = new ToDoList();

// Create array of ToDo Items
class ToDoList {
    constructor () {
        this.list = [];
    }

    addTask(newTask) {
        this.list.push(newTask);
        console.log("Adding '" + newTask.description + "' at index: " + (this.list.length - 1));
        console.log(this.list);
    }
    
    removeBookFromLibrary(num) {
        this.list.splice(num, 1);
    }
}

// Create Class/Factory Function to make objects to go in the ToDo Items array
const taskItemFactory = (description, date) => {
	const sayHello = () => console.log('hello!');
	return { description, date, sayHello };
};

const jeff = taskItemFactory("", "");


// For specific categories, map from the main array to fill the new category

initializeApplication();