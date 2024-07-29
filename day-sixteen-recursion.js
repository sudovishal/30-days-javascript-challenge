// Activity 1
// Task 1
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(10)); // 3628800

// Task 2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(7));  // 13
console.log(fibonacci(10)); // 55

// Activity 2
// Task 3
function arraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + arraySum(arr.slice(1));
}

console.log(arraySum([1, 2, 3, 4, 5]));     // 15
console.log(arraySum([]));                  // 0
console.log(arraySum([10, -5, 7, 15, -2])); // 25

// Task 4
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return Math.max(arr[0], findMax(arr.slice(1)));
}

console.log(findMax([1, 5, 3, 9, 2]));    // 9
console.log(findMax([10]));               // 10
console.log(findMax([-5, -2, -10, -1]));  // -1

// Activity 3
// Task 5
function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));  // "olleh"
console.log(reverseString(""));       // ""
console.log(reverseString("abcd"));   // "dcba"

// Task 6
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("a"));        // true

// Activity 4
// Task 7
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7));   // 3
console.log(binarySearch(sortedArray, 10));  // -1
console.log(binarySearch(sortedArray, 15));  // 7

// Task 8
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));  // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6));     // 0
console.log(countOccurrences([5, 5, 5, 5, 5], 5));     // 5

// Activity 5
// Task 9
