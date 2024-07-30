// Activity 1
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // If no swapping occurred, array is already sorted
        if (!swapped) break;
    }

    return arr;
}


const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr1);
console.log("Sorted array:", bubbleSort(arr1));


function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            // Swap elements
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr2);
console.log("Sorted array:", selectionSort(arr2));

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr3);
console.log("Sorted array:", quickSort(arr3));


// Activity 2
// Task 4
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Return -1 if the target is not found
}


const array = [5, 2, 9, 1, 7, 6, 3];
const target = 7;
const result = linearSearch(array, target);
console.log(`Linear Search: Target ${target} found at index ${result}`);

// Task 5
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;
const binaryResult = binarySearch(sortedArray, targetValue);
console.log(`Binary Search: Target ${targetValue} found at index ${binaryResult}`);


// Activity 3
// Task 6
function countCharacters(str) {
    const charCount = {};
    for(let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;   

    }
    console.log(charCount);

}

// Task 7
function longestSubstringWithoutRepeats(str) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map();

    for (let end = 0; end < str.length; end++) {
        if (charMap.has(str[end])) {
            start = Math.max(start, charMap.get(str[end]) + 1);
        }
        charMap.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(`Length of longest substring without repeats: ${maxLength}`);
    return maxLength;
}

// Activity 4
// https://leetcode.com/problems/rotate-array/description/
const rotate = function(nums, k) {
    
    // if the k exceeds the length of nums.
    k = k % nums.length;

    nums.reverse();
    reversePortionOfArray(nums, 0, k - 1);
    reversePortionOfArray(nums,k, nums.length - 1);
};

var reversePortionOfArray = function(nums,start,end) {
    while(start < end) {
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }    
}

// https://leetcode.com/problems/merge-sorted-array
const merge = function(nums1, m, nums2, n) {

    let k = m + n - 1;
    m = m - 1;
    n = n - 1;
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n];
            n--;
        }
        k--;
    }

    if (n >= 0) {
        while (n >= 0) {
            nums1[k] = nums2[n];
            n--;
            k--;
        }
    }
};