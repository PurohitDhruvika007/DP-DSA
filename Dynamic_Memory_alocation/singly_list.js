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
            result += current.data + " -> ";
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
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow ? slow.data : null;
    }

    removeNthFromEnd(n) {
        const dummy = new Node(0);
        dummy.next = this.head;

        let first = dummy;
        let second = dummy;

        for (let i = 0; i <= n; i++) {
            first = first.next;
        }

        while (first) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;

        this.head = dummy.next;
    }

    static mergeSortedLists(list1, list2) {
        let dummy = new Node(0);
        let tail = dummy;

        let l1 = list1.head;
        let l2 = list2.head;

        while (l1 && l2) {
            if (l1.data < l2.data) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }

            tail = tail.next;
        }

        tail.next = l1 || l2;

        const mergedList = new SinglyList();
        mergedList.head = dummy.next;

        return mergedList;
    }
}


const sl = new SinglyList();

sl.insert(10);
sl.insert(20);
sl.insert(30);
sl.insert(40);
sl.insert(50);

console.log("Original List:");
sl.print();

sl.reverse();
console.log("\nReversed List:");
sl.print();

console.log("\nMiddle Node:", sl.findMiddle());

sl.removeNthFromEnd(2);
console.log("\nAfter Removing 2nd Node From End:");
sl.print();


console.log("\nCycle Detected:", sl.detectCycle());


const list1 = new SinglyList();
list1.insert(1);
list1.insert(3);
list1.insert(5);

const list2 = new SinglyList();
list2.insert(2);
list2.insert(4);
list2.insert(6);

const merged = SinglyList.mergeSortedLists(list1, list2);

console.log("\nMerged Sorted List:");
merged.print();