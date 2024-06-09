const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
        return subtract(a,b);
    } else if (operator == "x") {
        return multiply(a,b);
    } else if (operator == "÷") {
        return divide(a,b);
    };
};

function clearDisplay() {
    display.textContent = ""
};

const display = document.querySelector("#display")
const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equal-button");

clearButton.addEventListener("click", clearDisplay);

let firstNumber;
let operator;
let secondNumber;

numButtons.forEach(numButton => {
    numButton.addEventListener("click", (e) => {
        let value = e.target.textContent;
        display.append(value);
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        firstNumber = Number(display.textContent);
        operator = e.target.textContent;
        clearDisplay();
    });
});

equalButton.addEventListener("click", () => {
    secondNumber = Number(display.textContent);
    display.textContent = operate(operator, firstNumber, secondNumber)
})