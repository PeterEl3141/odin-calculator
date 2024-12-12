/* 
write a function inputGetter
        get the first number
            push the numbers inputed to an array of firstnumberarray.
                if input  is from div class 'numbers', array.push(number). 

        get the operator
                else operator = the button to trigger the event.
            disable the operator buttons once one has been pressed

        get the second number 
            push the numbers inputed to an array secondnumberarray. 

link the = button to the operate function. When pressed feed as arguments into the operate function 

write a function reseter (clr). wipes off the input. resets the values of the three variables

write a function displayer. when a button is pressed, appendchild that value to the display div



*/ 

let firstNumber
let secondNumber
let operator

const screen = document.querySelector('#screen')
screen.innerText = 0;

const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear")


const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")


numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        console.log(e.target.getAttribute("data-value"));
        displayer(e.target.getAttribute("data-value"));
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        displayer(e.target.innerText);
        operators.forEach(operator => operator.disabled = true)
    })
})





function adder (a, b){
    return a + b;
}

function subtracter (a, b){
    return a - b;
}

function multiplyer (a, b){
    return a * b;
}

function divider (a, b){
    if (a === 0 || b === 0){
        return "Error! Sus operation"
    } return a / b;
}

function operate (firstNumber, secondNumber, operator){
    switch (operator){
        case 'add':
            return adder(firstNumber, secondNumber);
        case 'subtract':
            return subtracter(firstNumber, secondNumber);
        case 'multiply':
            return multiplyer(firstNumber, secondNumber);
        case 'divide':
            return divider(firstNumber, secondNumber);
    }
}


function inputGetter(){}

function reseter(){}

function displayer(input){
    screen.value += input
}




/*const zero = document.querySelector("#zero")
const one = document.querySelector("#one") 
const two = document.querySelector("#two")
const three = document.querySelector("#three") 
const four = document.querySelector("#four") 
const five = document.querySelector("#five") 
const six = document.querySelector("#six") 
const seven = document.querySelector("#seven") 
const eight = document.querySelector("#eight") 
const nine = document.querySelector("#nine") */