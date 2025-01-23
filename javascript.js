// Types in Js
console.log(typeof "hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (special case)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"


// equality and strict equality
console.log(5=='5');
console.log(5==='5');

//null and undefined are both represent the absence of a value

// Null: Must be explicitly assigned and returns object "object" this is known as js bug
// undefined: represents a variable that has been declared but not asssigned a value and returns "undefined"

let x; console.log(x); // undefined	// typeof returns undefined 
let y = null; console.log(y); // null // typeof returns object

//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution
// This means that we can use variable and functions before they are declared.

console.log(x); // Output: undefined 
var x = 10; 
console.log(x); // Output: 10

console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20

console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Output: 30

// Similar to let, const is also hoisted with a temporal dead zone

greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}

sayHello(); // Output: TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello from expression!");
};

// Function expressions are not hoisted. Calling sayHello before its assignment results in a TypeError


// Hoisting Behavior:
// Inner functions are hoisted within their parent function's scope.
// They are not hoisted to the global scope

function outer() {
    console.log(inner()); // Output: "Inner function called"
  
    function inner() {
      return "Inner function called";
    }
  }
  
  outer();

//   TDZ for let and const: Variables declared with let and const are hoisted, but they exist in a "dead zone" before their actual declaration. 
//   Attempting to access them within this zone throws a ReferenceError. This is to prevent accidental usage of variables before they are properly initialized

// Function Expressions: Since they are not hoisted, they are simply not accessible before their declaration. 
// There's no "dead zone" because they don't exist in memory until they are assigned

// Function expressions are not hoisted.   
// They are not subject to the Temporal Dead Zone.
// They are accessible only after their declaration and assignment

// the period in the execution of a JavaScript program where a variable exists but cannot be accessed. 
// This occurs during the time between the creation of a variable and the point where it is declared

// var: function scoped or globally scoped. can be redeclared and updated and hoisted and initialized with undefined 
//let : block scoped. Hoisted but not initialzed(TDZ). cannot be redeclared but can be updated.
// const : block scoped. Hoisted but not initialzed(TDZ). cannot be redecalared or updated.

if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x); // 10 (function or global scoped)
console.log(y); // ReferenceError (block scoped)
console.log(z); // ReferenceError (block scoped)


// Variable scope in JavaScript refers to the context in which a variable is defined and determines where it can be accessed or modified in your code
// In js there ar two types of scopes ..
// Global Scope: variable declared outside any function or block
// local Scope: variable declared inside a function or block

