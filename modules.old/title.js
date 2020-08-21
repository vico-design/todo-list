/*  FUNCIONALIDAD BOTON EDIT 
1)el usuario hace click en "Edit"
2)"edit" display none se transforma en "save"
3)el h1 se elimina 
4)aparece un campo de texto vacío (el usuario ingresa un titulo nuevo)
5) cuando clickea en "save" el titulo nuevo se guarda como h1 y el boton vuelve a "edit"
*/

const buttonEdit = document.getElementById("edit");
const buttonSave = document.getElementById("save");
buttonEdit.onclick = onEdit;
buttonSave.onclick = onSave;

function onEdit() {
  buttonEdit.style.display = "none";
  buttonSave.style.display = "initial";
  document.getElementById("title").contentEditable = "true";
}

function onSave() {
  buttonSave.style.display = "none";
  buttonEdit.style.display = "initial";
  document.getElementById("title").contentEditable = "false";
}

export { onSave, onEdit };
