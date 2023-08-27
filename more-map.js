const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(x => x * 2);

console.log(doubled);
const numbers2 = [10, 20, 30, 40, 50];

const fiveadded = numbers2.map(x => x + 5);

console.log(fiveadded);
const numbers3 = [10, 20, 30, 40, 50];

const fivededucted = numbers3.map(x => x - 5);

console.log(fivededucted);

const friends = ['Tom', 'Jhon', 'Micheal', 'Oliver'];

const lengths = friends.map(friend => friend.length);
console.log(lengths)

const firstLetter = friends.map(first => first[0]);
console.log(firstLetter)

