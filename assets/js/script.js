
var saveButton = document.querySelector("#save-btn");
var saveButton2 = document.querySelector("#save-btn2");
var saveButton3 = document.querySelector("#save-btn3");
var saveButton4 = document.querySelector("#save-btn4");
var saveButton5 = document.querySelector("#save-btn5");
var saveButton6 = document.querySelector("#save-btn6");
var saveButton7 = document.querySelector("#save-btn7");
var saveButton8 = document.querySelector("#save-btn8");
var saveButton9 = document.querySelector("#save-btn9");

var userInput = document.querySelector("#input");
var userInput2 = document.querySelector("#input2")
var userInput3 = document.querySelector("#input3")
var userInput4 = document.querySelector("#input4")
var userInput5 = document.querySelector("#input5")
var userInput6 = document.querySelector("#input6")
var userInput7 = document.querySelector("#input7")
var userInput8 = document.querySelector("#input8")
var userInput9 = document.querySelector("#input9")

renderLastRegistered();

function displayMessage(type, message) {
  userInput.textContent = message;
  userInput.setAttribute("class", type);
}

function renderLastRegistered() {
  var input = localStorage.getItem("input");
  var input2 = localStorage.getItem("input2");
  var input3 = localStorage.getItem("input3");
  var input4 = localStorage.getItem("input4");
  var input5 = localStorage.getItem("input5");
  var input6 = localStorage.getItem("input6");
  var input7 = localStorage.getItem("input7");
  var input8 = localStorage.getItem("input8");
  var input9 = localStorage.getItem("input9");

  userInput.textContent = input;
  userInput2.textContent = input2;
  userInput3.textContent = input3;
  userInput4.textContent = input4;
  userInput5.textContent = input5;
  userInput6.textContent = input6;
  userInput7.textContent = input7;
  userInput8.textContent = input8;
  userInput9.textContent = input9;
}

saveButton.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input = userInput.value;

    localStorage.setItem("input", input);

    renderLastRegistered();
  }
);

saveButton2.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input2 = userInput2.value;

    localStorage.setItem("input2", input2);

    renderLastRegistered();
  }
);

saveButton3.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input3 = userInput3.value;

    localStorage.setItem("input3", input3);

    renderLastRegistered();
  }
);

saveButton4.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input4 = userInput4.value;

    localStorage.setItem("input4", input4);

    renderLastRegistered();
  }
);

saveButton5.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input5 = userInput5.value;

    localStorage.setItem("input5", input5);

    renderLastRegistered();
  }
);

saveButton6.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input6 = userInput6.value;

    localStorage.setItem("input6", input6);

    renderLastRegistered();
  }
);

saveButton7.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input7 = userInput7.value;

    localStorage.setItem("input7", input7);

    renderLastRegistered();
  }
);

saveButton8.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input8 = userInput8.value;

    localStorage.setItem("input8", input8);

    renderLastRegistered();
  }
);

saveButton9.addEventListener("click", function(event) {
  console.log("click");
  event.preventDefault();

  var input9 = userInput9.value;

    localStorage.setItem("input9", input9);

    renderLastRegistered();
  }
);

var currentHour = dayjs();

function updateTime() {
    var currentDay = dayjs().format('MMM DD, YYYY');
    var currentTime = dayjs().format("hh:mm:ss");
    $("#currentDay").text(currentDay + " at " + currentTime);
}

setInterval(updateTime, 1);


var timeBlocks = document.querySelectorAll(".time-block");
console.log(timeBlocks);

timeBlock = document.getElementById("hour-9");
timeBlock.setAttribute("data-hour", "9");

//9AM

var timeBlock = $("#time-block");
timeBlock.data("hour", 9);

//10AM

timeBlock = document.getElementById("hour-10");
timeBlock.setAttribute("data-hour", "10");

var timeBlock = $("#time-block");
timeBlock.data("hour", 10);

//11AM

timeBlock = document.getElementById("hour-11");
timeBlock.setAttribute("data-hour", "11");

var timeBlock = $("#time-block");
timeBlock.data("hour", 11);

//12PM

timeBlock = document.getElementById("hour-12");
timeBlock.setAttribute("data-hour", "12");

var timeBlock = $("#time-block");
timeBlock.data("hour", 12);

//1PM

timeBlock = document.getElementById("hour-13");
timeBlock.setAttribute("data-hour", "13");

var timeBlock = $("#time-block");
timeBlock.data("hour", 13);

//2PM

timeBlock = document.getElementById("hour-14");
timeBlock.setAttribute("data-hour", "14");

var timeBlock = $("#time-block");
timeBlock.data("hour", 14);

//3PM

timeBlock = document.getElementById("hour-15");
timeBlock.setAttribute("data-hour", "15");

var timeBlock = $("#time-block");
timeBlock.data("hour", 15);

//4PM

timeBlock = document.getElementById("hour-15");
timeBlock.setAttribute("data-hour", "15");

var timeBlock = $("#time-block");
timeBlock.data("hour", 15);

//5PM

timeBlock = document.getElementById("hour-16");
timeBlock.setAttribute("data-hour", "16");

var timeBlock = $("#time-block");
timeBlock.data("hour", 16);


var currentHour = dayjs().hour();

timeBlocks.forEach((timeBlock) => {
  var hour = parseInt(timeBlock.getAttribute("data-hour"));
  console.log(hour);

  if (hour < currentHour) {
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
});