class Queue {
    constructor(length) {
        this.queue = [];
        this.length = length;
        this.front = -1;
        this.rear = -1;
    }
    insert(value) {
        if (this.front == -1) {
            this.front += 1;
        }

        this.rear += 1;
        if (this.rear == this.length) {
            return;
        }
        this.queue[this.rear] = value;
        console.log(`data inserted ${this.queue[this.rear]}`);
    }

    delete() {
        if (this.front == -1 || this.front == length) {
            return;
        }
        console.log(`data deleted ${this.queue[this.front]}`);
        this.front += 1;
    }

    print() {
        console.log(this.queue)
    }

    isEmpty() {
        if (this.rear == -1) {
            console.log('queue is empty');
            return;
        }
        console.log('queue is not empty');
    }

    peek(position, value) {
        if (position < 0 || position > this.rear) {
            console.log("queue is underflow")
            return;
        }
        this.queue[position] = value;
        console.log(`${this.queue[position]} value is updated`);
    }
}

const queue = new Queue(5);
queue.insert(1);
