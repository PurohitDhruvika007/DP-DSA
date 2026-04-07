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
    search(value) {
        let current = this.root;
        while (current) {
            if (current.data == value) {
                return true;
            }
            if (value < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        if (current == null) {
            return false;
        }
    }
    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}

const bt = new BinaryTree();
bt.insert(30);
bt.insert(10);
bt.insert(1);
bt.insert(55);
bt.insert(45);
bt.insert(33);
bt.insert(60);
bt.insert(78);
bt.insert(65);
bt.insert(12);


let res = bt.search(45);
console.log(res);


// bt.inorder(bt.root);
// bt.preorder(bt.root);
// bt.postorder(bt.root);


// console.log(bt.root.data);
// console.log(bt.root.left.data);
// console.log(bt.root.left.left.data);
// console.log(bt.root.right.data);
// console.log(bt.root.right.left.data);