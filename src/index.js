class Todo{
    constructor(name){
        this.name = name
        document.querySelector(".name").innerText = name
    }
}
let inbox = document.querySelector(".inbox")
let today = document.querySelector(".today")
let week = document.querySelector(".week")

inbox.addEventListener("click", function (){
    new Todo(inbox.innerText)
})

today.addEventListener("click", function (){
    new Todo(today.innerText)
})
week.addEventListener("click", function (){
    new Todo(week.innerText)
})


class AddTask{
    constructor(name){
        this.name = name
        document.createElement(".task").innerText = name
        
    }
}

new AddTask('task');