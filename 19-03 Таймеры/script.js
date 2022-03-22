//1

const showMessage = (text) => {
    alert('Hello after ' + text + ' seconds');
};
setTimeout(showMessage, 4000, 4);
setTimeout(showMessage, 8000, 8);

// 2

const mul = (n,m) => {
   return n * m
}
console.log(mul(9,7));

//3

const factorial = (n) => {
    let result = 1;
    while(n) result *= n--;
    return result;
}
console.log(factorial(7));


