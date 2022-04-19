import Project from "./project";
import Task from "./task";

export default Storage = {
    
   
    setProject(project, value){
        localStorage.setItem(project, value)
    },
   getProject(project){
        localStorage.getItem(project)
    }
    
    
}