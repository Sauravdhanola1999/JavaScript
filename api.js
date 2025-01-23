// example of preferne for microstack vs callbak stack


console.log("Script start");

// Example of a microtask: Promise
Promise.resolve().then(() => {
  console.log("Microtask: Promise resolved");
});

// Example of a callback task: setTimeout
setTimeout(() => {
  console.log("Callback: setTimeout");
}, 0);

// Example of another microtask: queueMicrotask
queueMicrotask(() => {
  console.log("Microtask: queueMicrotask");
});

console.log("Script end");



