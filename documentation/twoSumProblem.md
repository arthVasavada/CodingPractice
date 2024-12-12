
# Two Sum Problem

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

### Constraints

- Each input will have **exactly one solution**.
- You may not use the same element twice.

### Examples

#### Example 1:

Input:

```plaintext
nums = [2, 7, 11, 15], target = 9
```

Output:

```plaintext
[0, 1]
```

Explanation:
`nums[0] + nums[1] = 2 + 7 = 9`

#### Example 2:

Input:

```plaintext
nums = [3, 2, 4], target = 6
```

Output:

```plaintext
[1, 2]
```

---

## Thought Process

### Step 1: Understand the Problem

1. **Input:** An array of integers `nums` and a target sum `target`.
2. **Output:** Indices of two numbers in the array that add up to the target.
3. **Key Observations:**
   - For a number `a` in the array, the other number `b` needed to make `a + b = target` is `b = target - a` (the complement).

### Step 2: Start with a Brute Force Solution

1. **Idea:** Check every possible pair of numbers to see if they add up to the target.
2. **Implementation:**
   ```typescript
   const twoSumBruteForce = (nums: number[], target: number): number[] => {
       for (let i = 0; i < nums.length; i++) {
           for (let j = i + 1; j < nums.length; j++) {
               if (nums[i] + nums[j] === target) {
                   return [i, j];
               }
           }
       }
       return [];
   };
   ```
3. **Complexity:**
   - **Time Complexity:** `O(n^2)` (nested loops)
   - **Space Complexity:** `O(1)` (no extra data structures used)

### Step 3: Optimize with Hashing

1. **Observation:**
   - Instead of scanning the entire array repeatedly, we can store previously seen numbers in a hash table for constant-time lookups.
2. **Plan:**
   - Use a hash map to store each number and its index as we iterate through the array.
   - For each number, calculate its complement (`target - num`).
   - If the complement is already in the hash map, we have found our solution.

### Step 4: Design the Optimized Algorithm

**Pseudocode:**

```plaintext
Create an empty hash map (numMap)
For each index and number in the array:
    Calculate complement = target - number
    If complement exists in the hash map:
        Return [index of complement, current index]
    Otherwise, add the current number and its index to the hash map
```

### Step 5: Implement the Optimized Solution

**TypeScript Code:**

```typescript
const twoSum = (nums: number[], target: number): number[] => {
    const numMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
    }

    return [];
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
```

### Step 6: Complexity Analysis

1. **Time Complexity:**
   - `O(n)` for a single pass through the array.
   - `O(1)` average time complexity for hash map operations.
2. **Space Complexity:**
   - `O(n)` for storing numbers in the hash map.

---

## Key Takeaways

1. **Identify Patterns:** Many problems involving pairs or complements can be solved efficiently using hash tables.
2. **Tradeoffs:** Hash tables use extra space but reduce computation time significantly.
3. **Reusability:** The hash map technique is a common pattern in solving problems like subsets, intersections, or pair matching.

---

## Next Steps

1. Extend the problem to handle cases like finding all pairs, triplets, or subsets.
2. Practice similar problems:
   - **Two Pointer Problems**
   - **Sliding Window Problems**
3. Apply the hash table pattern to real-world scenarios like database lookups or caching.
