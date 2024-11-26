let currentInput = '0';
let previousInput = null;
let operator = null;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput;
}

function clearCalculator() {
    currentInput = '0';
    previousInput = null;
    operator = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function handleOperator(newOperator) {
    if (operator && previousInput !== null) {
        currentInput = String(operate(previousInput, currentInput, operator));
    }
    operator = newOperator;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function operate(num1, num2, operator) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operator === '+') return n1 + n2;
    if (operator === '-') return n1 - n2;
    if (operator === '*') return n1 * n2;
    if (operator === '/') return n2 !== 0 ? n1 / n2 : 'Error';

    return n2;
}

function calculate() {
    if (operator && previousInput !== null) {
        currentInput = String(operate(previousInput, currentInput, operator));
        operator = null;
        previousInput = null;
        updateDisplay();
    }
}
