function linkClickHandler(text) {
  alert(new Date().getTime());
}

const links = document.querySelectorAll(".navbar-li");

console.log(links, "links");

for (let link of links) {
  link.addEventListener("click", () => linkClickHandler(link.innerText));
}

let arr = new Array(8).fill(10);

/**
 * hoisting - var, let, const
 * event loops
 * call stack
 * closures
 * proptypes
 * functions -> arrow functions, anonymous function
 *
 * var, let, const
 * array problems
 * array methods, map filter, reduce
 *
 *
 *
 * asynchronous - promises, fetch, async/await, setTimeout and setInterval
 */

//can redeclare and re-initialize
var name = "kishore";
var name = "sda";

// cannot redeclare but re-initialize is possible
let a = "b";
a = "dsadasd";

// cannot redeclare & re-initialize
const sda = "sadasdasda";

sda = "ww";
