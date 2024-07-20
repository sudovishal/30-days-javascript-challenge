// Activity 1
num1 = 25
num2 = 5
console.log(`The addition of ${num1} and ${num2} is ${num1 + num2}`) 
console.log(`The Subtraction of ${num1} and ${num2} is ${num1 - num2}`)
console.log(`The Multiplication of ${num1} and ${num2} is ${num1 * num2}`)
console.log(`The Division of ${num1} and ${num2} is ${num1 / num2}`)
console.log(`The Modulus of ${num1} and ${num2} is ${num1 % num2}`)
console.log(`The Exponent of ${num2} and ${num2} is ${num2 ** num2}`)

// Activity 2
sum = 8
sum += 10
console.log(sum)
sum -= 10
console.log(sum)

// Activity 3
num3 = 10
num4 = 60

console.log(`Whether ${num3} is greater than ${num4} is ${num3 > num4}`)
console.log(`Whether ${num3} is smaller than ${num4} is ${num3 < num4}`)

num5 = 15
num6 = 15
console.log(`Whether ${num5} is greater than or equal to ${num6} is ${num5 >= num6}`)
console.log(`Whether ${num5} is smaller than or equal to ${num6} is ${num5 <= num6}`)

num7 = "50"
num8 = 50
console.log(` Equality Operator for loosely types variables: ${num7 == num8}`)
console.log(`Strict Equality,  type conversion doesnt happen ${num7 === num8}`)

// Activity 4
a = 10
b = -5
c = 8
console.log(`Either ${a} or ${b} is greater than 0: ${a > 0 && b > 0}`)
console.log(`Either ${a} or ${c} is greater than 0: ${a > 0 && c > 0}`)

console.log(`Either ${a} or ${b} is greater than 0: ${a > 0 || b > 0}`)
console.log(`Either ${a} or ${c} is greater than 0: ${a > 0 || c > 0}`)
console.log(!(b < 0))

//  Activity 5
console.log((c >= 0) ? "positive" : "negative")

// Feature Request 1
function arithmeticOperations(a, b) {
    console.log(`Addition: ${a} + ${b} = ${a + b}`);
    console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
    console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
    console.log(`Division: ${a} / ${b} = ${a / b}`);
    console.log(`Remainder: ${a} % ${b} = ${a % b}`);
}

arithmeticOperations(10, 3);

// Feature Request 2
function comparisonAndLogicalOperators(x, y) {
    console.log(`x == y: ${x == y}`);
    console.log(`x === y: ${x === y}`);
    console.log(`x != y: ${x != y}`);
    console.log(`x !== y: ${x !== y}`);
    console.log(`x > y: ${x > y}`);
    console.log(`x < y: ${x < y}`);
    console.log(`x >= y: ${x >= y}`);
    console.log(`x <= y: ${x <= y}`);

    console.log(`x > 0 && y > 0: ${x > 0 && y > 0}`);
    console.log(`x > 0 || y > 0: ${x > 0 || y > 0}`);
    console.log(`!(x > 0): ${!(x > 0)}`);
}

comparisonAndLogicalOperators(5, 3);

// Feature Request 3
function ternaryOperatorCheck(num) {
    const result = (num >= 0) ? "positive" : "negative";
    console.log(`The number ${num} is ${result}.`);
}

ternaryOperatorCheck(-10);
ternaryOperatorCheck(10);
