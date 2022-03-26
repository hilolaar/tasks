//1

let ageCounter = () => {
    let birthYear = Number(prompt ('Введите свой год рождения'));
    let thisYear = Number(prompt ('Введите текущий год'));

    return `вам ${thisYear - birthYear} лет`;
}

console.log(ageCounter());


//2

const showMessage = (text) => {
    let a = 0;

    const intervalId = setInterval(()=>{
        alert(text);
        a++;
        if (a === 5){
             clearInterval(intervalId);
             console.log('done');
        }
    }, 1000);
}

showMessage('Hello World');