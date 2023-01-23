const displayText = document.querySelector(`.display`);
const numberButtons = document.querySelectorAll(`.number`);
const clearButton = document.querySelector(`.button-clear`);
const operationsButtons = document.querySelectorAll(`.operation`);
const equalButton = document.querySelector(`.button-equal`);

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
}

/**
 * Function to clear display
 * @returns nothing
 */
const clearDisplay = () => displayText.textContent = noNumber;

numberButtons.forEach((button) => button.addEventListener(`click`, (e) => {
    if(nullDisplay){
        displayText.textContent = 0;
        nullDisplay = false;
    } 
    displayText.textContent == 0 ? displayText.textContent = button.textContent : displayText.textContent = displayText.textContent + button.textContent
    }));

operationsButtons.forEach((button) => button.addEventListener(`click`, (e) => {
    numberOne == 0 ? numberOne = displayText.textContent : numberTwo = displayText.textContent;
    if(numberOne != 0 && numberTwo != 0){
        operate(operation,+numberOne,+numberTwo);
    }
    operation = button.textContent;
    displayText.textContent = numberOne;
    nullDisplay = true;
}));

/**
 * Adds event to null out what is writen in the variables
 */
clearButton.addEventListener(`click`,(e) =>{
    clearDisplay();
    numberOne = 0;
    numberTwo = 0;
    operation = ``;
});

/**
 * Event listner for equal button to display the solution of the equation.
 * Changes the display value to the solution.
 */
equalButton.addEventListener(`click`, (e) => {
    numberTwo = displayText.textContent;
    operate(operation,+numberOne,+numberTwo);
    displayText.textContent = numberOne;
});

clearDisplay();