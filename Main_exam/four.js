class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            node.next = this.head;
            return;
        }
        let current = this.head;
        while (current.next != this.head) {
            current = current.next;
        }
        current.next = node;
        node.next = this.head;
    }
    print() {
        let current = this.head;
        let result = "";
        while (current.next != this.head) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += current.data + " -> HEAD(circular)";
        console.log(result);
    }
    isCircular() {
        let current = this.head;
        while (current && current.next !== this.head) {
            current = current.next;
        }
        return current.next === this.head;
    }
}
const cl = new CircularLinkedList();
cl.insert(1);
cl.insert(2);
cl.insert(3);
cl.insert(4);
cl.insert(5);
cl.print();
console.log(cl.isCircular());