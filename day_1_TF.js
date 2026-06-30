//NAmed Function:A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
function greet() {
  return "Hello!";
}
console.log(greet());

//Anonymous Function:An anonymous function is a function defined without an explicit name. It is commonly used as a callback or assigned to a variable.
const greet = function() {
  return "Hi there!";
};
console.log(greet());

//Function Expression:A function expression is a function created as part of an expression and assigned to a variable or passed to another function. It can be named or anonymous.
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));

//Arrow Function (ES6):A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.
const square = n => n * n;
console.log(square(4));