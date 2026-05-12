class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
            return
        }
        let current = this.root;
        while (current) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    return
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = node;
                    return
                }
                current = current.right;
            }
        }
    }
    preOrder(node) {
        if (node != null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}

const bt = new BinaryTree();
bt.insert(25);
bt.insert(10);
bt.insert(1);
bt.insert(55);
bt.insert(45);
bt.insert(33);
bt.insert(60);
bt.insert(78);
bt.insert(65);
bt.insert(12);
bt.insert(15);
bt.insert(21);
bt.preOrder(bt.root);