
const display = 123445;
let valueOnDisplay;

function updateDisplay(val){
    if(val == ''){
        
    }
    valueOnDisplay = val;
    document.getElementById('onDisplay').append(val) ;
}

function empty(element) {
    while(document.getElementById('onDisplay').firstElementChild) {
       element.firstElementChild.remove();
    }
  }


const clearDisplay = function (){
    val = '';
    updateDisplay(val);
}

// operators

const add = function (num1, num2) {
    return num1 + num2;
}

const substract = function(num1, num2){
    return num1 - num2;
}
const multiply = function(num1, num2){
    return num1 * num2;
}
const divide = function(num1, num2){
    return num1 * num2;
}

const operate  = function(func ,num1, num2){
    return func(num1, num2)
}


console.log(operate(add,1,2));

// consts for buttongroups

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.numberButton');
const clearButton = document.querySelector('#clear')
console.log(operators);

// tie eventlisteners to buttons


clearButton.addEventListener('click', () => {
    clearDisplay();
})

operators.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML)
    //   calculator.chooseOperation(button.innerText)
    //   calculator.updateDisplay()
    })
  })

numbers.forEach(button => {
    button.addEventListener('click', () => {

        updateDisplay(button.innerHTML);
    //   calculator.chooseOperation(button.innerText)
    //   calculator.updateDisplay()
    })
  })

