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
  curNum.textContent = '';
  currentNumber = "";
};

const deleteLast = function () {

  currentNumber = currentNumber.toString().slice(0, -1);
  curNum.textContent = currentNumber;
  
};
const clearCur = function () {
  curNum.textContent = '';
  currentNumber = "";
};

const setOperator = function (operatorValue) {
  prevNum.textContent = curNum.textContent + " " + operatorValue;
  clearCur();
  operatorvalue = operatorValue;
};

const equals = function () {
  
  let num1 = parseFloat(prevNum.textContent);
  let num2 = parseFloat(curNum.textContent);

  console.log(num1,num2)
  prevNum.textContent = "";

  if(isNaN(num1) || isNaN(num2)){
   console.log('Nans, wont operate') }
   else{
  
  switch (operatorvalue) {
    case "+":
      currentNumber =  add(num1, num2)
      curNum.textContent = currentNumber ;
     
      break;
    case "-":
      curNum.textContent = substract(num1, num2);
      break;
    case "*":
      curNum.textContent = multiply(num1, num2);
      break;
    case "/":

      curNum.textContent = divide(num1, num2);
      break;
    default:
      console.log("error");
  }
}

};

// operator functions
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
  if( num1 != 0 && num2 != 0){
  return num1 / num2;
  }else {
    prevNum.textContent = ''
    curNum.textContent = '';
    currentNumber = "";
  return '';
  }
};

// consts for buttons and buttongroups

const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numberButton");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#del");
const equalsButton = document.querySelector("#equals");

// eventlisteners to operators and numbers
clearButton.addEventListener("click", () => {
  clearDisplay();
});

equalsButton.addEventListener("click", () => {
  equals();
});
deleteButton.addEventListener("click", () => {
  deleteLast(curNum);
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    let operatorVal = button.innerHTML;
    setOperator(operatorVal);
  });
});

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    updateDisplay(button.innerHTML);
  });
});
