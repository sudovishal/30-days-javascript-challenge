// Activity 1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}
checkEvenOdd(4); 
checkEvenOdd(7); 

function squareOfNumber(number) {
    return number * number;
}
console.log(squareOfNumber(4));

// Activity 2
const findMax = function(a, b) {
    if (a > b) {
        console.log(a + " is the maximum");
    } else if (b > a) {
        console.log(b + " is the maximum");
    } else {
        console.log(a + " and " + b + " are equal");
    }
};
findMax(10, 20); 
findMax(30, 15);  
findMax(25, 25);

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
console.log(concatenateStrings("Hello, ", "world!")); 
console.log(concatenateStrings("JavaScript ", "Function Expressions")); 

// Activity 3
const sum = (a, b) => a + b;
console.log(sum(10, 20));

const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("hello", "e")); 

// Activity 4
function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5, 2)); 
  console.log(multiply(5)); 
  
function greet(name, age = 20) {
    return "Hello, " + name + "! You seem to be " + age + " years old.";
  }
  
  console.log(greet("Vishal")); 
  console.log(greet("Vincent", 22)); 

// Activity 5
function repeatFunction(func, n) {
    return function(x) {
        let result = x;
        for (let i = 0; i < n; i++) {
            result = func(result);
        }
        return result;
    };
}
const double = x => x * 2;
const quadruple = repeatFunction(double, 9);
console.log(quadruple(3)); // Output: 12

function composeFunctions(func1, func2) {
    return function(x) {
        return func2(func1(x));
    };
}

const add1 = x => x + 1;
const square = x => x * x;
const addThenSquare = composeFunctions(add1, square);
console.log(addThenSquare(3));