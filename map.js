const numbers = [4, 5, 2, 8, 10];

function doubleIt(num){
    console.log('number now: ', num)
    return num * 2;
}
const result = numbers.map(doubleIt)
console.log(result)






/* const doubled = [];
for(num of numbers){
    const double = num * 2;
    doubled.push(double)
}

// console.log(doubled) */