// Activity 1
// Task 1
// localStorage.setItem('name', 'Vishal');

// const value = localStorage.getItem('name');
// console.log(value);
// // Task 2
// const profileObj = {
    //     email:"vish@gmail.com",
    //     phone : "1234567890"
    // }
// localStorage.setItem("email", JSON.stringify(profileObj.email))
// localStorage.setItem("phone", JSON.stringify(profileObj.phone))

// const objectValue = JSON.parse(localStorage.getItem("email"));
// console.log(objectValue);

// Activity 2
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('userForm');
    const savedName = document.getElementById('savedName');
    const savedEmail = document.getElementById('savedEmail');

    // Load saved data on page load
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    if (name) savedName.textContent = `Name: ${name}`;
    if (email) savedEmail.textContent = `Email: ${email}`;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;

        // Save data to localStorage
        localStorage.setItem('name', nameInput);
        localStorage.setItem('email', emailInput);

        // Update displayed data
        savedName.textContent = `Name: ${nameInput}`;
        savedEmail.textContent = `Email: ${emailInput}`;
    });


});

function removeItemFromLocalStorage(itemKey) {
    console.log('LocalStorage before removal:', localStorage);

    localStorage.removeItem(itemKey);

    console.log('LocalStorage after removal:', localStorage);
}

// Usage example:
removeItemFromLocalStorage('name');

// Activity 3
// Task 5
// Save a string value to sessionStorage
sessionStorage.setItem('token', 'super-secret-string');

// Retrieve the string value from sessionStorage
const retrievedString = sessionStorage.getItem('token');

// Log the retrieved value
console.log('Retrieved string:', retrievedString);

// Task 6
// Define an object to store in sessionStorage
const user = {
    name: 'Vishal Shinde',
    email: 'vishal.shinde@example.com',
    age: 23
};

// Convert the object to a JSON string and save it to sessionStorage
sessionStorage.setItem('user', JSON.stringify(user));

// Retrieve the JSON string from sessionStorage
const userString = sessionStorage.getItem('user');

// Parse the JSON string back into an object
const retrievedUser = JSON.parse(userString);

// Log the parsed object
console.log('Retrieved user object:', retrievedUser);

// Activity 4
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('userForm');
    const savedName = document.getElementById('savedName');
    const savedEmail = document.getElementById('savedEmail');

    // Load saved data on page load
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    if (name) savedName.textContent = `Name: ${name}`;
    if (email) savedEmail.textContent = `Email: ${email}`;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;

        // Save data to sessionStorage
        sessionStorage.setItem('name', nameInput);
        sessionStorage.setItem('email', emailInput);

        // Update displayed data
        savedName.textContent = `Name: ${nameInput}`;
        savedEmail.textContent = `Email: ${emailInput}`;
    });
});
// Task 8
function removeItemFromSessionStorage(itemKey) {
    console.log('SessionStorage before removal:', sessionStorage);

    sessionStorage.removeItem(itemKey);

    console.log('SessionStorage after removal:', sessionStorage);
}

// Example usage:
removeItemFromSessionStorage('name');
removeItemFromSessionStorage('email');

// Activity 5
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);

    console.log(`Value in localStorage: ${localStorageValue}`);
    console.log(`Value in sessionStorage: ${sessionStorageValue}`);
}


saveToBothStorages('aLocalStoreKey', 'alocalStorageValue');

// Task 10
function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();

    console.log('localStorage is now:', localStorage);
    console.log('sessionStorage is now:', sessionStorage);
}

clearAllStorages();
