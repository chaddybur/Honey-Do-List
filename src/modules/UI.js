import Project from "./project";
import Task from "./task";
import Storage from "./storage";
import { add, parseJSON, compareAsc,toDate, format } from "date-fns";

export default function UI(){
    

     let addProject = document.querySelector(".addProject");
     let taskNew = document.querySelector(".task")
     
taskNew.addEventListener("click", function(){
        let form = document.createElement("div")
        form.className = "form"
        let taskList = document.querySelector(".taskList")
        taskList.appendChild(form)
        let input = document.createElement("input")
        input.className = "input"
        form.appendChild(input);
        let addBtn = document.createElement("button")
        addBtn.type = "button"
        addBtn.innerText = "Add Project"
        addBtn.className = "addButton"
        let cancelBtn = document.createElement("button")
        cancelBtn.type = "button"
        cancelBtn.innerText = "Cancel"
        cancelBtn.className = "cancelButton"
        form.appendChild(addBtn)
        form.appendChild(cancelBtn)
    
    cancelBtn.addEventListener("click", function(){
        form.remove()
    })

    addBtn.addEventListener("click", function(){
        let newTaskName = input.value;
        let newListTask = document.createElement("li");
        newListTask.innerText = newTaskName;
        let newTaskObj = new Task(newTaskName)
        console.log(newTaskObj)
        let objName = document.querySelector(".listName").innerText
        console.log(objName)
        let stored = JSON.parse(localStorage.getItem(objName))
        console.log(stored)
        stored.task.push(newTaskObj)
        Storage.setProject(objName, JSON.stringify(stored))
        form.remove()
     
        for(let i=0; i < stored.task.length; i++){
            let box = document.createElement("div")
            let taskName = stored.task[i].name
           let listPlace = document.createElement("li")
            listPlace.innerText = taskName
            let placeholder = document.querySelector(".taskList")
            placeholder.appendChild(box)
            box.appendChild(listPlace)
            let dateHolder = stored.task[i].dueDate
            let datePlace = document.createElement("span")
            datePlace.className = "date"
            datePlace.innerText = dateHolder
            listPlace.appendChild(datePlace)
        }
      let dateBtn = document.querySelector(".date")
      dateBtn.addEventListener("click", function(){
          dateBtn.innerHTML =`<input type=date value= ${toDate}>`
      })
    })
})
     

    addProject.addEventListener("click", function(){
        let form = document.createElement("div")
        form.className = "form"
        let projectList = document.querySelector(".projectLists")
        projectList.appendChild(form)
        let input = document.createElement("input")
        input.className = "input"
        form.appendChild(input);
        let addBtn = document.createElement("button")
        addBtn.type = "button"
        addBtn.innerText = "Add Project"
        addBtn.className = "addButton"
        let cancelBtn = document.createElement("button")
        cancelBtn.type = "button"
        cancelBtn.innerText = "Cancel"
        cancelBtn.className = "cancelButton"
        form.appendChild(addBtn)
        form.appendChild(cancelBtn)


       // clickable cancel button
    cancelBtn.addEventListener("click", function(){
        form.remove()

    })
        // add button


       
    addBtn.addEventListener("click", function(){
        
        let newProj = new Project(input.value)
        
        Storage.setProject(newProj.name, JSON.stringify(newProj))
            form.remove()
        let newListItem = document.createElement("li")
        newListItem.innerText = input.value
        projectList.appendChild(newListItem)

        newListItem.addEventListener("click", function(){
           let storedObj = localStorage.getItem(newListItem.innerText)
           let parsedObj = JSON.parse(storedObj)
           let listName = document.querySelector(".listName")
           listName.innerText = parsedObj.name
         

            for(let i=0; i < parsedObj.task; i++){
                let taskName = parsedObj.task[i]
               let listPlace = document.createElement("li")
                listPlace.innerText = taskName
                let placeholder = document.querySelector(".taskList")
                placeholder.appendChild(listPlace)
            }
        })

            
    })
    
        
    })
  
}