// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [1, 2, 3, 4, 5, 6,];
const players = [55, 65, 66, 76, 60, 80, 88, 90];

// const selected = players.filter(x => x > 50);
const selected = players.filter(x => x > 70);
// console.log(selected);

const selected2 = players.filter(x => x > 80);
// console.log(selected2)

const Numbers = players.filter(x => x % 2 === 0);
console.log(Numbers)

const nextNumbers = players.filter(x => x % 2 === 1);
// console.log(nextNumbers)
const nextNumbers2 = players.filter(x => x % 5 === 0);
// console.log(nextNumbers2)

const friends = ['Tom', 'Zamiul', 'Jhon', 'Rafiul', 'Myce', 'Oliv', 'Sinha'];

const letters = friends.filter(x => x.length >= 5);
// console.log(letters)
