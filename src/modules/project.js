class Todo{
    constructor(name){
        this.name = name
        document.querySelector(".name").innerText = this.name
    }
}
let inbox = document.querySelector(".inbox")

Todo(inbox.innerText)

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }