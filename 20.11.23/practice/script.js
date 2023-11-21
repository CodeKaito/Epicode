let num = 5;
function factorial(n) {
    let res = 1;
    for (let i = n; i > 0; i--) {
        res *= i;
    }
    return res;
}

let result = factorial(num);
console.log(result);