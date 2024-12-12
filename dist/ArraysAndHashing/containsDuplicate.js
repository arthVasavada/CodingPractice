"use strict";
const containsDuplicate = (nums) => {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num))
            return true;
        seen.add(num);
    }
    return false;
};
// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 1])); // true
