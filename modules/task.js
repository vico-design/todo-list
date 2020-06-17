const { checkHandler } = require("./list");

class Task {
    constructor(text, completed){
        this.completed = completed;
        this.text = text;

        this.element = document.createElement("li");
        this.input = document.createElement("input");
        this.label = document.createElement("label");
        this.a = document.createElement("a");

        this.input.type = "checkbox";
        this.input.className = "checkbox";
        this.input.onclick = this.onCheck;
        this.input.setAttribute("checked", this.completed);
        
        const labelText = document.createTextNode(this.text);
        this.label.appendChild(labelText);
        if (this.completed){
            this.label.className = "completed";
        }
        
        const trashIcon = document.createTextNode("🗑");
        this.a.className = "trashButton";
        this.a.setAttribute("href", "#");
        this.a.onclick = this.onDelete; 
        this.a.appendChild(trashIcon);

        this.element.appendChild(this.input);
        this.element.appendChild(this.label);
        this.element.appendChild(this.a);
    }
    onCheck(params) {
        this.label.className = "completed";
        this.input.onclick = this.onUnCheck;
        this.completed = true;
        
    }
    onDelete() {
        console.log("delete");
    }
    onUnCheck() {
        this.label.classList.remove("completed");
        this.input.onclick = this.onCheck; 
        this.completed = false;
    }
    
}
const task1 = new Task ("Finish ToDo App", true);

const task2 = new Task ("Drink 3 liter of water", false);
const task3 = new Task ("Learn more German");
const task4 = new Task ("Do excercise");