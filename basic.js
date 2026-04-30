// this is a comment in javascript
// variable -> container for storing data;
// identifier -> name of the variable;
// keyword -> reserved words in javascript;
// function -> A block of code that performs a specific task;
// data type -> type of data that can be stored in a variable;
// operators -> symbols that perform operations on variables;
// typeof -> operator that returns the type of a variable;
// output methods -> methods that are used to display data on the screen;
// - document.write(), console.log(), alert(), prompt(), confirm(), console.table(), console.error(), console.warn();
// console.log("hello world");
// document.write("hello world");
//     // document.write("hello world");
// document.writeln("hello world");
//     document.writeln("hello world");

var a = 10;
console.log(a);
var a = 20;
console.log(a);
// Re-Declaration & Re-Assignment is allowed in var keyword, ( functional scope )

let b = 20;
console.log(b)
b = 30;
console.log(b);
// Re-Declaration is not allowed & Re-Assignment is allowed in let keyword, ( block scope )

const c = 3.14;
console.log(c);
// Re-Declaration is not allowed & Re-Assignment is not allowed in const keyword, ( block scope )

// working

// memory allocation, code execution -> 2 phases

var ab = 78; // undefined
console.log(ab);

// hoisting -> moving the declaration of variables to the top of the code

console.log(abc);
var abc;

// functions

// function funName() {
//     // statements
//     console.log("Just function invoked");
// }

// funName();

// function add(a, b){ // parameters
//     console.log(a + b);
// }

// add(10, 20); // arguments
// add(100, 20); // arguments
// add(110, 20); // arguments
// conditional statements -> if, if-else, if-else-if, switch

// comparison operators -> ==, !==, >, <, >=, <=

// if(5 > 10){
//     console.log("5 is greater than 10");
// } else {
//     console.log("5 is not greater than 10");
// }

// =, ==, === -> assignment operators, comparison operators, strict comparison operators

// 2 == "2" -> true
// 2 === "2" -> false

function calc(a, operator, b) {
    if (operator == "+") {
        console.log(a + b);
    } else if (operator == "-") {
        console.log(a - b);
    } else if (operator == "*") {
        console.log(a * b);
    } else if (operator == "/") {
        console.log(a / b);
    } else {
        console.log("Invalid operator");
    }
}

calc(10, "+", 20);
calc(10, "-", 20);
calc(10, "*", 20);
calc(10, "/", 20);

// return statement

function getName() {
    const name = "Nidha";
    return name;
}

const userName = getName();
console.log(userName);

// const 7d = 34;
const $ab = 78;



// variable naming -> camelCase, starts with letter, _, $

// alert

// alert("hello world");
// const confirm_res = confirm("Are you sure?");

// console.log(confirm_res);

const user = prompt("Enter your name");
console.log(user);
