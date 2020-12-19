let displayAmount = document.querySelector(".val-input");
let numberClicked;
let previousOperator;
let runningTotal;

document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    switch (true) {
      case event.target.classList.contains("val-input"):
        numberClicked = displayAmount.value;
        runningTotal = displayAmount.value;
        break;
      case event.target.classList.contains("clear"):
        displayAmount.value = 0;
        numberClicked = "";
        previousOperator = "";
        runningTotal = "";
        break;
      case event.target.classList.contains("number"):
        numberClicked = event.target.innerText;
        if (previousOperator !== "") {
          displayAmount.value = numberClicked;
          switch (previousOperator) {
            case "+":
              runningTotal = add(runningTotal, numberClicked);
              break;
            case "−":
              runningTotal = subtract(runningTotal, numberClicked);
              break;
            case "×":
              runningTotal = multiply(runningTotal, numberClicked);
              break;
            case "÷":
              runningTotal = divide(runningTotal, numberClicked);
              break;
          }
          previousOperator = "";
        } else {
          if (displayAmount.value === "0") {
            displayAmount.value = numberClicked;
          } else {
            displayAmount.value = displayAmount.value + numberClicked;
          }
          runningTotal = displayAmount.value;
        }
        break;
      case event.target.classList.contains("erase"):
        displayAmount.value = displayAmount.value.substring(
          0,
          displayAmount.value.length - 1
        );
        numberClicked = "";
        runningTotal = displayAmount.value;
        break;
      case event.target.classList.contains("operator"):
        if (displayAmount.value !== "") {
          if (numberClicked == "") {
            numberClicked = displayAmount.value;
            runningTotal = displayAmount.value;
          }
        }
        numberClicked = "";
        previousOperator = event.target.innerText;
        displayAmount.value = runningTotal;
        break;
    }
  });

function handleNumber(value) {
  if (displayAmount.value === "0") {
    displayAmount.value = numberClicked;
  } else {
    displayAmount.value += numberClicked;
  }
  runningTotal = displayAmount.value;
}

function handleOperator(value) {
  if (displayAmount.value !== "") {
    if (numberClicked == "") {
      numberClicked = displayAmount.value;
      runningTotal = displayAmount.value;
    }
  }
  numberClicked = "";
  previousOperator = event.target.innerText;
  displayAmount.value = runningTotal;
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}
