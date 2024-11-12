// Anonymus function
let sum = function (a, b) {
  return a + b
}
const result = sum(3, 7)

// Function DECLARATION
function sum(a, b) {
  return a + b
}
const result = sum(3, 7) // calling the function

// Function EXPRESSION
let sum = function (a, b) {
  return a + b
}
const result = sum(1, 3) // calling the function

// Arrow function
let sum = (a, b) => {
  return a + b
}

// or...

let sum = (a, b) => a + b // note it does not require a "return" keyword, because it is implicit
