// Variables
let a = 0;
let b = 0;
let operator = "";

const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll("button.number");
const operatorKeys = document.querySelectorAll("button.operator");
const displayOutput = document.querySelector("#display");
let array = [];
let currentNumber = "";

// Operator functions
const getAdd = function(a, b) {
    return a + b;
}
const getSubtract = function(a, b) {
    return a - b;
}
const getMultiply = function(a, b) {
    return a * b;
}
const getDivide = function(a, b) {
    return a / b;
}

// Operates on the given numbers 
const operate = function(a, b, operator) {
    let result = 0;
    switch(operator) {
        case "add":
            result = getAdd(a, b);
            break;
        case "subtract":
            result = getSubtract(a, b);
            break;
        case "multiply":
            result = getMultiply(a, b);
            break;
        case "divide":
            result = getDivide(a, b);
    }
    displayOutput.textContent = result;
    return result;
}

// Display shows the number that the user pressed on
function keyClick(event) {
    if (event.target.classList.contains("number")) {
        currentNumber += event.target.textContent;
        displayOutput.textContent = currentNumber;
        
    } else if (event.target.classList.contains("operator")) {
        if (operator !== "" && currentNumber !== "") {
            b = Number(currentNumber);
            a = operate(a, b, operator);
            displayOutput.textContent = a;
        } else {
            a = Number(currentNumber);
        }
        operator = event.target.id;
        currentNumber = "";

    } else if (event.target.classList.contains("equal")) {
        if (operator !== "" && currentNumber !== "") {
            b = Number(currentNumber);
            a = operate(a, b, operator);
            operator = "";  // reset operator after equals
        }
    }
}

keys.forEach(key => {
    key.addEventListener("click", keyClick);
})




