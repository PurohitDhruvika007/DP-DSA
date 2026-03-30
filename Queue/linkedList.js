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
    insert(value) {
        let newNode = new Node(value);
        if (!this.rear) {

        }
    }
}

let q = new Queue();
q.insert(10);