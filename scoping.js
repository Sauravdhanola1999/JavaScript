const div = document.querySelector("div");
const from = document.querySelector("form");
const btn = document.querySelector("button");

// div.addEventListener("click", functin);
// from.addEventListener("click", functin);
// btn.addEventListener("click", functin);

// function functin(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target =" +
//       event.target.tagName +
//       ", this=" +
//       this.tagName
//   );
// }

div.addEventListener("click", () => {
  alert("div");
});
from.addEventListener("click", () => {
  alert("from");
});
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("button");
});
