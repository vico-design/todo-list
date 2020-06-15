class ProgressBarClass {
  constructor(elementId) {
    this.value = 0;
    this.max = 0;
    this.progressElement = document.getElementById(elementId);
    this.updateList();
  }

  addOneValue = function () {
    this.value++;
    this.updateList();
  };
  removeOneValue = function () {
    this.value--;
    this.updateList();
  };
  addOneMax = function () {
    this.max++;
    this.updateList();
  };
  removeOneMax = function () {
    this.max--;
    this.updateList();
  };
  deleteList = function () {
    this.max = 0;
    this.value = 0;
    this.updateList();
  };

  updateList = () => {
    this.progressElement.setAttribute("max", this.max);
    this.progressElement.setAttribute("value", this.value);
  };
}

const progressBar = new ProgressBarClass("progress-bar");

export { progressBar };
