// Variables
let a = 0;
let b = 0;
let operator = "";

const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll("button.number");
const operatorKeys = document.querySelectorAll("button.operator");
const displayOutput = document.querySelector("#display");
let array = [];

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
    a = result;
    return result;
}

// Display shows the number that the user pressed on
function keyClick(event) {
    if (event.target.classList.contains("number")) {
        displayOutput.textContent = event.target.textContent;
        let userNumber = Number(displayOutput.textContent);
        array.push(userNumber);
        a = array[0];
        b = array[1];
        console.log(array);
    } else if (event.target.classList.contains("operator")) {
        operator = event.target.id;
        console.log(operator);
    } else if (event.target.classList.contains("equal")) {
        console.log(operate(a, b, operator));
    }
}

keys.forEach(key => {
    key.addEventListener("click", keyClick);
})




