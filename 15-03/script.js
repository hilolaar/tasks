

let name = 'Василий';
let getName = () => (name === undefined || name !== 'Василий' ) ? `Привет, гость` : `Привет, ${name}`;
console.log(getName());



let array = [1, 2, 3, 4, 1, 1, 1, 4, 2, 2, 2, 2, 2, 2];

let result = array.map(value => value * 2);

console.log(result);