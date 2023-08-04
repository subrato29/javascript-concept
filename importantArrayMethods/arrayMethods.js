//1. every()
const num = [1, 2, 3, 4, 5];
let flag = num.every((el) => el < 10);
console.log(flag); //true

//2. some()
flag = num.some((el) => el < 3);
console.log(flag); //true

//3. find()
const firstElementSutisfyingTheCondition = num.find((el) => el % 3 === 0);
console.log(firstElementSutisfyingTheCondition); //3
