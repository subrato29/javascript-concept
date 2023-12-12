/**
 * Functional Programming
 */
/**
 * map()
 * map is used to tranform an array
 */
const arr = [2, 3, 6, 4, 8]

function double(x) {
  return x * 2
}

function triple(x) {
  return x * 3
}

function binary(x) {
  return x.toString(2)
}

let output = arr.map(double)
//OR the other way of writing
output = arr.map((x) => x * 2)

console.log(output)
console.log(arr.map(triple))
console.log(arr.map(binary))

/**
 * filter()
 * filter is used to filter the specific values inside an array as per requirement
 */

const arr1 = [10, 1, 4, 2, 8, 3]

function isOdd(x) {
  return x % 2
}

console.log(arr1.filter(isOdd))
console.log(arr1.filter((x) => x > 6))

/**
 * reduce()
 * reduce is used where you need to iterate all the elements in an array and return a specific single output
 * based on requirement
 */
function findSum(arr) {
  let sum = 0
  arr.forEach((element) => {
    sum += element
  })
  return sum
}

console.log(findSum(arr1))

//The logic of findSum() is similarly depicted by using reduce() function
const sum = arr1.reduce(function (acc, curr) {
  acc = acc + curr
  return acc
}, 0)

console.log(sum)

const findMax = arr1.reduce((max, curr) => {
  if (curr > max) {
    max = curr
  }
  return max
}, 0)

console.log(findMax)

const users = [
  {
    firstName: 'Robart',
    lastName: 'Half',
    age: 20,
  },
  {
    firstName: 'David',
    lastName: 'Hopper',
    age: 26,
  },
  {
    firstName: 'John',
    lastName: 'Cart',
    age: 45,
  },
  {
    firstName: 'Rally',
    lastName: 'Give',
    age: 26,
  },
]

//return an array with full names
const fullNames = users.map((x) => x.firstName + ' ' + x.lastName)
console.log(fullNames)

//find out count of age
const result = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]
  } else {
    acc[curr.age] = 1
  }
  return acc
}, {})

console.log(result)

//find the first name of the users who age < 30
const names = users.filter((x) => x.age < 30).map((x) => x.firstName) //chaining

console.log(names)
