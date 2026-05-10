class Node {
    constructor(value) {
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
        node.prev = current;
    }

    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }

        result += "NULL";
        console.log(result);
    }

    insertAtBeginning(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    deleteNode(key) {
        if (!this.head) return;

        let current = this.head;

        if (current.data === key) {
            this.head = current.next;

            if (this.head) {
                this.head.prev = null;
            }

            return;
        }

        while (current && current.data !== key) {
            current = current.next;
        }

        if (!current) {
            console.log("Node not found");
            return;
        }

        if (current.next) {
            current.next.prev = current.prev;
        }

        if (current.prev) {
            current.prev.next = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        if (temp) {
            this.head = temp.prev;
        }
    }

    findPairsWithSum(sum) {
        let pairs = [];

        let left = this.head;
        let right = this.head;

        while (right.next) {
            right = right.next;
        }

        while (
            left &&
            right &&
            left !== right &&
            right.next !== left
        ) {
            let currentSum = left.data + right.data;

            if (currentSum === sum) {
                pairs.push([left.data, right.data]);
                left = left.next;
                right = right.prev;
            } else if (currentSum < sum) {
                left = left.next;
            } else {
                right = right.prev;
            }
        }

        return pairs;
    }

    removeDuplicates() {
        let current = this.head;

        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;

                if (current.next) {
                    current.next.prev = current;
                }
            } else {
                current = current.next;
            }
        }
    }
}

const dll = new DoublyLinkedList();

dll.insert(10);
dll.insert(20);
dll.insert(20);
dll.insert(30);
dll.insert(40);
dll.insert(50);

dll.print();

dll.insertAtBeginning(5);
dll.print();

dll.deleteNode(30);
dll.print();

dll.reverse();
dll.print();

dll.reverse();

console.log(dll.findPairsWithSum(60));

dll.removeDuplicates();
dll.print();