class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
    }
    print() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    dequeue() {
        if (!this.front) {
            console.log('queue is underflow');
            return;
        }
        this.front = this.front.next;
    }
    isEmpty() {
        if (!this.front) {
            console.log('queue is empty.');
            return;
        }
        console.log('queue is not empty.');
    }
}

let q = new Queue();
q.isEmpty();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.dequeue();
q.dequeue();
q.print();
q.isEmpty();