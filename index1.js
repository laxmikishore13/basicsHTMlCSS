function linkClickHandler(text) {
  alert(new Date().getTime());
}

const links = document.querySelectorAll(".navbar-li");

console.log(links, "links");

for (let link of links) {
  link.addEventListener("click", () => linkClickHandler(link.innerText));
}

/**
 * hoisting - var, let, const
 * event loops
 * call stack
 * closures
 *
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
