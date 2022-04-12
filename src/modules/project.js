import eventListeners from "../modules/todolist"

function projectAppend(){


let projectAdd = document.querySelector(".add");

projectAdd.addEventListener("click", function(){
    let form = document.createElement("form");
    let projects = document.querySelector(".projects")
    projects.appendChild(form)
    let input = document.createElement("input");
    input.className = ("newInput")
    form.appendChild(input);
    let box = document.createElement("div");
    box.className = "box"
    form.appendChild(box);
    let button = document.createElement("div");
    button.innerText = "Add"
    button.className = "button"
    button.id = "addButton"
    box.appendChild(button);
    let cancel = document.createElement("div");
    cancel.className = "button"
    cancel.id = "cancelButton"
    cancel.innerText = "Cancel"
    box.appendChild(cancel)
    

    let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", function(){
    let newProject = document.createElement("li");
    newProject.innerText = document.querySelector(".newInput").value;
    let list = document.querySelector(".projectLists");
    list.appendChild(newProject)
    form.remove();

})
})
}
export default projectAppend