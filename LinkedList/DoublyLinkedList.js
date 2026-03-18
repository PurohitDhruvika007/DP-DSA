class Node {
    constructor(value) {
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        node.prev = current;
        this.countLength();
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    reverse() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        // console.log("---", current)
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
    countLength() {
        this.length = 0;
        let current = this.head;
        while (current) {
            this.length++;
            current = current.next;
        }
    }
    insertAtPosition(position, value) {
        if (position < 1 || position > this.length + 1) return;

        const node = new Node(value);

        // Insert at beginning
        if (position === 1) {
            if (this.head) {
                this.head.prev = node;
                node.next = this.head;
            }
            this.head = node;
            this.countLength();
            return;
        }

        let current = this.head;
        let count = 1;

        while (count < position - 1) {
            current = current.next;
            count++;
        }

        node.next = current.next;
        node.prev = current;

        if (current.next) {
            current.next.prev = node;
        }

        current.next = node;

        this.countLength();
    }


}

const list = new LinkedList();
list.insert(10);
list.insert(20);
// console.log(list.head.data)
// console.log(list.head.next.data)
list.display();
list.reverse();
console.log(list.length)
list.insertAtPosition(1, 5);
list.display();

