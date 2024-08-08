// Activity 1
// Task 1 -> https://leetcode.com/problems/two-sum/submissions/1342421152/ 
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numToIndex = {}
    let results = []

    nums.forEach((element, index) => {
        let complement = target - element

        if (complement in numToIndex) {
            results = [numToIndex[complement], index]
        }

        numToIndex[element] = index
    })
    
    return results
};

// Activity 2
// Task 2 -> https://leetcode.com/problems/reverse-integer/submissions/1341932323/
/**
 * Time O(log(x)) | Space O(1)
 * @param {number} x
 * @return {number}
 */
var reverse = function(x, result = 0) {
    while (x !== 0) {
        const digit = (x % 10)

        if (isOutOfBounds(digit, result)) return 0;

        x = Math.trunc(x / 10);
        result = (result * 10) + digit;
    }

    return result;
};

const isOutOfBounds = (digit, result) => {
    const [ max, min ] = [ ((2 ** 31) - 1), (-(2 ** 31)) ];
    const [ maxProduct, maxRemainder ] = [ (max / 10), (max % 10) ];
    const [ minProduct, minRemainder ] = [ (min / 10), (min % 10) ];
    const isTarget = result === maxProduct;

    const isMaxOut = ((maxProduct < result) || (isTarget && (maxRemainder <= digit)));
    const isMinOut = ((result < minProduct) || (isTarget && (digit <= minRemainder)));

    return isMaxOut || isMinOut;
}


// Activity 3
// Task 3 -> https://leetcode.com/problems/palindrome-number/submissions/1342433379/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let arr = Array.from(String(x), Number);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

// Activity 4
// Task 4 --> https://leetcode.com/problems/merge-two-sorted-lists/submissions/1342926166
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sentinel = tail = new ListNode();

    while (list1 && list2) {/* Time O(N + M) */
        const isL2Greater = list1.val <= list2.val;
        const isL2Less = list2.val < list1.val;

        if (isL2Greater) {
            tail.next = list1;
            list1 = list1.next;
        }

        if (isL2Less) {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
};

// Activity 5
// Task 5 --> https://leetcode.com/problems/valid-parentheses/submissions/1342924395/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
    for (const bracket of s.split('')) {/* Time O(N) */
        const isParenthesis = bracket === '(';
        if (isParenthesis) stack.push(')');  /* Space O(N) */

        const isCurlyBrace = bracket === '{';
        if (isCurlyBrace) stack.push('}');   /* Space O(N) */

        const isSquareBracket = bracket === '[';
        if (isSquareBracket) stack.push(']');/* Space O(N) */

        const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
        if (isOpenPair) continue;

        const isEmpty = !stack.length;
        const isWrongPair = stack.pop() !== bracket;
        const isInvalid = isEmpty || isWrongPair;
        if (isInvalid) return false;
    }

    return (stack.length === 0);
};


