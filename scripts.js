const display = 123445;
const prevNum = document.getElementById("prevNum");
const curNum = document.getElementById("curNum");
let currentNumber = "";
let operatorvalue;

function updateDisplay(num) {
  currentNumber += num;
  curNum.textContent = currentNumber;
}

const clearDisplay = function () {
  prevNum.textContent = "";
  curNum.textContent = 0;
  currentNumber = "";
};
const clearCur = function () {
  curNum.textContent = 0;
  currentNumber = "";
};

//
///calculate function but only with add for now function

const setOperator = function (operatorValue) {
  prevNum.textContent = curNum.textContent;
  clearCur();
  operatorvalue = operatorValue;
};

const equals = function () {
  let num1 = parseFloat(prevNum.textContent);
  let num2 = parseFloat(curNum.textContent);
  prevNum.textContent = "";

  switch (operatorvalue) {
    case "+":
      curNum.textContent = add(num1, num2);
      break;
    case "-":
      curNum.textContent = substract(num1, num2);
      break;
    case "*":
      curNum.textContent = multiply(num1, num2);
    case "/":
      curNum.textContent = divide(num1, num2);
      break;
    default:
      console.log("error");
  }
};

// operators

const add = function (num1, num2) {
  return num1 + num2;
};

const substract = function (num1, num2) {
  return num1 - num2;
};
const multiply = function (num1, num2) {
  return num1 * num2;
};
const divide = function (num1, num2) {
  return num1 / num2;
};

// consts for buttongroups

const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numberButton");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

// tie eventlisteners to buttons

clearButton.addEventListener("click", () => {
  clearDisplay();
});

equalsButton.addEventListener("click", () => {
  equals();
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    let operatorVal = button.innerHTML;
    setOperator(operatorVal);
    // calculate(calculate(prevNum, curNum));
    //   calculator.chooseOperation(button.innerText)
    //   calculator.updateDisplay()
  });
});

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    updateDisplay(button.innerHTML);
    //   calculator.chooseOperation(button.innerText)
    //   calculator.updateDisplay()
  });
});
