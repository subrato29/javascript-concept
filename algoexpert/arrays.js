let arr = new Array(5).fill(0);
console.log(arr); //[ 0, 0, 0, 0, 0 ]

arr = [34, 20, 89, 10];
arr.length = 1;
console.log(arr); //34
arr.length = 3; //[ 34, <2 empty items> ]
console.log(arr);