class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SinglyList {
    constructor() {
        this.head = null;
    }
    insert(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data;
            result += " -> ";
            current = current.next;
        }
        result += "NULL";
        console.log(result);
    }
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    detectCycle() {

    }
}

const sl = new SinglyList();
sl.insert(10);
sl.insert(20);
sl.insert(30);
sl.insert(40);
sl.insert(50);
sl.print();
sl.reverse();
sl.print();
