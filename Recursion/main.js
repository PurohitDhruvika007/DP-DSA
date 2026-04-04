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
    three(i, n, start) {
        console.log(start);
        if (i % 2 == 0) {
            start -= 4;
        }
        else {
            start -= 2;
        }
        if (i < n) {
            i++;
            this.three(i, n, start);
        }
    }
    four(start, i, n) {
        console.log(start);
        if (i % 2 == 0) {
            start += 2;
        }
        else {
            start -= 1;
        }
        i++;
        if (n > 0) {
            n--;
            this.four(start, i, n);
        }
    }
    five(start, i, n) {
        console.log(start);
        if (i % 2 == 0) {
            start -= 13;
        }
        i++;
        if (n > 0) {
            n--;
            this.five(start, i, n);
        }
    }
    six(start, i, n) {
        if (i % 2 == 0) {
            console.log(start);
            start += 2;
        }
        else {
            console.log(21);
        }
        i++;
        if (n > 0) {
            n--;
            this.six(start, i, n);
        }
    }
    seven(start, n) {
        console.log(start);
        start -= 6;
        if (n > 0) {
            n--;
            this.seven(start, n);
        }
    }
    eight(start, i, n) {
        console.log(start);
        if (i % 2 == 0) {
            start += 3;
        }
        else {
            start += 1;
        }
        i++;
        if (n > 0) {
            n--;
            this.eight(start, i, n);
        }
    }
    nine(start, i, n) {
        if (i % 2 == 0) {
            console.log(start);
            start += 6;
        }
        else {
            console.log(8);
        }
        i++;
        if (n > 0) {
            n--;
            this.nine(start, i, n)
        }
    }
    ten(start, i, n) {
        console.log(start)
        if (i % 2 == 0) {
            start -= 5;
        }
        else {
            start -= 2;
        }
        i++;
        if (n > 0) {
            n--;
            this.ten(start, i, n);
        }
    }
    eleven(start, n) {
        console.log(start);
        start += 0.8;
        if (n > 0) {
            n--;
            this.eleven(start, n);
        }
    }
    twelve(start, i, n) {
        console.log(start);
        if (i % 2 == 0) {
            start -= 8;
        }
        else {
            start *= 2;
        }
        i++;
        if (n > 0) {
            n--;
            this.twelve(start, i, n);
        }
    }
    thirteen(start, n) {
        console.log(start)
        start += 2;
        if (n > 0) {
            n--;
            this.thirteen(start, n);
        }
    }
    fourteen(start, i, n) {
        console.log(start);
        start += i;
        i++;
        if (n > 0) {
            n--;
            this.fourteen(start, i, n);
        }
    }
    fifteen(start, n) {
        console.log(start);
        start -= 35;
        if (n > 0) {
            n--;
            this.fifteen(start, n);
        }
    }
    sixteen(first, second, n) {
        console.log(first);
        console.log(second);
        first -= 10;
        second += 5;
        if (n > 0) {
            n--;
            this.sixteen(first, second, n);
        }
    }
    seventeen(start, n) {
        console.log(start);
        start *= 3;
        if (n > 0) {
            n--;
            this.seventeen(start, n);
        }
    }
    eighteen(start, n) {
        console.log(start);
        start -= 0.4;
        if (n > 0) {
            n--;
            this.eighteen(start, n);
        }
    }
    nineteen(start, i, n) {
        console.log(start);
        start = start * i - (i + 1);
        i++;
        if (n > 0) {
            n--;
            this.nineteen(start, i, n)
        }
    }
}

const math = new Recursion();
// math.printNtoN(3, 8);
// math.printNtoN(9, 2);
// math.fibonacci(0, 1, 6);
// math.one(6, 8);
// math.two(3, 7, 10);
// math.three(1, 7, 36);
// math.four(22, 1, 7)
// math.five(53, 1, 8)
// math.six(9, 1, 7);
// math.seven(58, 7);
// math.eight(3, 1, 7);
// math.nine(22, 1, 7);
// math.ten(31, 1, 7);
// math.eleven(1.5, 7)
// math.twelve(14, 1, 7);
// math.thirteen(2, 7);
// math.fourteen(201, 1, 7);
// math.fifteen(544, 7)
// math.sixteen(80, 10, 4);
// math.seventeen(2, 7)
// math.eighteen(5.2, 7)
math.nineteen(8, 1, 7);