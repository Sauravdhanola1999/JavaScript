// Synchronous code
console.log("Synchronous: I need to make coffee.");
console.log("Synchronous: Coffee is made.");
console.log("Synchronous: Now I can start coding.");

// Asynchronous code (setTimeout is like waiting for coffee)
console.log("Asynchronous: I need to make coffee.");
setTimeout(() => {
  console.log("Asynchronous: Coffee is made.");
  console.log("Asynchronous: Now I can start coding.");
}, 3000); 
console.log("Asynchronous: While waiting for coffee, I can check my email!");
