class Recursion {
    sum(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    cube(n) {
        return n * n * n;
    }
    hello(n) {
        console.log("hello " + n);
        n++;
        if (n <= 10) {
            this.hello(n);
        }
    }
    print1toN(n, i) {
        console.log(i);
        i++;
        if (i <= n) {
            this.print1toN(n, i);
        }
    }
    printNto1(n) {
        console.log(n);
        n--;
        if (n >= 1) {
            this.printNto1(n);
        }
    }
    sumRecursion(n) {
        if (n == 1) {
            return 1;
        }
        return n + this.sumRecursion(n - 1);
    }
    factRecursion(n) {
        if (n == 1) {
            return 1;
        }
        return n * this.factRecursion(n - 1);
    }
}

const math = new Recursion();
// let ans = math.sum(10);
// console.log(ans);
// let cube = math.cube(3);
// console.log(cube);
// math.hello(1)
// math.print1toN(10, 1);
// math.printNto1(15);
// const ans = math.sumRecursion(10);
// console.log(ans);
const ans = math.factRecursion(5);
console.log(ans);

