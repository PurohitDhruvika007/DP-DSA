class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {

            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    return;
                }
                else {
                    current = current.left;
                }
            }
            else {
                if (!current.right) {
                    current.right = node;
                    return;
                }
                else {
                    current = current.right;
                }
            }
        }
    }
}

const bt = new BinaryTree();
bt.insert(30);
bt.insert(10);
bt.insert(1);
bt.insert(55);
bt.insert(45);

console.log(bt.root.data);
console.log(bt.root.left.data);
console.log(bt.root.left.left.data);
console.log(bt.root.right.data);
console.log(bt.root.right.left.data);