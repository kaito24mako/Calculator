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
console.log(getMultiply(1, 3));

// Variables for the three parts of an operation 
let number1 = 3;
let number2 = 5;
let operator = add;

// Operates on the given numbers 
const operate = function(number1, number2, operator) {
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

// Display shows the number that the user pressed on
const keys = document.querySelectorAll(".number");
const displayOutput = document.querySelector("#display");

function keyClick(event) {
    displayOutput.textContent = event.target.textContent;
    let userNumber = displayOutput.textContent;
    return userNumber;
}

keys.forEach(key => {
    key.addEventListener("click", keyClick);
})
