var tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks === null) {
  tasks = { 9: [], 10: [], 11: [], 12: [], 1: [], 2: [], 3: [], 4: [], 5: [] }; //here
}
var currentDay = moment(); //header date
$("#currentDay").text(currentDay.format("MMMM Do YYYY, h:mm:ss a"));

let updateTime = function () {
  setInterval(function () {
    let currentTime = moment();
    $("#currentDay").text(currentTime.format("MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
};
updateTime();

var saveButton9 = document.getElementById("saveButton9"); //repeat here
var saveButton10 = document.getElementById("saveButton10");
var saveButton11 = document.getElementById("saveButton11");
var saveButton12 = document.getElementById("saveButton12");
var saveButton1 = document.getElementById("saveButton1");
var saveButton2 = document.getElementById("saveButton2");
var saveButton3 = document.getElementById("saveButton3");
var saveButton4 = document.getElementById("saveButton4");
var saveButton5 = document.getElementById("saveButton5");

function saveVal(event) {
  event.preventDefault();
  let input = event.target.id;
  let inputVal = document.querySelector("." + input).value;
  let matches = input.match(/\d+$/);
  let section = matches[0];
  tasks[section].push(inputVal);
  displayTasks();
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  for (const [key, value] of Object.entries(tasks)) {
    let displayString = "";
    value.forEach((e) => (displayString += e.toString() + ", "));
    displayString = displayString.slice(0, -2);
    document.getElementById(key).innerText = displayString;
  }
}
displayTasks();

saveButton9.addEventListener("click", saveVal); //repeat here
saveButton10.addEventListener("click", saveVal);
saveButton11.addEventListener("click", saveVal);
saveButton12.addEventListener("click", saveVal);
saveButton1.addEventListener("click", saveVal);
saveButton2.addEventListener("click", saveVal);
saveButton3.addEventListener("click", saveVal);
saveButton4.addEventListener("click", saveVal);
saveButton5.addEventListener("click", saveVal);
