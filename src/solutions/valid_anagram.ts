function validAnagram(str1: string, str2: string): void {
    if (str1.length !== str2.length) {
        console.log(false);
        return;
    }

    const counter: Record<string, number> = {};

    for (let i = 0; i < str1.length; i++) {
        const val = str1[i] as string;
        counter[val] = counter[val] ? ((counter[val] as number) += 1) : 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const val = str2[i] as string;
        if (!counter[val] || counter[val] === 0) {
            console.log(false);
            return;
        }

        counter[val] -= 1;
    }

    // console.log(counter);
    console.log(true);
}

validAnagram(" ", " ");
validAnagram("aaz", "zza");
validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("qwerty", "qeywrt");
validAnagram("texttwisttime", "timetwisttext");

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let m1: Map<string, number> = new Map();

    for (let char of s) {
        m1.get(char) ? m1.set(char, m1.get(char)! + 1) : m1.set(char, 1);
    }

    for (let char of t) {
        if (m1.get(char) === 0 || m1.get(char) === undefined) {
            return false;
        }
        m1.set(char, m1.get(char)! - 1);
    }

    return true;
}
