function groupAnagrams(strs: string[]): string[][] {
    const r: Record<string, string[]> = {};

    for (let str of strs) {
        const letter = str.split("").sort().join("");
        r[letter] ? r[letter].push(str) : (r[letter] = [str]);
    }

    return Object.values(r);
}
