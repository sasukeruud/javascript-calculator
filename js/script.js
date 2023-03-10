const displayText = document.querySelector(`.display`);
const numberButtons = document.querySelectorAll(`.number`);
const clearButton = document.querySelector(`.button-clear`);
const operationsButtons = document.querySelectorAll(`.operation`);
const equalButton = document.querySelector(`.button-equal`);
const decimalButton = document.querySelector(`.button-decimal`);

let noNumber = 0;
let numberOne = 0;
let numberTwo = 0;
let operation = ``;
let nullDisplay = true;

/**
 * Addition function
 * @param {*x first number} x 
 * @param {*y second number} y 
 * @returns the calcutlated value after addition have been done on the two numbers
 */
const add = (x,y) => x + y;

/**
 * Function for subraction
 * @param {*x first number} x 
 * @param {*y second number} y 
 * @returns returns the subtracted value of x minus y
 */
const subtract = (x,y) => x - y;

/**
 * Function for mulitiplicaiton
 * @param {*x first number} x 
 * @param {*y second number} y 
 * @returns returns the value of the number after multiplication have been done
 */
const multiply = (x,y) => x * y;

/**
 * Function to divide two numbers
 * @param {*x first number} x 
 * @param {*y second number} y 
 * @returns returns the value after dividation have been done
 */
const divide = (x,y) => x / y;

/**
 * Function to decide and calculate a mathimatical equation.
 * Only the four standard operations.
 * @param {*operator a mathimatical operator[+,-,*,/]} operator 
 * @param {*x first number} x 
 * @param {*y second number} y 
 */
const operate = (operator,x,y) => {
    switch(operator){
        case "+": 
            numberOne = add(x,y);
            break;
        case "-": 
            numberOne = subtract(x,y);
            break;
        case "*":
            numberOne = multiply(x,y);
            break;
        case "/": 
            numberOne = divide(x,y);
            break;

    }
};

/**
 * Function to clear display
 * @returns nothing
 */
const clearDisplay = () => displayText.textContent = noNumber;

/**
 * Updated the display value. Either starts a new number or add trailing numbers to the display
 * @param {*number number to add to display} number 
 */
const updateDisplay = (number) => {
    if(nullDisplay){
        displayText.textContent = 0;
        nullDisplay = false;
    }
    displayText.textContent === `0` ? displayText.textContent = number : displayText.textContent = displayText.textContent + number;
};

/**
 * Function for solving the equation and display the solution of the equation.
 * Changes the display value to the solution.
 */
const solve = () => {
    operate(operation,+numberOne,+displayText.textContent);
    operation = ``;
    displayText.textContent = numberOne;
    nullDisplay = true;
};

/**
 * Function to get the number from the display and save which operation to use.
 * If there is a second number solve for the operation that is stored in the code.
 * @param {*_operation which mathimatical operation to do} _operation 
 */
const operationInput = (_operation) => {
    numberOne == 0 ? numberOne = displayText.textContent : numberTwo = displayText.textContent;
    if(numberOne != 0 && numberTwo != 0){
        operate(operation,+numberOne,+numberTwo);
    }
    operation = _operation;
    displayText.textContent = numberOne;
    nullDisplay = true;
};

/**
 * Function to add on a decimal point to the display
 */
const decimalOperation = () =>{
    if(!displayText.textContent.includes(`.`)) {
        displayText.textContent = displayText.textContent + decimalButton.textContent;
        nullDisplay = false;
    }
}

numberButtons.forEach((button) => button.addEventListener(`click`, (e) => updateDisplay(button.textContent)));

operationsButtons.forEach((button) => button.addEventListener(`click`, (e) => operationInput(button.textContent)));

/**
 * Adds event to null out what is writen in the variables
 */
clearButton.addEventListener(`click`,(e) =>{
    clearDisplay();
    numberOne = 0;
    numberTwo = 0;
    operation = ``;
});

equalButton.addEventListener(`click`, solve);

decimalButton.addEventListener(`click`, decimalOperation);

window.addEventListener(`keydown`, (e) =>{
    switch(e.key){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            updateDisplay(e.key);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            operationInput(e.key);
            break;
        case "Enter":
            solve();
            break;
        case ".":
            decimalOperation();
            break;
        default: break;
    }
});

clearDisplay();