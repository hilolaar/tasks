//1

let numbers = prompt('Введите число');
let n = 0;

   while(numbers != 99){
       n++;
       numbers = prompt('Введите число');
}

console.log('Количество чисел - ' + n);

//2


let num = 0;
let sum = 0;
let countNumbers = Number(prompt('Введите число'));

   while(countNumbers != 999){
      num++;
      sum += countNumbers;
}
console.log('Количество чисел - ' + num ,'сумма чисел = ' + sum);



