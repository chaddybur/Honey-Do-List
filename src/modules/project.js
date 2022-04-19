//import { toDate, isToday, isThisWeek, subDays } from "date-fns";

class Project{

    constructor(projectName){
        this.name = projectName
        this.task = []
    }
   setName(Newname){
        this.name = Newname
    }
    getName(){
        return this.name
    }
    setTask(task){
        this.task.push(task)
    }
    getTask(){
        return this.task
    }

}
export default Project