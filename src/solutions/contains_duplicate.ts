function containsDuplicate(nums: number[]): boolean {
    const map: Map<number, number> = new Map();
    for (let num of nums) {
        if (map.has(num)) return true;
        map.set(num, 1);
    }

    return false;
}
