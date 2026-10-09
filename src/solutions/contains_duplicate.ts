// Using Hashmap

// function containsDuplicate(nums: number[]): boolean {
//     const map: Map<number, number> = new Map();
//     for (let num of nums) {
//         if (map.has(num)) return true;
//         map.set(num, 1);
//     }

//     return false;
// }

// Using Hashset
function containsDuplicate(nums: number[]): boolean {
    const set: Set<number> = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
}
