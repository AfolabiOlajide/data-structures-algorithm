class Stack<T> {
    private items: T[] = [];

    // pushes an item to the top of the stack
    push(item: T) {
        this.items.push(item);
    }

    // removes an item from the top of the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // check the itmes at the top of the stack
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // check if the stack is empty
    empty(): boolean {
        return this.items.length === 0;
    }

    // return all stack items
    stackItems(): T[] | [] {
        return this.items;
    }

    // search for the positon of an item (non-zero based)
    searh(item: T): number {
        const index = this.items.lastIndexOf(item);
        if (index === -1) {
            return -1;
        }
        return this.items.length - index;
    }
}

const stack: Stack<number> = new Stack();

stack.push(3);
stack.push(4);
stack.push(7);

console.log(stack.stackItems());

console.log(stack.searh(7));

// stack.pop();

// console.log(stack.stackItems());
// console.log(stack.peek());

// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.empty());
