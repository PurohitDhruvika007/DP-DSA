// 10 -> 20 -> 30 -> circular(10)...

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    insertAtEnding(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.head.next = this.head;
            return;
        }
        let current = this.head;
        while (current.next != this.head) {
            current = current.next;
        }
        node.next = this.head;
        current.next = node;
    }
    display() {
        let current = this.head;
        let result = "";
        while (current.next != this.head) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += current.data + " -> " + this.head.data + "(circular)";
        console.log(result)
    }
    insertAtBeginning(value) {
        const node = new Node(value);
        let current = this.head;
        while (current != this.head) {
            current = current.next;
        }
        node.next = this.head;
        current.next = node;
        this.head = node;
    }

}

const list = new LinkedList();
list.insertAtEnding(10);
list.insertAtEnding(20);
list.insertAtEnding(30);
list.insertAtBeginning(40);

list.display();
