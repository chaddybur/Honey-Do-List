function formCreator(newButtonforForm){
        //Create a form
    let form = document.createElement("form");
            form.className = "newForm"
            let task = newButtonforForm;
            task.appendChild(form)  
        
            //Adding div to make formatting easier
            let box = document.createElement("div");
            box.className = "box"
            form.appendChild(box);
            // Input area for name of new project 
        
            let input = document.createElement("input");
            input.className = ("formInput")
            box.appendChild(input);

        
            // submit button (Avoided regular button so it doesn't refresh page)
        
            let button = document.createElement("div");
            button.innerText = "Add"
            button.className = "formAddButton"
            box.appendChild(button);
        
            // Cancel button 
        
            let cancel = document.createElement("div");
            cancel.className = "formCancelButton"
            cancel.innerText = "Cancel"
            box.appendChild(cancel)
            
    
            let cancelButton = document.querySelector(".formCancelButton")
            cancelButton.addEventListener("click", function(){
                
                form.remove();
                
            })
        };

export default formCreator;