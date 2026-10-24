function binarySearch(arr: number[], val: number): void {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    // for (let i = 0; i < arr.length; i++) {
    //     if (left === right && right === middle && arr[middle] !== val) {
    //         console.log(-1);
    //         return;
    //     }
    //     //
    //     if (arr[middle] === val) {
    //         console.log(middle);
    //         return;
    //     } else if (arr[middle]! > val) {
    //         right = middle - 1;
    //         middle = Math.floor((left + right) / 2);
    //     } else {
    //         left = middle + 1;
    //         middle = Math.floor((left + right) / 2);
    //     }
    //     console.log(left, middle, right);
    // }

    // improved
    while (left <= right) {
        if (arr[middle] === val) {
            console.log(middle);
            return;
        } else if (arr[middle]! > val) right = middle - 1;
        else left = middle + 1;

        middle = Math.floor((left + right) / 2);
        console.log(left, middle, right);
    }

    console.log(-1);
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 13);
