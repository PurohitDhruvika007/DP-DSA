class StackArray {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    print() {
        console.log(this.stack);
    }
}

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
    }

    push(value) {
        const node = new Node(value);

        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (!this.top) return null;

        let removed = this.top.data;
        this.top = this.top.next;

        return removed;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.top === null;
    }

    print() {
        let current = this.top;
        let result = "";

        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }

        result += "NULL";
        console.log(result);
    }
}

function isBalanced(str) {
    let stack = [];

    let pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let ch of str) {
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
        } else if (ch === ")" || ch === "}" || ch === "]") {
            if (stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function evaluatePostfix(expression) {
    let stack = [];

    for (let ch of expression) {
        if (!isNaN(ch)) {
            stack.push(Number(ch));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            switch (ch) {
                case "+":
                    stack.push(a + b);
                    break;

                case "-":
                    stack.push(a - b);
                    break;

                case "*":
                    stack.push(a * b);
                    break;

                case "/":
                    stack.push(a / b);
                    break;
            }
        }
    }

    return stack.pop();
}

function nextGreaterElement(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }

    return result;
}

const sa = new StackArray();

sa.push(10);
sa.push(20);
sa.push(30);

sa.print();

console.log(sa.pop());

sa.print();

const sl = new StackLinkedList();

sl.push(100);
sl.push(200);
sl.push(300);

sl.print();

console.log(sl.pop());

sl.print();

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));

console.log(evaluatePostfix("23*54*+9-"));

console.log(nextGreaterElement([4, 5, 2, 25]));