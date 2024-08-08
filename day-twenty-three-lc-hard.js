// Activity 1
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * Time O(log(N * M)) | Space O(N)
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const canSwap = nums2.length < nums1.length;
    if (canSwap) [nums1, nums2] = [nums2, nums1];

    let [left, right] = [0, nums1.length - 1];
    const totalLength = nums1.length + nums2.length;
    const mid = totalLength >> 1;
    const isEven = totalLength % 2 === 0;

    while (true) {
        const mid1 = left + right;
        const mid2 = mid - mid1 - 2;
        const { aLeft, aRight, bLeft, bRight } = getPointers(
            nums1,
            mid1,
            nums2,
            mid2
        );

        const isTarget = aLeft <= bRight && bLeft <= aRight;
        if (isTarget)
            return isEven
                ? (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
                : Math.min(aRight, bRight);

        const isTargetGreater = aLeft <= bRight;
        if (isTargetGreater) left = mid1 + 1;

        const isTargetLess = bRight < aLeft;
        if (isTargetLess) right = mid1 - 1;
    }
};

const getPointers = (nums1, mid1, nums2, mid2) => {
    const getLeft = (nums, index) => (0 <= index ? nums[index] : -Infinity);

    const [aLeft, bLeft] = [getLeft(nums1, mid1), getLeft(nums2, mid2)];

    const getRight = (nums, index) =>
        index + 1 < nums.length ? nums[index + 1] : Infinity;

    const [aRight, bRight] = [getRight(nums1, mid1), getRight(nums2, mid2)];

    return { aLeft, aRight, bLeft, bRight };
};

// Activity 2
/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Time O(N) | Space O(N)
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let previous = null;

    for (let i = 0; i < lists.length; i++) {
        previous = mergeTwoLists(previous, lists[i]);
    }

    return previous;
};

var mergeTwoLists = function(list1, list2) {
    let sentinel = tail = new ListNode(0);

    while (list1 && list2) {
        const canAddL1 = list1.val <= list2.val;
        if (canAddL1) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
};

// Activity 3
/**
 * Linear
 * Time O(n) | Space O(n) 
 * https://leetcode.com/problems/trapping-rain-water
 * @param {number[]} height
 * @return {number}
 * 
 */
var trap = function(height) {
    
    const maxLeft = [];
    const maxRight = [];
    const minLeftRight = [];

    let current = 0;
    for(let i = 0; i < height.length; i++) {
     maxLeft.push(current);
     current  = Math.max(current, height[i]);
    }
    current = 0;
    for(let i = height.length - 1; i > -1; i--) {
        maxRight.push(current);
        current = Math.max(current, height[i]);
    }
    // because the elements were added reverse. 
    maxRight.reverse();

    for(let i = 0; i < height.length; i++) {
        const minofLeftRight = Math.min(maxLeft[i],maxRight[i]);
        minLeftRight.push(minofLeftRight);
    }

    let water = 0;
    for(let i = 0; i < height.length; i++) {
        if(minLeftRight[i] - height[i] > 0) {
            water += minLeftRight[i] - height[i];
        }
    }

    return water;
};

// Activity 4- N-Queens
// Activity 5- Word ladder
// Lack of Experience with Leetcode, cant solve it. 
// Will solve soon.