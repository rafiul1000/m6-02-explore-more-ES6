/* Practice Problem map(), filter(), find()
==========================================

1) You have an odd array (array with odd numbers). [1, 3, 5, 7, 9].
console.log output:  [2, 4, 6, 8, 10]. */

const numbers = [1, 3, 5, 7, 9];

const evenNumbers = numbers.map(x => x + 1);
// console.log(evenNumbers)

/* 2) You are given an array. say [33, 50, 79, 78, 90, 101, 30];
console.log(): return an array which are devisible by 10 */

numbers10 = [33, 50, 79, 78, 90, 101, 30]
const devisibleBy10 = numbers10.filter(x => x % 10 === 0);
// console.log(devisibleBy10);          // output: [ 50, 90, 30 ]

numbersTen = [33, 50, 79, 78, 90, 101, 30]
const devisibleByTen = numbersTen.find(x => x % 10 === 0);
// console.log(devisibleByTen);               // output: 50


// 3) You have an array of objects:

const instructor = [
    {name: 'Nodi', age: 28, position: 'Seniour'},
    {name: 'Akil', age: 26, position: 'Jonior'},
    {name: 'Shobuj', age: 30, position: 'Seniour'}

];

const seniors = instructor.filter(x => x.position = 'Seniour')

console.log(seniors)

const instrPosition = instructor.map(y => y.name)

console.log(instrPosition)