function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument

//default parameters
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Aman");

//return statement
function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log(result);


