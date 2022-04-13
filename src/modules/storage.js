import addTask from "./task.js"
class TaskConstructor{

    constructor(name){
        this.name = name;
        let newName = document.querySelector(".name");
        newName.innerText = name;

        
    }
}









export default TaskConstructor;