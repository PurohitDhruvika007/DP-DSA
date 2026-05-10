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

    insert(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            node.next = this.head;
            return;
        }

        let current = this.head;

        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = node;
        node.next = this.head;
    }

    traverse() {
        if (!this.head) return;

        let current = this.head;
        let result = "";

        do {
            result += current.data + " -> ";
            current = current.next;
        } while (current !== this.head);

        result += "(CIRCULAR)";
        console.log(result);
    }

    deleteNode(key) {
        if (!this.head) return;

        let current = this.head;
        let prev = null;

        if (
            this.head.data === key &&
            this.head.next === this.head
        ) {
            this.head = null;
            return;
        }

        if (this.head.data === key) {
            while (current.next !== this.head) {
                current = current.next;
            }

            current.next = this.head.next;
            this.head = this.head.next;
            return;
        }

        current = this.head;

        do {
            prev = current;
            current = current.next;

            if (current.data === key) {
                prev.next = current.next;
                return;
            }

        } while (current !== this.head);
    }

    splitList() {
        let slow = this.head;
        let fast = this.head;

        while (
            fast.next !== this.head &&
            fast.next.next !== this.head
        ) {
            slow = slow.next;
            fast = fast.next.next;
        }

        if (fast.next.next === this.head) {
            fast = fast.next;
        }

        let head1 = this.head;
        let head2 = slow.next;

        fast.next = head2;
        slow.next = head1;

        return [head1, head2];
    }

    isCircular() {
        if (!this.head) return false;

        let current = this.head.next;

        while (current && current !== this.head) {
            current = current.next;
        }

        return current === this.head;
    }

    printFromNode(node) {
        if (!node) return;

        let current = node;
        let result = "";

        do {
            result += current.data + " -> ";
            current = current.next;
        } while (current !== node);

        result += "(CIRCULAR)";
        console.log(result);
    }
}

const cll = new CircularLinkedList();

cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.insert(40);
cll.insert(50);

cll.traverse();

cll.deleteNode(30);
cll.traverse();

const [firstHalf, secondHalf] = cll.splitList();

cll.printFromNode(firstHalf);
cll.printFromNode(secondHalf);

console.log(cll.isCircular());