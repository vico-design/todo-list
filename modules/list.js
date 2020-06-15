import { progressBar } from "./progressBar.js";

/*
FUNCIONALIDAD ADD NEW TASK 
1) Escribir en el "text" una nueva tarea 
2) Cuando se clickee el boton "add" agregar la tarea como un nuevo elemento <li> de la <ul>  
3) Cuando se ponga "check" en el checkbox se completa la tarea (el texto pase a color gris y se tache)

*/

const buttonAdd = document.getElementById("add");
buttonAdd.onclick = addTask;

function addTask() {
  const inputValue = document.getElementById("text").value;
  if (inputValue === "") {
    alert("Escribi algo culiau");
  } else {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onclick = checkHandler;

    const labelText = document.createTextNode(inputValue);
    const label = document.createElement("label");
    label.appendChild(labelText);

    const trashLink = document.createElement("a");
    const trashIcon = document.createTextNode("🗑");
    trashLink.className = "trashButton";
    trashLink.setAttribute("href", "#");
    trashLink.onclick = onDeleteItem;
    trashLink.appendChild(trashIcon);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(trashLink);

    document.getElementById("list").appendChild(li);
    progressBar.addOneMax();

    document.getElementById("text").value = "";
    console.log(progressBar);
  }
}

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

const onDeleteItem = (e) => {
  e.preventDefault();
  const li = e.target.parentElement;
  li.remove();
  progressBar.removeOneMax();
  const checkbox = li.querySelector(".checkbox");
  if (checkbox.checked) {
    progressBar.removeOneValue();
  }
};

export { addTask, checkHandler, onDeleteList, onDeleteItem };
