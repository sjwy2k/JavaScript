'use strict';

//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
//function name(param1, param2) { body ... return;}
//one function ===  one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint

//function is object in JS !!!
//변수 할당, parameter로 전달이 되고, 함수를 return할 수도 있게 되는것

function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

function log(message){
    console.log(message);
    return 0;
}

//TypeScript의 경우
//typescriptlang.org -> playGround
//function log(message: string): number {
//  console.log(message);
//  return 0;
//}

// 2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
console.log(ellie);
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from){
    if(from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('hi!');


function showMessage2(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');


// 4. Rest Parameters (added in ES6)
function printAll(...args) {
    
    //way 1
    // for(let i = 0; i < args.length; i++) {
    //     console.log(args[i]);
    // }

    //way 2
    // for(const arg of args) {
    //     console.log(arg);
    // }

    //way 3
    args.forEach((arg) => console.log(arg));
}

//way 3
printAll('dream','coding','ellie');



// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); //can't see
}
printMessage();
//console.log(message); //can't see

//하나의 원칙만 이해할 것
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early Return, early exit (현업에서 쓰이는 팁)
//bad
function upgradeUser(user){
    if(user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return; // 조건이 맞지 않을 때는 빨리 return을 해라.
        //etc 조건이 맞지 않을 경우, 값이 undefine인 경우, 값이 -1인 경우 빨리 return을 하고
        //필요한 로직들은 그 뒤에 작성하면 부하가 적다.
    }
    //long upgrade logic...
}


//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable. //변수 할당
//can be passed as an argument to other functions. //parameter로 전달이 되고
//can be returned by another function. //return값으로도 return이 된다

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the excution reaches it.

const print = function() { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function() {
    console.log('yes!');
};

//named function
//better debugging in debugger's stact traces
//recursions
const printNo = function print() {
    console.log('no!');
    //print(); //recursion
    //용도 : 피보나치 수열, 반복 평균값 계산 등
    //rangeError
    //Maximun call stack size exceeded
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function
//always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};

//How to make Arrow function
//1. delete 'function' keywork
//2. delete block'{}'
//3. add Arrow =>

const simplePrint2 = () => console.log('simplePrint!');

//way 1
//const add = function (a, b) {
//    return a + b;
//} 

//way 2
//const add = (a, b) => a + b;

//way 3
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}
//Array나 List 볼 때 아주 유용하게..

//IIFE : Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
hello();

(function hello2(){
    console.log('right now!');
})();


//fun quiz time
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder
//함수 calculate를 만들고 4칙연산 + 1을 처리할 수 있도록 해볼 것
//고려사항 1. command에 예약어 이외의 값이 들어오면 어떻게 처리할 것인가?
//고려사항 2. 오늘 배운 것을 활용해서 해볼 것

function calculate(command, a, b) {
    switch(command) {
        case 'add' :
            //add(a, b);
            console.log(add(a,b));
            break;
        case 'substract' :
            //substract(a, b);
            console.log(substract(a,b));
            break;
        case 'divide' :
            //divide(a, b);
            console.log(divide(a,b));
            break;
        case 'multiply' :
            //multiply(a, b);
            console.log(multiply(a,b));
            break;
        case 'remainder' :
            //remainder(a, b);
            console.log(remainder(a,b));
            break;
        default :
            console.log(`illigal operator was input. please write right operator.`);
            break;
    }
}

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
let remainder = (a, b) => a % b;

calculate('wrong', 1, 1);
calculate('add', 1, 1);
calculate('substract', 1, 1);
calculate('divide', 4, 2);
calculate('multiply', 2, 3);
calculate('remainder', 5, 2);
