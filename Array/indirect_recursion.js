let totalMango = 0;
let buyMango = (money) => {
    totalMango++;
    if (money > 0) {
        console.log(`total mango purchased ${totalMango}`)
        canPurchaseMore(money);
    }
}
let canPurchaseMore = (money) => {
    buyMango(money - 20)
}
//it is an type of recursion.

buyMango(100);