//console.log("Hello World!");

//1. Use strict
//added in ES 5
//use this for Vanilla Javascript.
'use strict';

//2. Variable
//let(added in ES6);

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting(move, declaration from bottom to top)
//hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
//끌어 올려주다의 의미.
{
    console.log(age);
    age = 4;
    console.log(age);
    var age;
}
console.log(age);

//3. Constants
//favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes

const dayInWeek = 7;
const maxNumber = 5;