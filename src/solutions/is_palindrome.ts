// naive/long approach
// function isPalindrome(s: string): boolean {
//     if (s === " ") return true;
//     s = s.toLowerCase();

//     let word = "";
//     for (let char of s) {
//         if (/[a-z0-9]/.test(char)) {
//             word += char;
//         }
//     }

//     let left = 0;
//     let right = word.length - 1;
//     for (let i = 0; i < word.length / 2; i++) {
//         if (word[left] !== word[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

function isPalindrome(s: string): boolean {
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return newStr === newStr.split("").reverse().join("");
}
