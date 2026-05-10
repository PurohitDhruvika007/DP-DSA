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

    inorderRecursive(node) {
        if (node) {
            this.inorderRecursive(node.left);
            process.stdout.write(node.data + " ");
            this.inorderRecursive(node.right);
        }
    }

    inorderIterative() {
        let stack = [];
        let current = this.root;

        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();

            process.stdout.write(current.data + " ");

            current = current.right;
        }

        console.log();
    }

    preorder(node) {
        if (node) {
            process.stdout.write(node.data + " ");
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            process.stdout.write(node.data + " ");
        }
    }

    height(node) {
        if (!node) {
            return 0;
        }

        return Math.max(
            this.height(node.left),
            this.height(node.right)
        ) + 1;
    }

    isBalanced(node = this.root) {
        function check(node) {
            if (!node) return 0;

            let left = check(node.left);

            if (left === -1) return -1;

            let right = check(node.right);

            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) {
                return -1;
            }

            return Math.max(left, right) + 1;
        }

        return check(node) !== -1;
    }
}

const bt = new BinaryTree();

bt.root = new Node(1);

bt.root.left = new Node(2);
bt.root.right = new Node(3);

bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);

bt.root.right.left = new Node(6);
bt.root.right.right = new Node(7);

bt.inorderRecursive(bt.root);
console.log();

bt.inorderIterative();

bt.preorder(bt.root);
console.log();

bt.postorder(bt.root);
console.log();

console.log(bt.height(bt.root));

console.log(bt.isBalanced());