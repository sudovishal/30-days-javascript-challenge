/*
// Activity 1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

prod = 1
for(let i = 1; i <= 5; i++) {
    console.log(`${i} * 5 = ${prod = i * 5}`);
}

// Activity 2
let sum = 0;
let i = 1;
    
while (i <= 10) {
    sum += i;
    i++;
}
console.log("The sum of numbers from 1 to 10 is:", sum);

let i = 10;    
while (i >= 1) {
    console.log(i);
    i--;
}    

// Activity 3
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

let number = 5; 
let factorial = 1;
let i = 1;
do {
  factorial *= i;
  i++;
} while (i <= number);

console.log(`The factorial of ${number} is ${factorial}`);

// Activity 4
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row.trim()); // trim() removes the trailing space
}

// Activity 5
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the code inside the loop for the current iteration
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; // Exit the loop immediately
    }
    console.log(i);
}
*/