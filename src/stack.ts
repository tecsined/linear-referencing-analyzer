export class Stack<T> {
    private store: T[] = [];

    get count(): number {
        return this.store.length;
    }

    push(val: T): void {
        this.store.push(val);
    }

    pop(): T | null {
        if (this.count === 0) {
            return null;
        }
        return this.store.pop();
    }

    peek(): T | null {
        if (this.count === 0) {
            return null;
        }
        return this.store[this.store.length - 1];
    }

    clear(): void {
        this.store = [];
    }
}
