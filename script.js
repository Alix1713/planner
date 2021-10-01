
// var today = moment(); //header date
// $("#dayOne").text(today.format("MMM Do, YYYY"));
// console.log(moment());

// var currentTime = moment().format('h:mm') // Current Time
// $("#timeOne").text(currentTime)
// console.log(moment().format());

// //let updateTime = function () {
// // let currentTime = moment().format('h:mm')
// // $("#timeOne").text(currentTime)

// // Here we want to use setInterval to constantly update the time
// // To continuously call the functions, we will use setInterval
// setInterval(updateTime, 1000);
// setInterval(updateHour, 1000);
// setInterval(updateMinutes, 1000);
// setInterval(updateSeconds, 1000);
// ///why error

var messageBox = document.getElementById(""); //telling which text box msg
var saveButton = document.getElementById("saveButton"); //telling which savebtn

// Testing Task feedback to div
var task = document.getElementById("resultDiv9")

document.getElementById("resultDiv9").innerHTML = task.toString();
console.log("task");


// function textNine() { //function to save the text in the box
//     var nineMsg = { //new variable to hold message
//         messageBox: messageBox.value.trim() //text box msg
//     };

//     localStorage.setItem("saveButton", JSON.stringify(saveMessage)); //saving to the local storage

//     function renderText() { //showing the saved text on the page
//         var nineMsg = JSON.parse(localStorage.getItem("saved-comment"));
//         if (nineMsg !== null) {
//             document.getElementById("nineMsg").innerHTML = nineMsg.comment;
//         } else {
//             return;
//         }
//     }
//     saveButton.addEventListener("click", function (event) { //when you click this button it does these things
//         event.preventDefault();
//         textNine(); //when button is clicked it runs this function
//         rendertextNine(); //when button is clicked it runs this function
//     });

//     function init() {
//         renderText();
//     };
//     init();