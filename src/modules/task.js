import ObjectStorage from "./UI";
import formCreator from "./form";

function addTask(){


    let taskAdd = document.querySelector(".task");
    
    taskAdd.addEventListener("click", function(){
        formCreator(taskAdd);
        console.log('This working?')
    })
    /*{
    
        
        // Button to add new tasks
    
        let taskButton = document.querySelector("#taskButton");
    taskButton.addEventListener("click", function(){
        let taskObj = new ObjectStorage(document.querySelector(".taskInput").value);
        let taskRow = document.createElement("ul");
        taskRow.id = "taskRow"
        let newTask = document.createElement("li");
        newTask.className = "taskObj"
        newTask.innerText = taskObj.name
        newTask.className = "anotherTask"
        let completeO = document.createElement("li")
        completeO.innerText = taskObj.complete;
        completeO.className = "completeO"
        let cancelX = document.createElement("li")
        cancelX.innerText = taskObj.cancel;
        cancelX.className = "cancelX"
        let list = document.querySelector(".taskBar");
        list.appendChild(taskRow)
        taskRow.append(completeO)
        taskRow.append(newTask)
        taskRow.append(cancelX)
        form.remove();
 
    })
    })
    }*/
}
export default addTask