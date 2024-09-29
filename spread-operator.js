const num = [1,2,3,4];
// console.log(num)
// console.log(...num)
const num2 = num;
num.push(50)
console.log(num)
console.log([...num2,20])