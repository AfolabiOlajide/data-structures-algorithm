class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        if (this.items.length === 0) return;

        return this.items.shift();
    }
}

const q = new Queue<Number>();

q.enqueue(30);
q.enqueue(26);
q.enqueue(5);

console.log(q.dequeue());
