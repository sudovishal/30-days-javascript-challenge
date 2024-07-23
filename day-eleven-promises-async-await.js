// Activity 1
// Task 1
const delayedMessage = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello From the Promise.");
  }, 2000);
});
delayedMessage.then((message) => {
  console.log(message);
});

// Task 2
const delayedError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Oops! Something went wrong.");
  }, 2000);
});

delayedError
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });

// Actitivty 2
// Task 3
function simulateServerOperation(operation, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(operation);
      resolve();
    }, delay);
  });
}

simulateServerOperation("Connecting to server...", 1000)
  .then(() => simulateServerOperation("Authenticating user...", 800))
  .then(() => simulateServerOperation("Fetching user data...", 1200))
  .then(() => simulateServerOperation("Processing user data...", 600))
  .then(() => {
    console.log("Operation completed successfully!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

/*    
        Promise chaining is a technique used to perform a sequence of asynchronous operations, where each operation depends on the result of the previous one. This allows you to write cleaner, more readable code for complex asynchronous workflows.
Key points about promise chaining:

Each .then() in a chain returns a new promise.
The value returned from a .then() callback becomes the resolved value for the next promise in the chain.
If a promise in the chain rejects, execution jumps to the nearest .catch() handler.
You can chain as many .then() calls as needed.
*/

// Activity 3
// Task 4
// Helper function to create a promise that resolves after a delay
function delayedResolve(value, delay) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
  }
  
  // Async function that waits for a promise to resolve
  async function waitAndLog() {
    console.log("Starting to wait...");
    const result = await delayedResolve("Hello from the future!", 2000);
    console.log("Resolved value:", result);
  }
  
  // Call the async function
  waitAndLog();
  

// Task 5
// Helper function to create a promise that rejects after a delay
function delayedReject(error, delay) {
    return new Promise((resolve, reject) => setTimeout(() => reject(error), delay));
  }
  
  // Async function that handles a rejected promise
  async function handleRejection() {
    try {
      console.log("Starting operation that will fail...");
      await delayedReject(new Error("Something went wrong!"), 2000);
      console.log("This line will not be reached");
    } catch (error) {
      console.error("Caught an error:", error.message);
    } finally {
      console.log("Operation completed, regardless of outcome");
    }
  }
  
  // Call the async function
  handleRejection();
  
// Activity 4
// Task 6
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('Task 6 - Fetch with Promises:', data))
  .catch(error => console.error('Error:', error));

// Task 7
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('Task 7 - Fetch with Async/Await:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();

// Activity 5
// Task 8
const promise1 = Promise.resolve('First');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 100));
const promise3 = Promise.resolve('Third');

Promise.all([promise1, promise2, promise3])
  .then(values => console.log('Task 8 - Promise.all:', values))
  .catch(error => console.error('Error:', error));

// Task 9
Promise.race([promise1, promise2, promise3])
  .then(value => console.log('Task 9 - Promise.race:', value))
  .catch(error => console.error('Error:', error));

