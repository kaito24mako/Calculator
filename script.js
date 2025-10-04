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

// Variables for the three parts of an operation 
let a = 0;
let b = 0;
let operator = "";

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
    return result;
}
console.log(operate(1, 3, "add"));

// Display shows the number that the user pressed on
const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll("button.number");
const operatorKeys = document.querySelectorAll("button.operator");
const displayOutput = document.querySelector("#display");
let array = [];

function keyClick(event) {
    if (event.target.classList.contains("number")) {
        displayOutput.textContent = event.target.textContent;
        let userNumber = displayOutput.textContent;
        array.push(userNumber);
        console.log(array);
        return userNumber;
    } else if (event.target.classList.contains("operator")) {
        let userOperator = event.target.textContent;
        console.log(userOperator);
        return userOperator;
    }
}

keys.forEach(key => {
    key.addEventListener("click", keyClick);
})

// Calculator logic 


