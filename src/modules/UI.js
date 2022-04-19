import Project from "./project";
import Task from "./task";
import Storage from "./storage";
import { add, parseJSON } from "date-fns";

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
           console.log(newListItem.innerText)
           console.log(parsedObj)

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