// Activity 1
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Activity 2
console.log(numbers.push(6));
console.log(numbers);

let removedElement = numbers.pop();
console.log(numbers);
removedElement = numbers.shift();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

// Activity 3
let arr = [1, 2, 3, 4, 5];
const doubledArr = arr.map(x => x * 2)
console.log(doubledArr);

const EvenArr = arr.filter(x => x % 2 === 0)
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Activity 4
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));

// Activity 5
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log(matrix[2][2]);