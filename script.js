let firstNumber = 0;
let firstArray = [];
let secondNumber = 0;
let secondArray = [];
let currentNumber
let operator 
let i = 0;

const screen = document.querySelector('#screen')
screen.innerText = 0;


let add = document.querySelector("#add")
let subtract = document.querySelector("#subtract")
let multiply = document.querySelector("#multiply")
let divide = document.querySelector("#divide") 
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear")


const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operators")


function displayer(input){
    if (screen.value === '0'){
        screen.value = input;
    } else screen.value += input;
}



numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
    displayer(e.target.getAttribute("data-value"));        
    if (i === 0){
            operatorEnabled();
            firstArray.push(parseInt(e.target.getAttribute("data-value")))
            firstNumber = firstArray.join('');
            return firstNumber;
        
    } else {secondArray.push(parseInt(e.target.getAttribute("data-value")))
            secondNumber = secondArray.join('');
            operatorDisabled();
    }
    })
})


operators.forEach((op) => {
    op.addEventListener("click", (e) => {
        displayer(e.target.innerText);
        i++;
        operator = e.target.getAttribute("id");
        operatorDisabled();
        return operator;
    })
})

function operatorDisabled(){
        add.setAttribute("disabled", "true");
        subtract.setAttribute("disabled", "true");
        multiply.setAttribute("disabled", "true");
        divide.setAttribute("disabled", "true");
    }
    function operatorEnabled(){
        add.removeAttribute("disabled", );
        subtract.removeAttribute("disabled", );
        multiply.removeAttribute("disabled", );
        divide.removeAttribute("disabled", );
    }


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
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    let answer = operate(firstNumber, secondNumber, operator)
    console.log('The Answer:' + answer);
    screen.value = answer;
    return answer;
})


function reseter(){
    screen.value = 0;
    firstArray = [];
    secondArray = [];
    i = 0;
}

clear.addEventListener('click', () => {
    return reseter();
})

screen.value = 0;
operatorDisabled();

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