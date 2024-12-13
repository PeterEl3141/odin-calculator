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

let firstNumber = 0;
let firstArray = [];
let secondNumber = 0;
let secondArray = [];
let currentNumber
let operator 
let i = 0;

const screen = document.querySelector('#screen')
screen.innerText = 0;

/*
const add = document.querySelector("#add")
const subtract = document.querySelector("#subtract")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide") */
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear")


const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")


numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        displayer(e.target.getAttribute("data-value"));
        
        if (i === 0){
            firstArray.push(parseInt(e.target.getAttribute("data-value")))
            firstNumber = firstArray.join('');
            console.log(firstNumber);
            return firstNumber;
        
        } else {secondArray.push(parseInt(e.target.getAttribute("data-value")))
        secondNumber = secondArray.join('');
        console.log('first number:' + firstNumber);
        console.log('second number:' + secondNumber);
        console.log('operator:' + operator);
        }
        
    })
})


operators.forEach((op) => {
    op.addEventListener("click", (e) => {
        displayer(e.target.innerText);
        i++;
        operator = e.target.getAttribute("id");
        console.log(operator);
        return operator;
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

function operate (a, b, operator){
    switch (operator){
        case 'add':
            return adder(a, b);
        case 'subtract':
            return subtracter(a, b);
        case 'multiply':
            return multiplyer(a, b);
        case 'divide':
            return divider(a, b);
    }
}

equals.addEventListener('click', () => {
    let answer = operate(firstNumber, secondNumber, operator)
    console.log('The Answer:' + answer);
    return answer;
})


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