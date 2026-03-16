// 1->2->3->NULL

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
    countLength() {
        this.length = 0;
        let current = this.head;
        while (current) {
            this.length = this.length + 1;
            current = current.next;

        }
    }
    insertAtEnd(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.countLength();
    }
    insertAtBeginning(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.countLength();
    }
    insertAtPosition(position, value) {
        const node = new Node(value);
        if (position == 1) {
            node.next = this.head;
            this.head = node;
            return;
        }
        let current = this.head;
        let count = 1;
        while (count < position - 1 && current) {
            current = current.next;
            count++;
        }
        node.next = current.next;
        current.next = node;
        this.countLength();
    }
    update(oldValue, newValue) {
        let current = this.head;
        while (current) {
            if (current.data === oldValue) {
                current.data = newValue;
                return;
            }
            current = current.next;
        }
        this.countLength();
    }
    delete(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let current = this.head;

        while (current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
                this.length--;
                return;
            }
            current = current.next;
        }
    }
    sum() {
        let count = 0;
        let current = this.head;
        while (current) {
            count += current.data;
            current = current.next;
        }
        return count;
    }
    average() {
        let count = 0;
        let length = 0
        let current = this.head;
        while (current) {
            count += current.data;
            length++;
            current = current.next;
        }
        return count / length;
    }
    maximum() {

        let current = this.head;
        let max = current.data;
        while (current) {
            if (max < current.data) {
                max = current.data;
            }
            current = current.next;
        }
        return max;
    }
    reverseByLength() {
        let length = this.length;
        while (length > 0) {
            let current = this.head;
            for (let i = 1; i < length; i++) {
                current = current.next;
            }
            console.log(current.data);
            length--;
        }
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
    freaquency(value) {
        let count = 0;
        let current = this.head;
        while (current) {
            if (current.data === value) {
                count++;
            }
            current = current.next;
        }
        return count;
    }
    minimum() {
        let current = this.head;
        let min = current.data;
        while (current) {
            if (min > current.data) {
                min = current.data;
            }
            current = current.next;
        }
        return min;
    }
    display() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "NULL");
        this.countLength();
    }
}

const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
// list.insertAtEnd(30);
list.insertAtBeginning(40);
list.insertAtPosition(2, 50);
list.update(40, 5);
list.delete(5);
list.display();
// console.log(list.sum());
// console.log(list.average());
// console.log(list.length);
// console.log(list.maximum());
// console.log(list.minimum());
// list.reverseByLength();
// console.log(list.freaquency(30));
// list.display();
list.reverse();
list.display();