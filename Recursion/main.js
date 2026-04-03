class Recursion {
    printNtoN(start, end) {
        console.log(start);
        if (start < end) {
            start++;
            this.printNtoN(start, end);
        }
        if (start > end) {
            start--;
            this.printNtoN(start, end);
        }
    }
    fibonacci(first, second, n) {
        if (first == 0) {
            console.log(first);
            console.log(second);
        }
        let ans = first + second;
        first = second;
        second = ans;
        console.log(second);
        if (n > 0) {
            n--;
            this.fibonacci(first, second, n);
        }
    }
    one(n, start) {
        console.log(start)
        if (n > 0) {
            n--;
            this.one(n, start / 2);
        }
    }
    two(n, first, second) {
        console.log(first);
        console.log(second);
        if (n > 0) {
            n--;
            this.two(n, first + 1, second + 1);
        }
    }
}

const math = new Recursion();
// math.printNtoN(3, 8);
// math.printNtoN(9, 2);
// math.fibonacci(0, 1, 6);
// math.one(6, 8);
math.two(4, 7, 10);

