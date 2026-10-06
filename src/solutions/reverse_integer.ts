// naive solution
// function reverse(x: number): number {
//     // convert to string and confirm sign
//     let toString: string[] = `${x}`.split("-");
//     let isSigned: boolean = false;

//     if (toString.length === 2) {
//         isSigned = true;
//     }

//     // reverse
//     const text = isSigned ? toString[1] : toString[0];
//     let rText = isSigned ? "-" : "";

//     for (let i = (text as string).length - 1; i >= 0; i--) {
//         rText += (text as string)[i];
//     }

//     // convert reversed text to number
//     const rNum = Number(rText);

//     const upperBound = Math.pow(2, 31) - 1;
//     const lowerBound = Math.pow(-2, 31);
//     const outOfRange = rNum > upperBound || rNum < lowerBound;

//     if (outOfRange) {
//         return 0;
//     }

//     return rNum;
// }

// Optimal solution
function reverse(x: number): number {
    const sign = x < 0 ? -1 : 1;
    let digit = Math.abs(x);
    let rev = 0;

    while (digit > 0) {
        let remainder = digit % 10;
        rev = rev * 10 + remainder;
        digit = Math.floor(digit / 10);
    }

    rev = rev * sign;

    if (rev > Math.pow(2, 31) - 1 || rev < Math.pow(-2, 31)) return 0;

    return rev;
}
