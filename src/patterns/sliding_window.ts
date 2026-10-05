function maxSubarraySum(arr: number[], windowSize: number): void {
    if (windowSize > arr.length) {
        console.log(null);
        return;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i] as number;
    }
    tempSum = maxSum;

    for (
        let newWindow: number = windowSize;
        newWindow < arr.length;
        newWindow++
    ) {
        tempSum =
            tempSum -
            (arr[newWindow - windowSize] as number) +
            (arr[newWindow] as number);
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
maxSubarraySum([4, 2, 1, 6], 1);
maxSubarraySum([4, 2, 1, 6, 2], 4);
maxSubarraySum([], 4);
