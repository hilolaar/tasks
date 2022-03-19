let arr = [10, 5, -5, 55, -1, 22, -4, 36, -45];
let result = arr.reduce(function (sum, elem) {
    if(elem >= 0){
        return  sum + elem;
    } else {
        return sum;
    }

});

console.log(result);

/**** Описание *****/

/*
(elem >= 0){
    return elem + sum;

1) sum = 0 ; elem = -5;
  -5 >= 0 //false
   return 0

2) sum = 0; elem = 10;
  10 >= 0 //true
  0 + 10 = 10; => sum = 10

3) sum = 10; elem = 5;
   5 >= 0 //true
10 + 5 = 15; => sum = 15

4) sum = 15; elem = 55
   55 >= 0 //true
   15 + 55 = 70; => sum = 70

5) sum = 70; elem = -1;
   -1 >= 0 //false
   return 70

6) sum = 70; elem = 22
   22 >= 0 //true
   70 + 22 = 92; => sum = 92

7)  sum = 92; elem = -4;
   -4 >= 0 //false
   return 92

8) sum = 92 ; elem = 36
   36 >= 0 //true
   92 + 36 = 128;

9) sum = 128; elem = -45;
   -45 >= 0 //false
   return 128
*/

function myFunc(value, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(myFunc('a', 3));
