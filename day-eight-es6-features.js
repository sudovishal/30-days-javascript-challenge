// Activity 1
/*
const name = "Vishal";
const age = 22;
console.log(`My name is ${name} and I am ${age} years old`);
*/
const multiLineString = `this is multiline string.
I am yapping about anything and I dont know what I am gonna do after joining TCS as a Assistant System Engineer.
just hope I get a dev role for God's Sake`;
console.log(multiLineString);

// Activity 2
arr = [23,5,4,5,7]
const [a, b] = arr
console.log(a,b);

const book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954
}
const { title, author } = book;
console.log(title);
console.log(author);

// Activity 3
let num1 = [1,2,3,4]
const num2 = [5,6,7,8]
num1 = [...num1, ...num2]
console.log(num1);

const sum = (...numbers) => {
    total = 0
    for(const num of numbers) {
        total += num
    }
    return total
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// Activity 4
const multiply = (a, b =1) => a * b;
console.log(multiply(4,3));
console.log(multiply(4));

// Activity 5
https://blog.webdevsimplified.com/2021-02/javascript-enhanced-object-literals/
// Task 8: Enhanced object literals
const name = 'Vincent';
const age = 22;

const person = {
    name,
    age,
    greet() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    },
    birthday() {
        this.age++;
        return `Happy birthday! Now I'm ${this.age} years old.`;
    }
};

console.log(person);
console.log(person.greet());
console.log(person.birthday());

// Task 9: Computed property names
const key1 = 'color';
const key2 = 'size';

const fruit = {
    name: 'Apple',
    [key1]: 'Red',
    [key2]: 'Medium'
};

console.log(fruit);
