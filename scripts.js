const display = 123445;
const prevNum = document.getElementById("prevNum");
const curNum = document.getElementById("curNum");
let currentNumber = "";

function updateDisplay(num) {
  currentNumber += num
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

const setOperator = function (curNum ) {
    prevNum.textContent = curNum.textContent;
    clearCur();
    console.log(prevNum.textContent);
}


const equals = function(){
    let num1 = parseFloat(prevNum.textContent);
    let num2 = parseFloat(curNum.textContent);
    console.log(num1 + num2);
    let answer = num1 + num2;
    prevNum.textContent = '';
    curNum.textContent = answer;

}





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
  return num1 * num2;
};

const operate = function (func, num1, num2) {
  return func(num1, num2);
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

equalsButton.addEventListener('click', () => {
    equals();
})



operators.forEach((button) => {
  button.addEventListener("click", () => {
    setOperator(curNum);
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
