class Task{
    constructor(name, dueDate = "No due date"){
        this.name = name
        this.dueDate = dueDate
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setDueDate(dueDate){
        this.dueDate = dueDate
    }
    getDueDate(){
        return this.dueDate
    }

}

export default Task