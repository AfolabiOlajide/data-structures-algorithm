// write a function called same, which accepts two arrays.
// the function should return true if every value in the array has it's
// corresponding value squared in the second array.
// The frequency of values must be the same.

function same(arr1: number[], arr2: number[]): void {
    if (arr1.length !== arr2.length) {
        console.log(false);
        return;
    }
    const counter1: Record<string, number> = {};
    const counter2: Record<string, number> = {};

    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1;
    }
    console.log(counter1);

    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }
    console.log(counter2);

    for (let key in counter1) {
        if (!(Number(key) ** 2 in counter2)) {
            console.log(false);
            return;
        }
        if (counter1[key] !== counter2[Number(key) ** 2]) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}

same([1, 2, 1], [1, 4, 4]);
