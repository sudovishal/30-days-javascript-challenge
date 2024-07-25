// Activity 1
// Task 1
function throwError() {
  throw new Error("Hello this is an error");
}
try {
  throwError();
} catch (err) {
  console.error("Caught an error: ", err.message);
}

// Task 2
function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return numerator / denominator;
}
try {
  console.log("Result: ", divideNumbers(10, 0));
} catch (err) {
  console.log(err.message);
}

// Activity 2
// Task 3
function TryCatchFinally() {
  try {
  console.log("In the try block");
  throw new Error("F, an Error Occured! :( ")
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("In the finally block");
  
  }
}
TryCatchFinally();

// Activity 3
// Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Caught custom error:", error.message);
  } else {
    console.log("Caught unexpected error:", error);
  }
}

// Task 5
function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new CustomError("Input cannot be empty");
  }
  return input;
}

try {
  const userInput = validateInput("");
  console.log("Valid input:", userInput);
} catch (error) {
  console.log("Validation error:", error.message);
}

// Activity 4
// Task 6
function randomPromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  });
}

randomPromise()
  .then(result => console.log(result))
  .catch(error => console.log("Caught error:", error));

// Task 7
async function handleRandomPromise() {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.log("Async/await error handling:", error);
  }
}

handleRandomPromise();


// Activity 5
// Task 8
fetch('https://api.example.com/nonexistent-endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log('Fetch error:', error.message);
  });

// Task 9
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/nonexistent-endpoint');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Async fetch error:', error.message);
  }
}

fetchData();