class QueueArray {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    front() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        console.log(this.queue);
    }
}

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    print() {
        let result = [...this.stack2].reverse().concat(this.stack1);
        console.log(result);
    }
}

function firstNonRepeating(stream) {
    let queue = [];
    let count = {};
    let result = "";

    for (let ch of stream) {
        count[ch] = (count[ch] || 0) + 1;

        queue.push(ch);

        while (queue.length && count[queue[0]] > 1) {
            queue.shift();
        }

        result += queue.length ? queue[0] : "#";
    }

    return result;
}

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue Overflow");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue Underflow");
            return;
        }

        let value = this.queue[this.front];

        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return value;
    }

    print() {
        if (this.front === -1) {
            console.log("Queue is Empty");
            return;
        }

        let result = [];
        let i = this.front;

        while (true) {
            result.push(this.queue[i]);

            if (i === this.rear) break;

            i = (i + 1) % this.size;
        }

        console.log(result);
    }
}

function generateBinaryNumbers(n) {
    let queue = [];
    let result = [];

    queue.push("1");

    for (let i = 0; i < n; i++) {
        let current = queue.shift();

        result.push(current);

        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

const qa = new QueueArray();

qa.enqueue(10);
qa.enqueue(20);
qa.enqueue(30);

qa.print();

console.log(qa.dequeue());

qa.print();

const qs = new QueueUsingStacks();

qs.enqueue(100);
qs.enqueue(200);
qs.enqueue(300);

qs.print();

console.log(qs.dequeue());

qs.print();

console.log(firstNonRepeating("aabc"));

const cq = new CircularQueue(5);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);

cq.print();

console.log(cq.dequeue());

cq.print();

console.log(generateBinaryNumbers(10));