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

const display = document.querySelector("#display")
const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const equalButton = document.querySelector("#equal-button")


numButtons.forEach(numButton => {
    numButton.addEventListener("click", (e) => {
        let value = e.target.textContent;
        display.append(value);
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        let value = ` ${e.target.textContent} `;
        display.append(value);
    });
});

equalButton.addEventListener("click", () => {
    let [firstNumber, operator, secondNumber] = display.textContent.split(" ");
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    display.textContent = operate(operator, firstNumber, secondNumber)
});