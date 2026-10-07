function romanToInt(s: string): number {
    const rn: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let left = 0;
    let right = 1;
    for (let char of s) {
        if (s[right] === undefined) return (total += rn[char]!);
        else if (s[left] === s[right] || rn[s[left]!]! > rn[s[right]!]!) {
            total += rn[char]!;
            left++;
            right++;
        } else {
            total -= rn[char]!;
            left++;
            right++;
        }
    }

    return total;
}
