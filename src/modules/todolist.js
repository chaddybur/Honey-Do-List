import TaskConstructor from "./storage"
function eventListeners(){

    let inbox = document.querySelector(".inbox")
    let today = document.querySelector(".today")
    let week = document.querySelector(".week")
    
    inbox.addEventListener("click", function (){
        new TaskConstructor(inbox.innerText)
        document.querySelector(".task").style = "display:flex;"
    })
    
    today.addEventListener("click", function (){
        new TaskConstructor(today.innerText)
        document.querySelector(".task").style = "display:none;"
    })
    week.addEventListener("click", function (){
        new TaskConstructor(week.innerText)
        document.querySelector(".task").style = "display: none;"
    })

    
    }


export default eventListeners