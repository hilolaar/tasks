let x = 9;
if (x == 7) {
    alert('верно');
} else {
    alert('Не верно');
}
/*
let a = 4;
let b = 3;
if (a <= 1, b <=3){
    alert(a + b);
} else{
    alert(a-b);
}
*/

let time = 45;
if (time <= 14){
   alert('Первая четверть');
}  else if( time >= 30){
    alert('Вторая четверть');
}  else if(time >= 45 ){
    alert('Третья четверть');
} else ( time >= 59){
    alert('Четвертая четверть');
}