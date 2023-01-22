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
    let answer = 0;
    switch(operator){
        case "+": 
            answer = add(x,y);
            break;
        case "-": 
            answer = subtract(x,y);
            break;
        case "*":
            answer = multiply(x,y);
            break;
        case "/": 
            answer = divide(x,y);
            break;

    }

    console.log(answer);
}