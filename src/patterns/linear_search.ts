function linearSearch(arr: number[], val: number): void {
    if (arr.length === 0) console.log(-1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log("Index: ", i);
            return;
        }
    }

    console.log(-1);
}

linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 20], 88);
