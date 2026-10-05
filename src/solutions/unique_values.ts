function countUniqueValues(arr: number[]): void {
    if (arr.length === 0) {
        console.log(0);
        return;
    }

    let left = 0;
    let right = 1;
    let uniqueVals = 1;

    while (arr[right] !== undefined) {
        if (arr[left] === arr[right]) {
            right++;
        } else {
            left = right;
            right++;
            uniqueVals++;
        }
    }
    console.log(uniqueVals);
}

countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
