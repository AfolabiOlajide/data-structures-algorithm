function isPalindrome(x: number): boolean {
    let str = String(x);
    let revStr = str.split("").reverse().join("");

    return str === revStr;
}
