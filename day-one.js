// Activity 1
var num1 = 20;
console.log(num1);
let num2 = "myname";
console.log(num2);

// Activity 2
const booleanValue = true
console.log(booleanValue);

// Activity 3
const stringValue = "Hello World";
const numberValue = 5;
const boolValue = true;
const objectValue = {
    name: "Vishal",
    age: 22,
    city: "Mumbai"
}
const arr = [12,3,4,5,56,7,8,9,];
let varUndef = undefined
let varNull = null

console.log(typeof numberValue);
console.log(typeof stringValue);
console.log(typeof boolValue);
console.log(typeof objectValue);
console.log(typeof arr);

// Activity 4
let varone = 345
console.log(varone);
varone = 789
console.log(varone);

// Activity 5
const mystring = "Test1"
// mystring = "Test2"
console.log(mystring); // TypeError: Assignment to constant variable.

// Feature Request 1
console.log(`The Value is ${numberValue} and its type is ${typeof numberValue}`);
console.log(`The Value is ${stringValue} and its type is ${typeof stringValue}`);
console.log(`The Value is ${boolValue} and its type is ${typeof boolValue}`);
console.log(`The Value is ${objectValue} and its type is ${typeof objectValue}`);
console.log(`The Value is ${arr} and its type is ${typeof arr}`);
console.log(`The Value is ${varUndef} and its type is ${typeof varUndef}`);
console.log(`The Value is ${varNull} and its type is ${typeof varNull}`);

// Feature Request 2
// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let varOne = 100; 
console.log(varOne);
varOne = 400
console.log(varOne);

// The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.
const constVar = 200
console.log(constVar);
try {
    constVar = 500
  } catch (err) {
    console.log(err); // TypeError: Assignment to constant variable.
  }