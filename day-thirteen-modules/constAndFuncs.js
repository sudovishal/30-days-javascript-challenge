// Constants
export const PI = 3.14159;
export const GRAVITY = 9.81;
export const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Functions
export function calculateCircleArea(radius) {
    return PI * radius * radius;
}

export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function reverseString(str) {
    return str.split('').reverse().join('');
}
