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

// Function expressions are not hoisted(tdz). Calling sayHello before its assignment results in a TypeError


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

//  TDZ for let and const: Variables declared with let and const are hoisted, but they exist in a "dead zone" before their actual declaration. 
//   Attempting to access them within this zone throws a ReferenceError. This is to prevent accidental usage of variables before they are properly initialized

// Function Expressions: Since they are not hoisted, they are simply not accessible before their declaration. 
// There's no "dead zone" because they don't exist in memory until they are assigned

// Function expressions are not hoisted.   
// They are not subject to the Temporal Dead Zone.
// They are accessible only after their declaration and assignment

// the period in the execution of a JavaScript program where a variable exists but cannot be accessed (TD)
// This occurs during the time between the creation of a variable and the point where it is declared.

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
// Global Scope: variable declared outside any function or block and can be accessed from anywhere, include inside functions.
// local Scope: variable declared inside a function or block. Only accessible within that function or block 
// (stored in separate memory space which are reserved for this use Block)
// JavaScript uses lexical Scoping, which means the inner function can access the variable of outer function.

function functionScopeExample() {
    var functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Accessible inside the function
  }
  
  functionScopeExample();
  // console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined

// Variables declared with var inside a function are function-scoped.
// They are accessible only within the function in which they are defined and are not visible outside of it.
// Function scope does not apply to let and const, as they are block-scoped

// Why is Scope Important?
// Avoids Polluting the Global Namespace: Helps prevent variable name conflicts.
// Improves Code Readability: Keeps variables relevant to the area of the program where they are needed.
// Reduces Bugs: Avoids unintended variable overwrites.

// Feature	Global Variable vs	Local Variable
// Declaration   	Outside any function or block	     Inside a function or block
// Scope	   Accessible throughout the program	  Accessible only within its function/block
// Lifetime   	Exists as long as the program runs	   Exists only during function/block execution
// Accessibility    	Accessible from any function or block  	Not accessible outside its scope
// Usage Concerns   	Prone to conflicts and hard to debug	  Safer and easier to debug


//shadowing occurs when a variable declared within a certain scope has the same name as a varibale declared in an outer scope. 
// The Inner variable shadows the outer variable,meanining the outer variable is not accessible within the inner scope.

//Illegal Shadowing haapens when this behavior violets the rules of scope resolution in JavaScript,
// espeically in let, const and var declarations

let x = 10;
{
    var x = 20; // Illegal shadowing in the same scope
    console.log(x);  
}
// SyntaxError: Identifier 'x' has already been declared


let x = 10;

{
    let x = 20; // Legal shadowing
    console.log(x); // Prints 20
}

console.log(x); // Prints 10

let y = 30;

function testShadow() {
    var y = 40; // Legal shadowing, different scopes
    console.log(y); // Prints 40
}

testShadow();
console.log(y); // Prints 30

// Closure in JavaScript
// The combination of function bundled together (encloses) with references to its sorrounding state (the lexical environment);
// In other words, a closure gives us access to its outerscope, and closure is created everytime a function is created, at function careation time
function x(){
  let a=7;
  function y(){
    console.log(a)
  }
  return y;
}
let z= x();
console.log(z);
z();

//used in event handles, callbacks, timeouts, promises, and async functions

function attachClickHandler(buttonId, message) {
  document.getElementById(buttonId).addEventListener('click', function () {
    console.log(message); // Closure keeps `message` accessible
  });
}

// Attaching click handlers with unique messages
attachClickHandler('btn1', 'Button 1 clicked!');
attachClickHandler('btn2', 'Button 2 clicked!');


//functions are block of code designed to perform a specific task. iT is reusable piece of code that can be called multiple times with different inputs (arguments)
//to produce different ouputs

//Function Statement (also called a function declaration) defines a named function, can be hoisted and can be called before declaration
function greet(){
  console.log("JHell");
}
greet();

//Function expression: Assigned to variable, not hoisted; cannot be called before declaration
//function expresion  are not hoisted so, they can be only used after assignment 
// functin expression can be named and anonymous
const g = function(){
  console.log("Hello");
}
g();

//anonymous can be used in contexts like callbacks, IIFE, and event handlers;

//named function expression is function expression with a name;
// named function expression is useful for self-referencing, recursion, and debugging;

const greet = function geet(){
  console.log("Hello");
}
greet();


const factorial = function fact(n){
  if(n===0){
      return 1;
  }
  else {
      return n*fact(n-1);
  }
}
console.log(factorial(5));

// paramter vs arguments
// variable listed in the function definition are called parameters
//actual values that are passed to the function are called arguments when it is called

// First class Functions
// function can be assigned to a variable, passed as an argument to another functionScopeExample, returned from another function

//Example and we can take the map, filter and reduce also
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//use cases Event Handlers, Callbacks, Promises, and Async Functions also in middlware in express.js

// Pure Functions are functions that always produce the same output for the same input, and they do not have any side effects
//Does not rely on external state, Make code more predictable and easier to test
function add(a, b) {
  return a+b; //deterministic and no side effects
}

// Impure Functions: Functions that produce different outputs for the same input or have side effects are considered impure

let total =0;
function add(a){
  total +=a; // modifies external variable 'total'
  return total; // returns value depends on external state
}

//An IIFE is a JavaScript Function that runs as soon as it is defined. 
// It is also known as a self-executing anonymous function
//They are typically used to create a local scope for variables to prevent them from polluting the global scope

(
  function greet(){
      console.log("Hello!")
  }
)();
// cannot access the value which from outside the iife


//different ways to loop through an array in javaScript
//forloop
//forEach
//map
//while
//dowhile

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

fruits.forEach((fruit)=>{
  console.log(fruit);
})


// for...in loop
// Purpose: Iterates over the enumerable properties (keys) of an object.
// Works on: Objects and arrays (but typically used for objects).
// Behavior:
// It loops through the keys (property names) of an object.
// For arrays, it iterates over the indices (as strings).

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]); // Outputs: a 1, b 2, c 3
}

const arr = [10, 20, 30];
for (const index in arr) {
  console.log(index, arr[index]); // Outputs: 0 10, 1 20, 2 30
}


// for...of loop
// Purpose: Iterates over the values of an iterable object.
// Works on: Iterables like arrays, strings, Maps, Sets, and more.
// Behavior:
// It loops through the values directly, not the keys or indices.

const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // Outputs: 10, 20, 30
}

const str = "hello";
for (const char of str) {
  console.log(char); // Outputs: h, e, l, l, o
}


//how to add remove or delete elements from an array in jaavscript

const vegetables = ["carrot", "beetroot", "potato", "cabbage"];

vegetables.push("spinach"); // Add elements to the end of an array 
vegetables.unshift("Apple"); // Add elements to the beginning of an array

vegetables.pop("cabbage"); // Remove the last element of an array
vegetables.shift("carrot"); // Remove the first element of an array

vegetables.splice(1, 0, 'kiwi'); //Add elements at a specific index
vegetables.splice(2, 1); // Remove elements at a specific index

// array.splice(start, deleteCount, item1, item2, ...);
// The splice() method modifies the original array.
// It can be used for removal, addition, or replacement of elements.
// Negative start values count from the end of the array.
// The returned array contains the elements that were removed (if any).

//Map:- it is a HOF that iterates over each element of an array, allowing us to apply a specified function to each element.
// Does not modify the original array but returns a transformed array based on the logic provided
// map returns a new array of same length as original
// It is commonly used to transform or process data

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

//Filter: Filter elements based on a condition and returns a new array with the elements that pass the condition
// the length of the returned array may be different from the original array


const numbers = [1, 2, 3, 4, 5];

// Example: Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce: reduces an array to a single value 
// it iterates over each element of an array and accumulates the results based on the logic provided in the callback
// the accumulator stores the final result of the reduce operation

const numbers = [1, 2, 3, 4, 5];

// Find the average using `reduce`
const average = numbers.reduce((sum, num, index, array) => sum + num / array.length, 0);
console.log(average); // Output: 3


//filter vs find 
// filter returns Array of all matching elements, Iterates through the entire array	
// find returns the first matching element, Stops after the first match
// filter  Returns an empty array [] if no match is found
// find returns undefined if no match is found
// usecase : filter is used when multiple matches are needed, find is used when only the first match is need;

// some vs every
// some returns true if atleast one element matches the condition, Stops after the first match
// every returns true if all elements match the condition, Stops at the first non-match
// some returns false if no match is found
// every returns true if the array is empty
// usecase: some is used when To check if any element satisfies a condition
//usecase: every is used when to check if all elements satisfy a condition

//Both methods are efficient because they stop iterating as soon as the result is determined.

const numbers = [1, 2, 3, 4, 5];

// Check if at least one number is greater than 4
const hasGreaterThanFour = numbers.some(num => num > 4);
console.log(hasGreaterThanFour); // Output: true

// Check if all numbers are less than 10
const allLessThanTen = numbers.every(num => num < 10);
console.log(allLessThanTen); // Output: true

// Check if all numbers are even
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: false


// Select Elements in the DOM

<div id="conatiner" class="myClass">
  <p>This is My First Paragraph</p>
</div>

// getElementById: Selects a single element by its ID attribute.
const divById = document.getElementById('container');
// getElementsByClassName: Selects multiple elements by their class attribute. returns a live HTML collection
const elementsByClass = document.getElementsByClassName('myClass');
 // getElementsByTagName: Selects multiple elements by their tag name. returns a live HTML collection
 const paragraphs = document.getElementsByTagName('p');
// using querySelector: Selects a single element using a CSS selector returns the first matching element
const paragraph = document.querySelector('#container');
// using querySelctorAll: Selects multiple elements using a CSS selector. returns a static NodeList
const allParagraphs = document.querySelectorAll('p');


// how to create and append elements to the DOM?
const newParagraph = document.createElement('p');

// set its content 
newParagraph.textContent = 'this is a new Paragraph'

// Add some attributes 
newParagraph.id = 'newPara';
newParagraph.className = 'highLight';

// create a text Node
const textNode = document.createTextNode('Additonal text.');

// append the text node to the paragraph 
newParagraph.appendChild(textNode);

// append new paragraph to an exsisting element(e.g body);
document.body.appendChild(newParagraph);

// alternative method using insertAdjacentHTML
const existingDiv = document.getElementById('existingDiv');
existingDiv.insertAdjacentElement('beforeend', '<p>Insert Using insertAdjacentElement</p>');


// Explain difference between innerHTML and textContent
//innerHTML parses content as HTML, textContent does not
//InnerHtML can be slower and less secure (risk of XSS attacks);
//textContent id genrally faster and safter 
// innerHtml returns all content, including script and style element content
//textContent returns the text content of all elements, ignoring tags


const div = document.createElement('div');

//innerHTML interprets the content as HTML
div.innerHTML = '<p> This is <strong>bold</strong> text </p>';
console.log(div.innerHTML);
// "'<p> This is <strong>bold</strong> text </p>';

//textContent treats the content as plain text
 div.textContent = '<p> This is <strong>bold</strong> text </p>';
 console.log(div.textContent);
// "'<p> This is <strong>bold</strong> text </p>';


// remove example

{/* <div id="parent">
  <p id="child">REMOVE ME</p>
</div> */}

//remove child
const p = document.getElementById('parent');
const c = document.getElementById('child');
p.removeChild(c);

//using remove support less in older browser
const elementtobeRemoved = document.getElementById("child");
elementtobeRemoved.remove();

// setting innerHTML to an empty string (removes all children)
document.getElementById("parent").innerHTML = "";

//Note: when removing elements, be sure to remove any associated event listeners
// to prevent memory leaks 
 

// Arrow Functions vs Normal Functions
// Arrow Functions:
// Syntax: const functionName = (parameters) => { /* code */ }
// No this binding: Arrow functions do not have their own this context. They inherit this from the surrounding context.
// Concise: More compact syntax, especially for single-expression functions.
// Implicit return: If there’s a single expression, it can return the result directly without the return keyword.
const sum = (a, b) => a + b;
// No arguments object: Arrow functions do not have their own arguments object. They inherit it from the outer function.

// Normal Functions :
// Syntax: function functionName(parameters) { /* code */ }
// this binding: Normal functions have their own this context, which can change depending on how the function is called (e.g., as a method, constructor, etc.).
// Verbose: Requires a more traditional syntax with explicit return statements if there is more than one expression.
function sum(a, b) {
  return a + b;
}
// Has its own arguments object: Normal functions have their own arguments object that can be accessed within the function

// Key Differences:-
// this: Arrow functions don't have their own this; they inherit it from the surrounding context, whereas normal functions have their own this context.
// Syntax: Arrow functions offer a shorter and more concise syntax.
// arguments: Arrow functions do not have an arguments object, while normal functions do.
// Use Case:
// Arrow Functions are ideal for short, simple functions (like callbacks or inline functions), especially when you need to preserve the this context from the surrounding scope.
// Normal Functions are better when you need a function to have its own this context, or if you need to work with the arguments object.

// Destructuring is a way to extract multiple values from data store in objects and arrays
//Object deStructring


const person = {name: "Alice", age: 30, city: "New York"};

console.log(person.name);

person.name = "saurav";

console.log(person);
//Destructure
const {name, age, city} = person;
console.log(name, age, city);

const colors = ["red", "yellow", "black", "white"];

const [first, second, third, fourth] = colors;
console.log(first, second);


//template literals
// these are string literals that allow embedded expressions and multiline strings
// allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates

// spread operator (...) in JavaScript is used to create shallow copies, merge objects, or 
// expand iterable elements. When updating an object immutably, 
// we use the spread operator to create a new object instead of modifying the original one

// Why Use Spread Operator?
// ✔ Creates a new object instead of mutating the original
// ✔ Maintains immutability (useful in React & Redux)
// ✔ Merges and updates objects in a clean and concise way

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 }
];

// Update Alice's name to "Charlie"
const updatedUsers = users.map(user =>
  user.id === 1 ? { ...user, name: "Charlie" } : user
);

console.log(updatedUsers);
/* Output:
[
  { id: 1, name: "Charlie", age: 30 },
  { id: 2, name: "Bob", age: 25 }
]
*/

// spreading array 
const arr1 = [1, 2,3,4];
const arr2 = [5, 6,7,8];
const combine = [...arr1, ...arr2];
console.log(combine); // [1,2,3,4,5,6,7,8];

// spreading objects
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const mergeObject = {...obj1, ...obj2};
console.log(mergeObject); //


//copying array 
const original = [1,2,3];
const copy = [...original];
copy.push(4);
console.log(copy);

//spreading strings
const str = "Hello";
const chars = [...str];
console.log(chars);


// default parameters in ES6

// default parameters allows us to set default value for function parameters if no value or undefined is passed

function greet(name="guest"){
  console.log(`Hello ${name}`);
};

greet();
greet("Saurv");

//the rest parameter syntax allow a function  to accept an indefinite number of arguments as arrays

function sum(...numbers){
  return numbers.reduce((acc, n)=> acc + n,0);
}
console.log(sum(1,3,4,5,6,7,));


function multiply(m, ...n){
  return n.map(number=>m*number);
}

console.log(multiply(2,1,2,3,4,5));

const {a, b, ...rest} = {a:1, b:2, c:3, d:4};
console.log(a, b, rest);

//CallBack & Callback Hell
// callbacks are function passed as an argument to another function and is executed after the completion of main fuction

function greet(){
  console.log("Hello");
}

setTimeout(greet, 3000);

//advantages of callbacks
// it allows us to handle asynchronous operations 
// by wrapping code that needs tp execute later

// Callback Hell occurs when multiple nested callbacks make code harder to read and maintain
// nested callbacks lead to pyramid structre known as pyramid of doom make the code complex

//Inversion of control
// By passing callbacks to other functions, developers lose control og the execution flow,
// relying on the external function

//Using callback in nesting leads to callback hell and inversion of control 


function step1(callback) {
  setTimeout(() => {
    console.log("step 1");
    callback();
  }, 3000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("step 2");
    callback();
  }, 3000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("step 3");
    callback();
  }, 3000);
}

function step4(callback) {
  setTimeout(() => {
    console.log("step 4");
    callback();
  }, 3000);
}

step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        console.log("Done");
      });
    });
  });
});


//Promise 
// A promise is an object representing the eventual completion or failure of an asynchronous operations
//  Instead of passing callbacks into a function,
// we attach .then() and .catch() to the returned Promise object

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        res("Data Fetched");
      } else {
        rej("Error");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//   ✔ Readable & Maintainable
// ✔ Handles Errors Properly
// ✔ No Deep Nesting!


// Promise chaining allows you to execute multiple asynchronous operations sequentially by 
// returning a Promise from each .then()
//It is a powerful feature of JavaScript promises that helps you manage multiple operations, 
// making your code more readable and easier to maintain

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1: Data fetched");
      resolve("User Data");
    }, 1000);
  });
}

function processUserData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 2: Processing ${data}`);
      resolve("Processed Data");
    }, 1000);
  });
}

function saveToDatabase(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 3: Saving ${data} to DB`);
      resolve("Database Entry Created");
    }, 1000);
  });
}

// Chaining promises together
fetchData()
  .then((userData) => processUserData(userData))
  .then((processedData) => saveToDatabase(processedData))
  .then((finalResult) => console.log(`Step 4: ${finalResult}`))
  .catch((error) => console.error("Error:", error)).finally(()=>{
    console.log("operations is completed");
  });

//finally() method is used to specify code that should be executed regardless of whether the promise is
// fulfilled or rejected... executes on success or failure and does not modify the code

//Promise.all()

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // Output: [10, 20, 30]
  .catch(error => console.error(error));


// Promise.all() takes an array of promises and waits for all of them to resolve. 
// It returns a single promise that:

// Resolves when all promises succeed (with an array of results).
// Rejects if any promise fails (with the first error).

// ✅ Best for parallel execution
// ✅ If one fails, all fail

// No results are returned if even one fails.
// It stops executing further promises once a rejection happens.
// Use Promise.allSettled() if you want all results, including failures.

//Purpose of aync await 
// the purpose of async/await is to simplify the syntax for working with promises,
// Both async/await and .then() are used to handle asynchronous operations, 
// but async/await makes the code more readable and easier to debug.

// When using .then(), handling multiple promises can lead to 
// callback chaining (Promise Hell), making code harder to read.

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log("User:", user);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log("User Posts:", posts))
  .catch(error => console.error("Error:", error));

//   Nested .then() calls can get harder to manage.
// Debugging is tricky since the call stack is harder to trace.

// With async/await, we can write asynchronous code that looks like synchronous code.

async function getUserData() {
  try {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userResponse.json();
    console.log("User:", user);
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    console.log("User Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}
getUserData();

// Advantages of async/await: ✅ More readable (looks like synchronous code).
// ✅ Easier error handling using try...catch.
// ✅ Better debugging (stack traces are easier to follow).

// The async keyword is used before a function to make it return a Promise automatically.
// It ensures the function always returns a Promise, even if you return a simple value.

// The await keyword can only be used inside async functions.
// It pauses execution until the Promise is resolved, instead of using .then().
// This makes the code look cleaner and more readable.

// Promises vs async await 
// 1. Async/await provides a more linear, synchronous looking code structure.
// 2. Async/await use try/catch, which is more familiar for synchronous coed.
// 3. Promises uses .then() for chaining, while async/await uses regular javascript flow.
// 4. Async/await can be easier to debug as it behaves more like synchronous code.


// default and named exports 
// A module can have multiple name exports but only one default export.
//Named exports are imported using curly braces, while default exports are imported without using curly braces.
// default exports can be imported with any name, while named exports must be imported imported with their exact names (unless renamed using 'as');

// 📁 math.js
export default function add(a, b) {
  return a + b;
}

// 📁 main.js
import sum from "./math.js"; // Can name it anything (e.g., `sum`)
console.log(sum(5, 3)); // Output: 8

// 📁 math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// 📁 main.js
import { add, subtract } from "./math.js"; // Must match the exact names
console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5

import { add as sum, subtract as minus } from "./math.js";
console.log(sum(10, 5)); // Output: 15
console.log(minus(10, 5)); // Output: 5


// Convert JS object to a JSON String

const user = {
  name: "John Doie",
  age: 30,
  isAdmin: false
}

const jsonString= JSON.stringify(user);
console.log(jsonString);

// local Storage is a web storage object that allows us to store key-value pairs in the browser 
// with no expiration time

localStorage.setItem('username', 'John Doe');
localStorage.setItem('isAdmin', 'true');

const user = localStorage.getItem('username');
console.log(user);

const user1 = {name: "vapour", age : 89};
localStorage.setItem('user1', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);


//local storage vs session storage 
// both are web storage Objects, but they differe in data persistance.
// localStorage data persists even after the browser is closed and responded.
// sessionStorage data is cleared when the page session ends(i.e., when tab is closed).
// both have the same API and are limited to storing string data

localStorage.setItem(
  "persistentData",
  "This will remain after closing the browser"
);

sessionStorage.setItem(
  "temporaryData",
  "This will be cleared when the session ends"
);

// removing specific item
localStorage.removeItem("isLoggedIn");
console.log(localStorage.getItem("isLoggedIn"))  // null
localStorage.clear() // all data


