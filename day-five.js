function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}


checkEvenOdd(4);  // Output: 4 is even
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
console.log((a, b) => a + b);
