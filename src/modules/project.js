import TaskConstructor from "./storage"
import formCreator from "./form";
function projectAppend(){


let projectAdd = document.querySelector(".addProject");

projectAdd.addEventListener("click", function(){

    //Create a new form once button is clicked
    formCreator(projectAdd)
    
    // Button to add new projects

    let addButton = document.querySelector(".formAddButton");
addButton.addEventListener("click", function(){
    let newProject = document.createElement("li");
    newProject.className = "newProject"
    newProject.innerText = document.querySelector(".formInput").value;
    let list = document.querySelector(".projects");
    list.appendChild(newProject)
    form.remove();

    newProject.addEventListener("click", function (){
        new TaskConstructor(newProject.innerText)
        document.querySelector(".task").style = "display:flex;"
    })



})
})
}
export default projectAppend