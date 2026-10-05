// function sumZero(sortedArr: number[]): void {
//     let startPointer = 0;
//     let endPointer = sortedArr.length - 1;

//     for (let i = 0; i < sortedArr.length; i++) {
//         // conditon
//         if (startPointer > endPointer) {
//             console.log(undefined);
//             return;
//         }

//         // sum of zero
//         const sumIsZero =
//             (sortedArr[startPointer] as number) +
//                 (sortedArr[endPointer] as number) ===
//             0;
//         if (sumIsZero) {
//             const val1 = sortedArr[startPointer] as number;
//             const val2 = sortedArr[endPointer] as number;

//             console.log([val1, val2]);
//             return;
//         }

//         const sumIsGreater =
//             (sortedArr[startPointer] as number) +
//                 (sortedArr[endPointer] as number) >
//             0;

//         if (sumIsGreater) {
//             endPointer -= 1;
//         }
//         startPointer += 1;
//     }
// }

function sumZero(sortedArr: number[]): void {
    let left: number = 0;
    let right: number = sortedArr.length - 1;
    while (left < right) {
        let leftVal = sortedArr[left] as number;
        let rightVal = sortedArr[right] as number;
        let sum = leftVal + rightVal;

        if (sum === 0) {
            const val1 = sortedArr[left] as number;
            const val2 = sortedArr[right] as number;

            console.log([val1, val2]);
            return;
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    console.log(undefined);
}

sumZero([-3, -2, -1, 0, 1, 2, 3]);
sumZero([-2, 0, 1, 3]);
sumZero([1, 2, 3]);
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
