// Activity 1
// Task 1
function outerFunction(num1) {
  return function innerFunction(num2) {
    return num1 + num2;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3));

//   Task 2
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

// Activity 2
//   Task 3
function createIdGenerator() {
  let lastId = 0;
  return function () {
    lastId++;
    return `ID_${lastId}`;
  };
}

const generateId = createIdGenerator();
console.log(generateId());
console.log(generateId());

// Task 4
function createGreeter(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetAlice = createGreeter("Victor");
greetAlice();

// Activity 3
// Task 5
function createFunctionArray() {
  const functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log(i);
    });
  }

  return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // Output: 0
functionArray[3](); // Output: 3

//   Task 6
const itemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return [...items];
    },
  };
})();

itemManager.addItem("apple");
itemManager.addItem("banana");
console.log(itemManager.listItems()); // Output: ['apple', 'banana']
itemManager.removeItem("apple");
console.log(itemManager.listItems()); // Output: ['banana']


// Activity 5
// Task 7
function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    };
  }
  
  const expensiveFunction = (x, y) => {
    console.log('Computing...');
    return x + y;
  };
  
  const memoizedFunction = memoize(expensiveFunction);
  
  console.log(memoizedFunction(2, 3)); // Output: Computing... 5
  console.log(memoizedFunction(2, 3)); // Output: 5 (retrieved from cache)

// Task 8
function memoizedFactorial() {
    const cache = {};
    
    function factorial(n) {
      if (n in cache) {
        return cache[n];
      }
      if (n <= 1) {
        return 1;
      }
      const result = n * factorial(n - 1);
      cache[n] = result;
      return result;
    }
    
    return factorial;
  }
  
  const factorial = memoizedFactorial();
  
  console.log(factorial(5)); // Output: 120
  console.log(factorial(5)); // Output: 120 (retrieved from cache)
  