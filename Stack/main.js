class Stack {
    #stack;
    #length;
    #top;
    constructor(length) {
        this.#stack = [];
        this.#length = length;
        this.#top = -1;
    }
    insert(data) {
        if (this.#top == this.#length - 1) {
            console.log("stack is overflow");
            return;
        }
        this.#top++;
        this.#stack[this.#top] = data;
        console.log(`${data} inserted successfully`);
    }
    update(position, data) {
        if (this.#top < position || position < 0) {
            console.log("stack is underflow");
            return;
        }
        this.#stack[this.#top] = data;
        console.log(`${data} updated successfully`);
    }
    delete() {
        let data = this.#stack[this.#top];
        this.#top--;
        console.log(`${data} deleted successfully`);
    }
    display() {
        this.#stack.map((element) => console.log(element));
    }
    isEmpty() {
        if (this.#top == -1) {
            console.log("stack is empty");
        }
        else {
            console.log("stack is not empty");
        }
    }
}

const s = new Stack(5);
s.insert(1);
s.insert(2);
s.insert(3);
s.insert(4);
s.insert(5);
s.delete(1);
s.display();
s.update(3, 10);
s.display();
s.isEmpty();