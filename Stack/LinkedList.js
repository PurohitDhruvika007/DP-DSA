class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.top = null;
    }
    insert(data) {
        const node = new Node(data);
        if (this.top == null) {
            this.top = node;
            return;
        }
        node.next = this.top;
        this.top = node;

    }
    display() {
        let current = this.top;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    pop() {
        let data = this.top;
        this.top = this.top.next;
        console.log(`${data.data} is deleted`);
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.display();
list.pop();
list.pop();
list.display();