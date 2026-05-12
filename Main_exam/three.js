class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return
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
            result += current.data + " -> ";
            current = current.next;
        }
        result += "NULL";
        console.log(result)
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

}

const sl = new SinglyLinkedList();
sl.insert(1);
sl.insert(2);
sl.insert(3);
sl.insert(4);
sl.insert(5);
sl.print();
sl.reverse();
sl.print();
