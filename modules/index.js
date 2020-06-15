import { onEdit, onSave } from "./title.js";

window.onEdit = onEdit;
window.onSave = onSave;

import { addTask, checkHandler, onDeleteList, onDeleteItem } from "./list.js";
window.addTask = addTask;

import { progressBar } from "./progressBar.js";

const checkBoxes = document.querySelectorAll(".checkbox");

checkBoxes.forEach(function (checkbox) {
  checkbox.onclick = checkHandler;
  progressBar.addOneMax();

  if (checkbox.checked) {
    progressBar.addOneValue();
  }
});

const deleteButton = document.getElementById("delete");
deleteButton.onclick = onDeleteList;

const trashButtons = document.querySelectorAll(".trashButton");

const trashButtonsCallBack = (trashButton) => {
  trashButton.onclick = onDeleteItem;
};

trashButtons.forEach(trashButtonsCallBack);
