const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = numbers.reduce((previous, current) => previous + current , 0);
console.log(total);

const sum = numbers.reduce((p, q) => p + q, 0);
console.log(sum)