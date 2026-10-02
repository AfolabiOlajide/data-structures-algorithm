# Your complete TypeScript DSA roadmap

I would divide your learning into **10 phases**.

| Phase | Topics                                                  | Goal                            |
| ----- | ------------------------------------------------------- | ------------------------------- |
| 1     | Complexity, Arrays, Strings, Sets, Maps                 | Foundations                     |
| 2     | Two Pointers, Sliding Window, Prefix Sum, Binary Search | Array/string interview patterns |
| 3     | Stack, Queue, Deque, Linked List                        | Linear data structures          |
| 4     | Recursion, Backtracking                                 | Recursive problem solving       |
| 5     | Sorting, Divide & Conquer                               | Algorithmic thinking            |
| 6     | Trees, BST, DFS, BFS, Heaps, Tries                      | Hierarchical structures         |
| 7     | Graphs, BFS, DFS, Topological Sort, Union Find          | Graph problem solving           |
| 8     | Dijkstra, MST, shortest paths                           | Advanced graph algorithms       |
| 9     | Greedy, Dynamic Programming                             | Optimization problems           |
| 10    | Advanced patterns + interview preparation               | Interview readiness             |

There are several important topics missing from your original list that I strongly recommend including:

- Strings
- Sets
- Binary search
- Prefix sums
- Matrices / grids
- Deque
- Priority queues
- Monotonic stack
- Monotonic queue
- Intervals
- Backtracking
- Greedy algorithms
- Dynamic programming
- Trie
- Union Find / Disjoint Set
- Topological sorting
- Minimum spanning trees
- Bit manipulation
- Divide and conquer
- Quickselect
- Kadane's algorithm
- Cycle detection
- Fast/slow pointers
- Segment Trees and Fenwick Trees later as advanced material

---

# How I want you to think about DSA

One of the biggest mistakes beginners make is thinking:

> "I need to memorize algorithms."

You don't.

You need to develop four abilities.

### 1. Understand the data

Ask:

> What kind of information am I working with?

Is it sequential?

```text
[2, 5, 7, 9]
```

Maybe an array.

Is it hierarchical?

```text
       10
      /  \
     5    20
```

Probably a tree.

Are things connected arbitrarily?

```text
A --- B
|     |
C --- D
```

Probably a graph.

---

### 2. Recognize the pattern

Suppose an interviewer says:

> Find two numbers in a sorted array that add up to 10.

Your brain should eventually say:

> Sorted array + pair search → Two Pointers.

Instead of trying random loops.

---

### 3. Choose the right data structure

Suppose you're repeatedly asking:

> Have I seen this value before?

An array search costs roughly:

```text
O(n)
```

A hash set can usually answer:

```text
O(1)
```

Choosing the structure often determines whether your solution passes.

---

### 4. Analyze efficiency

You'll constantly compare solutions such as:

```text
O(n²)
```

versus

```text
O(n)
```

A working algorithm isn't necessarily a good algorithm.

---

# Phase 1 — Complexity

This is where I recommend starting.

Before learning data structures, you need to understand **how we measure algorithms**.

Imagine these two solutions.

```ts
function findNumber(nums: number[], target: number): boolean {
    for (const num of nums) {
        if (num === target) {
            return true;
        }
    }

    return false;
}
```

If there are:

```text
10 elements → potentially 10 checks
100 elements → potentially 100 checks
1,000,000 elements → potentially 1,000,000 checks
```

The work increases proportionally with the input.

We call that:

```text
O(n)
```

---

# Big O notation

Big O describes how the runtime or memory requirements of an algorithm **grow as the input becomes larger**.

You'll commonly encounter:

| Complexity | Name         | General quality      |
| ---------- | ------------ | -------------------- |
| O(1)       | Constant     | Excellent            |
| O(log n)   | Logarithmic  | Excellent            |
| O(n)       | Linear       | Good                 |
| O(n log n) | Linearithmic | Good                 |
| O(n²)      | Quadratic    | Sometimes acceptable |
| O(n³)      | Cubic        | Usually expensive    |
| O(2ⁿ)      | Exponential  | Very expensive       |
| O(n!)      | Factorial    | Extremely expensive  |

---

# O(1) — Constant time

```ts
function firstElement(nums: number[]): number {
    return nums[0];
}
```

Whether the array contains:

```text
10
1,000
1,000,000
```

elements doesn't matter.

You're performing one lookup.

```text
O(1)
```

---

# O(n) — Linear time

```ts
function contains(nums: number[], target: number): boolean {
    for (const num of nums) {
        if (num === target) {
            return true;
        }
    }

    return false;
}
```

Worst case:

```text
n elements → n checks
```

Therefore:

```text
O(n)
```

---

# O(n²) — Quadratic

Nested loops often produce this.

```ts
function printPairs(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[i], nums[j]);
        }
    }
}
```

For 100 elements:

```text
100 × 100 = 10,000
```

For 1,000:

```text
1,000 × 1,000 = 1,000,000
```

Complexity:

```text
O(n²)
```

---

# O(log n)

This is extremely important.

Binary search is the classic example.

Suppose:

```text
[1,2,3,4,5,6,7,8,9,10]
```

You're searching for `8`.

Instead of checking every number, check the middle.

```text
5
```

Since:

```text
8 > 5
```

discard half.

Now:

```text
[6,7,8,9,10]
```

Check middle again.

Every operation eliminates approximately half the search space.

Complexity:

```text
O(log n)
```

This scales incredibly well.

For approximately one billion elements:

```text
log₂(1,000,000,000) ≈ 30
```

Binary search can potentially find something in only ~30 comparisons.

---

# O(n log n)

Efficient comparison-based sorting algorithms commonly have this complexity.

Examples:

```text
Merge Sort
Heap Sort
Average Quick Sort
```

We'll explore why later.

---

# Time complexity vs space complexity

These are different.

## Time complexity

How much **work** does the algorithm perform?

## Space complexity

How much **additional memory** does it require?

Consider:

```ts
function doubleNumbers(nums: number[]): number[] {
    const result: number[] = [];

    for (const num of nums) {
        result.push(num * 2);
    }

    return result;
}
```

Time:

```text
O(n)
```

Additional memory:

```text
O(n)
```

because `result` grows with `nums`.

Now:

```ts
function doubleNumbers(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 2;
    }
}
```

Time:

```text
O(n)
```

Extra space:

```text
O(1)
```

because we modify the original array.

This concept is called **in-place modification**.

---

# Important Big O simplification rules

Suppose:

```text
O(3n)
```

We write:

```text
O(n)
```

Constants are ignored.

Similarly:

```text
O(n² + n)
```

becomes:

```text
O(n²)
```

because `n²` dominates as `n` gets large.

And:

```text
O(5n² + 20n + 1000)
```

becomes:

```text
O(n²)
```

---

# A very important interview habit

Whenever you solve a problem, get into the habit of saying:

> Time Complexity: O(...)

> Space Complexity: O(...)

Eventually this should become automatic.

---

# Phase 2 — Arrays

Arrays are arguably the most important DSA structure because so many interview patterns operate on arrays.

In TypeScript:

```ts
const numbers: number[] = [10, 20, 30, 40];
```

Conceptually:

```text
Index:   0   1   2   3

       +---+---+---+---+
Array: |10 |20 |30 |40 |
       +---+---+---+---+
```

Access:

```ts
numbers[2];
```

returns:

```text
30
```

Array indexing is approximately:

```text
O(1)
```

because arrays support direct indexed access.

---

# Array operation complexity

You should eventually know this table almost instinctively.

| Operation       | Typical complexity |
| --------------- | -----------------: |
| Access by index |               O(1) |
| Update by index |               O(1) |
| Search          |               O(n) |
| `push()`        |     O(1) amortized |
| `pop()`         |               O(1) |
| `shift()`       |               O(n) |
| `unshift()`     |               O(n) |
| Insert middle   |               O(n) |
| Delete middle   |               O(n) |

Why is:

```ts
array.shift();
```

expensive?

Consider:

```text
[10,20,30,40]
```

Remove `10`.

Now all remaining elements effectively move:

```text
[20,30,40]
```

That movement creates `O(n)` work.

This distinction matters significantly when implementing queues in JavaScript/TypeScript.

---

# Strings

Strings behave similarly to arrays conceptually.

```ts
const word = "hello";

console.log(word[1]);
```

Output:

```text
e
```

Many string interview problems are actually array-pattern problems involving:

```text
two pointers
sliding window
frequency maps
prefix techniques
```

---

# Hash Maps

One of the most useful tools in all of LeetCode.

TypeScript:

```ts
const map = new Map<string, number>();

map.set("apple", 3);
map.set("banana", 5);

console.log(map.get("apple"));
```

Returns:

```text
3
```

Typical operations:

```ts
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
```

Average complexity:

```text
O(1)
```

---

# Map vs JavaScript object

You'll sometimes see:

```ts
const frequencies: Record<string, number> = {};
```

and sometimes:

```ts
const frequencies = new Map<string, number>();
```

For interview DSA, I recommend becoming very comfortable with `Map`.

It supports arbitrary key types and makes intent clearer.

---

# Frequency map

This is one of the most important DSA techniques.

Question:

> Count how many times each value occurs.

```ts
function frequencies(nums: number[]): Map<number, number> {
    const freq = new Map<number, number>();

    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    return freq;
}
```

For:

```text
[1,2,2,3,3,3]
```

you get:

```text
1 → 1
2 → 2
3 → 3
```

You'll use this technique constantly.

---

# Hash Set

When you only care whether something exists:

```ts
const seen = new Set<number>();
```

Usage:

```ts
seen.add(5);
seen.has(5);
seen.delete(5);
```

Average:

```text
O(1)
```

---

# Your first major interview problem: Two Sum

Given:

```text
nums = [2, 7, 11, 15]
target = 9
```

return indices of two numbers whose sum equals `9`.

The obvious solution is nested loops.

```ts
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}
```

Complexity:

```text
O(n²)
```

But there is a better insight.

For every number:

```text
current + needed = target
```

Therefore:

```text
needed = target - current
```

When we're at `7`:

```text
needed = 9 - 7
       = 2
```

Have we already encountered `2`?

A hash map answers that in approximately `O(1)`.

```ts
function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        seen.set(nums[i], i);
    }

    return [];
}
```

Complexity:

```text
Time: O(n)
Space: O(n)
```

That transformation:

```text
O(n²)
↓
O(n)
```

is exactly the type of reasoning interviewers care about.

---

# Two Pointers

Two pointers usually means maintaining two positions in a sequence.

For a sorted array:

```text
[1,2,3,4,6]
```

Find two numbers that sum to `6`.

Start:

```text
L               R
1  2  3  4  6
```

Calculate:

```text
1 + 6 = 7
```

Too large.

Move the right pointer left.

```text
L           R
1  2  3  4  6
```

Now:

```text
1 + 4 = 5
```

Too small.

Move left pointer right.

```text
   L        R
1  2  3  4  6
```

Now:

```text
2 + 4 = 6
```

Found.

Implementation:

```ts
function twoSumSorted(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}
```

Time:

```text
O(n)
```

Space:

```text
O(1)
```

---

# When should Two Pointers enter your mind?

Clues include:

```text
sorted array
pair
opposite ends
palindrome
remove duplicates
partitioning
```

Examples you'll eventually solve:

- Valid Palindrome
- Two Sum II
- 3Sum
- Container With Most Water
- Remove Duplicates From Sorted Array
- Trapping Rain Water

---

# Sliding Window

Sliding Window is primarily used for **contiguous sections** of arrays or strings.

Suppose:

> Find the largest sum of 3 consecutive elements.

Input:

```text
[2,1,5,1,3,2]
```

Brute force repeatedly calculates:

```text
2+1+5
1+5+1
5+1+3
1+3+2
```

But adjacent windows overlap.

First window:

```text
[2,1,5]
```

sum:

```text
8
```

Move one position:

```text
[1,5,1]
```

Instead of recalculating everything:

```text
newSum = oldSum - outgoing + incoming
```

So:

```text
8 - 2 + 1 = 7
```

Implementation:

```ts
function maxSumSubarray(nums: number[], k: number): number {
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    for (let right = k; right < nums.length; right++) {
        const left = right - k;

        windowSum += nums[right];
        windowSum -= nums[left];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
```

Time:

```text
O(n)
```

rather than potentially:

```text
O(nk)
```

---

# Sliding Window has two major forms

### Fixed-size window

Examples:

> Maximum sum of exactly K elements.

Window size never changes.

### Variable-size window

Example:

> Longest substring without repeating characters.

Pointers move depending on constraints.

```text
left → shrink window
right → expand window
```

This pattern is extremely important.

---

# Stack

A stack follows:

```text
LIFO
```

Last In, First Out.

Think of plates:

```text
      ↓ push

     [C]
     [B]
     [A]

      ↑ pop
```

In TypeScript:

```ts
const stack: number[] = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
```

Returns:

```text
30
```

Stacks appear in:

```text
parentheses
undo systems
expression parsing
DFS
monotonic stack problems
function calls
```

---

# Classic stack problem: Valid Parentheses

Input:

```text
"({[]})"
```

Every closing bracket must match the most recently opened bracket.

That's LIFO behaviour.

```ts
function isValid(s: string): boolean {
    const stack: string[] = [];

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
```

---

# Queue

Queue follows:

```text
FIFO
```

First In, First Out.

Like people waiting:

```text
A → B → C → D
```

A leaves first.

Queues are extremely important for:

```text
BFS
scheduling
task processing
message queues
level-order tree traversal
```

One caution in TypeScript:

```ts
array.shift();
```

is `O(n)`.

So for algorithmic BFS, a better approach is often:

```ts
const queue: number[] = [];
let head = 0;

queue.push(10);
queue.push(20);

const current = queue[head++];
```

This prevents repeatedly shifting the whole array.

---

# Linked Lists

A linked list doesn't store its elements contiguously like an array.

Instead:

```text
10 → 20 → 30 → 40 → null
```

Each node contains:

```text
value
next
```

TypeScript:

```ts
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}
```

Create one:

```ts
const third = new ListNode(30);
const second = new ListNode(20, third);
const first = new ListNode(10, second);
```

---

# Arrays vs linked lists

| Operation           | Array | Linked List |
| ------------------- | ----: | ----------: |
| Access index        |  O(1) |        O(n) |
| Search              |  O(n) |        O(n) |
| Insert at beginning |  O(n) |        O(1) |
| Delete beginning    |  O(n) |        O(1) |

Linked lists introduce several important interview patterns:

```text
fast/slow pointers
dummy nodes
reversal
cycle detection
merging
```

---

# Fast and Slow Pointers

Consider a linked list containing a cycle:

```text
1 → 2 → 3 → 4
        ↑       ↓
        ← ← ← ←
```

Use:

```text
slow → moves 1 step
fast → moves 2 steps
```

If there's a cycle, they eventually meet.

```ts
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
```

This is Floyd's Cycle Detection Algorithm.

---

# Recursion

Recursion is when a function calls itself.

Example:

```ts
function countdown(n: number): void {
    if (n === 0) {
        return;
    }

    console.log(n);

    countdown(n - 1);
}
```

The most important concept isn't simply "calling yourself."

Every recursive function needs:

```text
1. Base case
2. Recursive case
3. Progress toward the base case
```

For factorial:

```text
5! = 5 × 4 × 3 × 2 × 1
```

We can express:

```text
n! = n × (n-1)!
```

Implementation:

```ts
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

---

# Why recursion matters

Because these structures are naturally recursive:

```text
Trees
Graphs
Backtracking
Divide-and-conquer
Dynamic programming
```

If recursion feels uncomfortable, tree problems will feel much harder than they need to.

---

# Binary Trees

A binary tree node can have at most two children.

```text
        10
       /  \
      5    15
     / \
    2   7
```

TypeScript:

```ts
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        value: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
```

---

# Tree traversal

One of the most important concepts in DSA.

There are two major families:

```text
DFS
BFS
```

DFS then has:

```text
Preorder
Inorder
Postorder
```

Consider:

```text
        10
       /  \
      5    15
```

### Preorder

```text
Root → Left → Right
```

Result:

```text
10, 5, 15
```

```ts
function preorder(root: TreeNode | null): void {
    if (root === null) return;

    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}
```

### Inorder

```text
Left → Root → Right
```

Result:

```text
5, 10, 15
```

```ts
function inorder(root: TreeNode | null): void {
    if (root === null) return;

    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}
```

### Postorder

```text
Left → Right → Root
```

Result:

```text
5, 15, 10
```

```ts
function postorder(root: TreeNode | null): void {
    if (root === null) return;

    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}
```

---

# Binary Search Trees

A Binary Search Tree adds an ordering property.

For every node:

```text
values on left < node
values on right > node
```

Example:

```text
           8
         /   \
        3     10
       / \      \
      1   6      14
```

An important consequence:

> Inorder traversal of a BST produces sorted values.

```text
1 3 6 8 10 14
```

Searching a balanced BST averages:

```text
O(log n)
```

But a badly skewed tree:

```text
1
 \
  2
   \
    3
     \
      4
```

may become:

```text
O(n)
```

---

# Breadth First Search

BFS explores things level-by-level.

Tree:

```text
        A
       / \
      B   C
     / \
    D   E
```

BFS:

```text
A
B C
D E
```

Traversal:

```text
A B C D E
```

BFS uses a:

```text
Queue
```

Implementation:

```ts
function bfs(root: TreeNode | null): number[] {
    if (root === null) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];

        result.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}
```

---

# Depth First Search

DFS explores deeply before coming back.

DFS can use:

```text
Recursion
or
Stack
```

Tree recursive traversal is already DFS.

A general pattern is:

```ts
function dfs(node: TreeNode | null): void {
    if (node === null) return;

    // process node

    dfs(node.left);
    dfs(node.right);
}
```

---

# Heap / Priority Queue

A heap is not the same thing as a sorted array.

A **min heap** guarantees:

```text
smallest element is at the top
```

Example:

```text
        1
       / \
      3   2
     / \
    7   5
```

The children are not necessarily sorted relative to one another.

What matters is:

```text
parent <= children
```

for a min heap.

Major complexity:

| Operation      | Complexity |
| -------------- | ---------: |
| Peek minimum   |       O(1) |
| Insert         |   O(log n) |
| Remove minimum |   O(log n) |

Heaps appear constantly in:

```text
Top K problems
Dijkstra
task scheduling
merge K sorted lists
median problems
priority queues
```

Unlike languages such as Python, interview TypeScript historically hasn't always provided the exact heap API people expect, so it's useful to understand how to implement one yourself.

We'll eventually build one from scratch.

---

# Sorting Algorithms

You should understand several.

| Algorithm      |   Typical time |        Space | Stable?    |
| -------------- | -------------: | -----------: | ---------- |
| Bubble Sort    |          O(n²) |         O(1) | Yes        |
| Selection Sort |          O(n²) |         O(1) | No         |
| Insertion Sort |          O(n²) |         O(1) | Yes        |
| Merge Sort     |     O(n log n) |         O(n) | Yes        |
| Quick Sort     | O(n log n) avg | O(log n) avg | Usually No |
| Heap Sort      |     O(n log n) |         O(1) | No         |

You should **implement the simple algorithms to understand them**, but spend considerably more interview attention on:

```text
Merge Sort
Quick Sort
Quickselect
Heap concepts
```

---

# Graphs

Graphs are one of the biggest jumps in DSA.

A graph has:

```text
vertices/nodes
edges/connections
```

Example:

```text
A ----- B
|       |
|       |
C ----- D
```

Graphs can represent:

```text
social networks
roads
computer networks
flight routes
dependencies
web pages
friend relationships
```

---

# Graph representations

Two major representations exist.

### Adjacency Matrix

```text
    A B C
A   0 1 1
B   1 0 0
C   1 0 0
```

### Adjacency List

Usually more common in interviews.

```ts
const graph = new Map<string, string[]>([
    ["A", ["B", "C"]],
    ["B", ["A"]],
    ["C", ["A"]],
]);
```

---

# Graph DFS

```ts
function dfs(
    graph: Map<string, string[]>,
    node: string,
    visited = new Set<string>(),
): void {
    if (visited.has(node)) return;

    visited.add(node);
    console.log(node);

    for (const neighbor of graph.get(node) ?? []) {
        dfs(graph, neighbor, visited);
    }
}
```

Notice something new:

```text
visited
```

Trees generally don't need this because they don't contain arbitrary cycles.

Graphs can.

Without `visited`, you might loop forever:

```text
A → B → A → B → A...
```

---

# Graph BFS

```ts
function bfs(graph: Map<string, string[]>, start: string): string[] {
    const visited = new Set<string>([start]);
    const queue: string[] = [start];
    const result: string[] = [];

    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];

        result.push(node);

        for (const neighbor of graph.get(node) ?? []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}
```

---

# BFS vs DFS

You'll eventually develop intuition for choosing between them.

| Situation                          | Often consider |
| ---------------------------------- | -------------- |
| Shortest path in unweighted graph  | BFS            |
| Explore connected components       | Either         |
| Tree depth                         | DFS            |
| Tree level order                   | BFS            |
| Maze shortest path                 | BFS            |
| Backtracking                       | DFS            |
| Detect/reason through dependencies | DFS            |
| Exhaustive path exploration        | DFS            |

---

# Dijkstra's Algorithm

Dijkstra answers:

> What is the shortest path from one node to other nodes in a graph with non-negative edge weights?

Suppose:

```text
A --4-- B
|       |
1       1
|       |
C --2-- D
```

Different edges have different costs.

BFS alone won't work correctly because BFS essentially treats edges as equal-cost.

Dijkstra repeatedly chooses the currently cheapest reachable node.

Conceptually:

```text
distance[A] = 0

distance[everything else] = infinity
```

Then relax edges:

```text
newDistance = distance[current] + edgeWeight
```

If:

```text
newDistance < existingDistance
```

update it.

A **min heap / priority queue** makes this efficient.

This is why I wouldn't teach you Dijkstra immediately.

You should first understand:

```text
Graphs
BFS
DFS
Weighted edges
Greedy thinking
Heaps
```

Then Dijkstra feels logical rather than magical.

---

# Binary Search

You didn't include this separately, but it is absolutely essential.

Classic implementation:

```ts
function binarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

But the advanced lesson is:

> Binary search isn't just about searching arrays.

It can solve questions asking:

```text
minimum possible X
maximum possible X
smallest feasible value
largest feasible value
```

This pattern is called **binary search on the answer**.

That's one of the differences between beginner and advanced DSA knowledge.

---

# Prefix Sum

Another extremely common pattern.

Array:

```text
[2,4,1,3]
```

Prefix sums:

```text
[2,6,7,10]
```

Meaning:

```text
prefix[i] = sum from 0 through i
```

Then a range sum can be calculated quickly.

Instead of repeatedly doing:

```text
O(n)
```

range queries become:

```text
O(1)
```

after:

```text
O(n)
```

preprocessing.

Prefix sums appear frequently in:

```text
subarray sums
range queries
matrix problems
hash-map subarray problems
```

---

# Backtracking

Backtracking explores possibilities and undoes decisions.

Classic example:

```text
Generate every permutation of [1,2,3].
```

Possible answers:

```text
123
132
213
231
312
321
```

The conceptual framework is:

```text
Choose
Explore
Undo
```

You'll eventually use it for:

```text
Subsets
Permutations
Combination Sum
N-Queens
Sudoku
Word Search
```

---

# Dynamic Programming

DP scares many developers unnecessarily.

The central idea is:

> If the same subproblem occurs repeatedly, calculate it once and reuse the answer.

Consider Fibonacci.

Naive recursion:

```ts
function fib(n: number): number {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
}
```

This repeatedly recalculates values.

Complexity approaches:

```text
O(2ⁿ)
```

Memoization:

```ts
function fib(n: number, memo = new Map<number, number>()): number {
    if (n <= 1) return n;

    if (memo.has(n)) {
        return memo.get(n)!;
    }

    const result = fib(n - 1, memo) + fib(n - 2, memo);

    memo.set(n, result);

    return result;
}
```

Now approximately:

```text
O(n)
```

DP becomes one of the final major stages because it combines:

```text
recursion
state
decision making
complexity
arrays/maps
optimization
```

---

# The interview patterns I want you to master

Eventually, instead of seeing 500 unrelated LeetCode problems, I want you to see recurring families:

| Problem clue                        | Pattern to consider      |
| ----------------------------------- | ------------------------ |
| Pair in sorted array                | Two pointers             |
| Longest/shortest contiguous section | Sliding window           |
| Frequency/counting                  | Hash map                 |
| Seen before?                        | Hash set                 |
| Next greater/smaller                | Monotonic stack          |
| Level-by-level                      | BFS                      |
| Explore paths                       | DFS                      |
| Top K                               | Heap                     |
| Sorted search space                 | Binary search            |
| Subsets/permutations                | Backtracking             |
| Repeated optimal subproblems        | DP                       |
| Shortest unweighted path            | BFS                      |
| Shortest weighted non-negative path | Dijkstra                 |
| Dependencies/prerequisites          | Topological sort         |
| Connectivity/groups                 | Union Find               |
| Range sums                          | Prefix sum               |
| Overlapping ranges                  | Intervals                |
| Linked-list cycle                   | Fast/slow pointers       |
| Running minimum/maximum             | Heap/monotonic structure |

This table will become one of the most valuable things in your interview preparation.

---

# LeetCode progression

Do **not** immediately start random Medium problems.

I recommend roughly this progression.

### Foundation problems

Start with:

1. Running Sum of 1D Array
2. Richest Customer Wealth
3. Contains Duplicate
4. Valid Anagram
5. Two Sum
6. Valid Palindrome
7. Best Time to Buy and Sell Stock
8. Binary Search
9. Merge Sorted Array
10. Move Zeroes

Then move to pattern-based groups.

### Arrays / Hashing

- Contains Duplicate
- Valid Anagram
- Two Sum
- Group Anagrams
- Top K Frequent Elements
- Product of Array Except Self
- Longest Consecutive Sequence

### Two Pointers

- Valid Palindrome
- Two Sum II
- 3Sum
- Container With Most Water
- Trapping Rain Water

### Sliding Window

- Best Time to Buy and Sell Stock
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Permutation in String
- Minimum Window Substring

### Stack

- Valid Parentheses
- Min Stack
- Evaluate Reverse Polish Notation
- Daily Temperatures
- Largest Rectangle in Histogram

### Binary Search

- Binary Search
- Search a 2D Matrix
- Koko Eating Bananas
- Find Minimum in Rotated Sorted Array
- Search in Rotated Sorted Array

### Linked Lists

- Reverse Linked List
- Merge Two Sorted Lists
- Linked List Cycle
- Reorder List
- Remove Nth Node From End
- Copy List with Random Pointer
- Merge K Sorted Lists

### Trees

- Maximum Depth of Binary Tree
- Invert Binary Tree
- Diameter of Binary Tree
- Balanced Binary Tree
- Same Tree
- Binary Tree Level Order Traversal
- Validate Binary Search Tree
- Lowest Common Ancestor
- Kth Smallest Element in a BST
- Serialize and Deserialize Binary Tree

### Heap

- Kth Largest Element
- Last Stone Weight
- K Closest Points to Origin
- Task Scheduler
- Find Median from Data Stream

### Graphs

- Number of Islands
- Clone Graph
- Max Area of Island
- Rotting Oranges
- Course Schedule
- Pacific Atlantic Water Flow
- Graph Valid Tree
- Word Ladder

### Advanced graph problems

- Network Delay Time
- Cheapest Flights Within K Stops
- Min Cost to Connect All Points
- Alien Dictionary
- Reconstruct Itinerary

### Dynamic Programming

Start with:

- Climbing Stairs
- Min Cost Climbing Stairs
- House Robber
- Coin Change
- Longest Increasing Subsequence
- Partition Equal Subset Sum
- Unique Paths
- Longest Common Subsequence
- Edit Distance

---

# Your TypeScript DSA toolkit

You should become extremely fluent with these built-in structures.

```ts
const array: number[] = [];

const map = new Map<string, number>();

const set = new Set<number>();

const stack: number[] = [];

const queue: number[] = [];
let head = 0;
```

And operations like:

```ts
array.push(value);
array.pop();

map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);

set.add(value);
set.has(value);
set.delete(value);

array.sort((a, b) => a - b);
```

Be careful with sorting.

This:

```ts
[10, 2, 5].sort();
```

does **not** reliably mean numeric ascending sorting because JavaScript's default sorting behavior is based on string comparison.

Use:

```ts
[10, 2, 5].sort((a, b) => a - b);
```

for ascending numbers.

And:

```ts
[10, 2, 5].sort((a, b) => b - a);
```

for descending.

---

# How to solve an interview problem

I want you to eventually follow this process automatically.

### Step 1 — Understand

Clarify:

```text
What are the inputs?
What should I return?
Can input be empty?
Are values sorted?
Are duplicates possible?
What are the constraints?
```

### Step 2 — Work through an example manually

Before coding:

```text
nums = [2,7,11,15]
target = 9
```

Think through what you'd do yourself.

### Step 3 — Find brute force

Don't be ashamed of brute force.

It gives you a correctness baseline.

### Step 4 — Find the bottleneck

Ask:

> Why is my solution slow?

Maybe you're repeatedly searching an array.

That could suggest:

```text
Hash Map
```

Maybe you're recalculating overlapping ranges.

That could suggest:

```text
Sliding Window
Prefix Sum
DP
```

### Step 5 — Identify the pattern

This is where experience matters.

### Step 6 — Code

Keep the code simple.

### Step 7 — Test manually

Always test:

```text
normal case
empty/minimal case
duplicates
boundaries
unexpected ordering
```

### Step 8 — State complexity

Always finish with:

```text
Time:
Space:
```

---

# A mistake I don't want you making

Avoid learning solutions like this:

> "For Longest Substring Without Repeating Characters, use this exact code."

Instead learn:

> "If I need the longest contiguous region satisfying some constraint, I should investigate a variable sliding window."

That's transferable knowledge.

A single pattern can solve dozens of questions.

---

# Recommended learning schedule

Given your goal of becoming genuinely strong rather than merely solving a few problems, I'd structure the course approximately like this:

| Stage       | Focus                                                   |
| ----------- | ------------------------------------------------------- |
| Weeks 1–2   | Big O, Arrays, Strings, Maps, Sets                      |
| Weeks 3–4   | Two Pointers, Sliding Window, Prefix Sum, Binary Search |
| Weeks 5–6   | Stack, Queue, Linked Lists                              |
| Weeks 7–8   | Recursion, Sorting, Backtracking                        |
| Weeks 9–10  | Trees, BST, BFS, DFS                                    |
| Weeks 11–12 | Heap, Trie                                              |
| Weeks 13–14 | Graphs, BFS/DFS, Union Find, Topological Sort           |
| Weeks 15–16 | Dijkstra, MST, advanced graph problems                  |
| Weeks 17–19 | Greedy + Dynamic Programming                            |
| Week 20+    | Interview sets, timed practice, mock interviews         |

Don't treat the weeks as hard deadlines. **Understanding beats speed.**

---

# How many LeetCode problems?

Don't chase a meaningless number like:

> "I need to solve 500 LeetCode questions."

I'd rather see you deeply understand **150 carefully selected problems** than copy solutions to 600.

A good eventual target might be approximately:

```text
Easy:   50–70
Medium: 100–150
Hard:   20–30
```

But pattern mastery matters far more than the raw count.

For every meaningful problem you solve, record:

```text
Problem
Pattern
Brute-force solution
Optimal solution
Why optimization works
Time complexity
Space complexity
Mistakes made
What clue should help me recognize this pattern next time?
```

That final question is especially important.

---

# The full curriculum I recommend for you

This is the sequence I would personally use to teach you from your current starting point:

```text
01. Algorithmic thinking
02. Big O / time complexity
03. Space complexity
04. Arrays
05. Strings
06. Hash tables
07. Hash maps
08. Sets
09. Two pointers
10. Fast/slow pointers
11. Sliding window
12. Prefix sums
13. Binary search
14. Matrices / grids
15. Stacks
16. Monotonic stacks
17. Queues
18. Deques
19. Linked lists
20. Recursion
21. Sorting algorithms
22. Divide and conquer
23. Backtracking
24. Binary trees
25. Tree DFS
26. Tree BFS
27. Binary search trees
28. Tree traversal
29. Heaps
30. Priority queues
31. Tries
32. Intervals
33. Graph fundamentals
34. Graph representation
35. Graph DFS
36. Graph BFS
37. Connected components
38. Cycle detection
39. Topological sorting
40. Union Find
41. Weighted graphs
42. Dijkstra
43. Bellman-Ford
44. Minimum spanning trees
45. Prim's algorithm
46. Kruskal's algorithm
47. Greedy algorithms
48. Dynamic Programming fundamentals
49. 1D DP
50. 2D DP
51. Knapsack patterns
52. Subsequence DP
53. Bit manipulation
54. Kadane's algorithm
55. Quickselect
56. Advanced binary search
57. Segment trees
58. Fenwick trees
59. Interview pattern recognition
60. Timed interview problem solving
```

The last few topics, such as Segment Trees and Fenwick Trees, are **not necessary for most ordinary software engineering interviews**, but I'll teach them once your foundation is strong because you specifically want to go from basics to advanced.

---

# One rule for this journey

When I give you a problem, **try it before reading the solution**.

Even if you spend 30 minutes and fail.

That struggle is where much of the learning happens.

If you immediately read:

```ts
function solution() {
    //...
}
```

your brain recognizes the solution and creates the illusion:

> "Yeah, that makes sense. I understand it."

Recognition is not the same as recall.

In an interview, nobody shows you the answer.

You need to generate it.

---

# Your first practice set

Before moving deeper, these are excellent first problems:

1. **Contains Duplicate**
2. **Valid Anagram**
3. **Two Sum**
4. **Running Sum of 1D Array**
5. **Best Time to Buy and Sell Stock**
6. **Valid Palindrome**
7. **Binary Search**
8. **Move Zeroes**
9. **Merge Sorted Array**
10. **Majority Element**

For each one, you should be able to explain:

```text
What is the brute-force solution?

What makes it inefficient?

What data structure or pattern improves it?

Why is the optimized solution correct?

What is the time complexity?

What is the space complexity?
```
