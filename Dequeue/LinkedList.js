class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Dequeue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    insertRight(value) {
        const node = new Node(value);
        if (!this.front) {
            this.front = this.rear = node;
            return
        }
        this.rear.next = node;
        this.rear = node;
    }
    insertLeft(value) {
        const node = new Node(value);
        if (!this.front) {
            this.front = this.rear = node;
            return;
        }
        node.next = this.front;
        this.front = node;
    }
    deleteRight() {
        if (!this.front) {
            return;
        }
        let current = this.front;
        while (current.next.next) {
            current = current.next;
        }
        this.rear = current;
        current.next = null;
    }
    deleteLeft() {
        if (!this.front) {
            return
        }
        this.front = this.front.next;
    }
    print() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    isEmpty() {
        if (!this.front) {
            console.log("queue is empty");
            return;
        }
        console.log("queue is not empty");
    }
}

const queue = new Dequeue();
queue.isEmpty();

queue.insertRight(20);
queue.insertLeft(10);
queue.insertLeft(5);
queue.insertRight(30);
queue.print();
queue.deleteLeft();

queue.deleteRight();
queue.print();
queue.isEmpty();

