import { progressBar } from "./progressBar.js";
import { Item } from "./task.js";


const task1 = new Item ("Finish ToDo App", true);
const task2 = new Item ("Drink 3 liter of water", false);
const task3 = new Item ("Learn more German", false);
const task4 = new Item ("Do excercise", false);

class List{
  items = [];

  addItem(...itemsToAdd){
    // items = [task1, task2, task3]
    this.items.push(...itemsToAdd);
    // push(task1, task2, task3)
  };

  deleteItem(itemToDelete){
    for(let i=0; i<this.items.length; i++){
      if(this.items[i]=== itemToDelete){
        this.items.splice(i,1);
      };
    };
  };

  deleteList(){
    this.items = [];
  };
};

const list1 = new List();
list1.addItem(task1, task2, task3,);
const list2 = new List();
list2.addItem(jamon, queso, huevo);
list2.deleteItem(jamon);



// const onDeleteItem = (e) => {
//   e.preventDefault();
//   const li = e.target.parentElement;
//   li.remove();
//   progressBar.removeOneMax();
//   const checkbox = li.querySelector(".checkbox");
//   if (checkbox.checked) {
//     progressBar.removeOneValue();
//   }






const buttonAdd = document.getElementById("add");
buttonAdd.onclick = addTask;

};
// function addTask() {
  //   } else {
    //     const li = document.createElement("li");

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.className = "checkbox";
//     checkbox.onclick = checkHandler;

//     const labelText = document.createTextNode(inputValue);
//     const label = document.createElement("label");
//     label.appendChild(labelText);

//     const trashLink = document.createElement("a");
//     const trashIcon = document.createTextNode("🗑");
//     trashLink.className = "trashButton";
//     trashLink.setAttribute("href", "#");
//     trashLink.onclick = onDeleteItem;
//     trashLink.appendChild(trashIcon);

//     li.appendChild(checkbox);
//     li.appendChild(label);
//     li.appendChild(trashLink);

//     document.getElementById("list").appendChild(li);
//     progressBar.addOneMax();

//     document.getElementById("text").value = "";
//     console.log(progressBar);
//   }
// }

/*
FUNCIONALIDAD:
1) cuando el usuario presione en el checkbox,
 para indicar que la tarea esta realizada,
  automaticamente esta debera marcarse como tachada y convertirse en color gris.
2)cuando el usuario deseleccione en el checkbox, automanitcamente la tarea debera volver con sus
 estilos originales (no gris, no tachado)
 */

function uncheckHandler(e) {
  const li = e.target.parentElement;
  const label = li.querySelector("label");
  label.classList.remove("completed");

  progressBar.removeOneValue();

  e.target.onclick = checkHandler;
}
function checkHandler(e) {
  const li = e.target.parentElement;
  const label = li.querySelector("label");
  label.className = "completed";

  progressBar.addOneValue();

  e.target.onclick = uncheckHandler;
}

const onDeleteList = (e) => {
  const liCollection = document.querySelectorAll("li");

  liCollection.forEach((li) => {
    li.remove();
  });
  progressBar.deleteList();
};


export { addTask, checkHandler, onDeleteList, onDeleteItem };
