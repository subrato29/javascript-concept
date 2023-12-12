function outer() {
  var a = 100
  function inner() {
    console.log(a)
  }
  return inner
}

let x = outer()
x()
// output: 100

function outer() {
  var a = 100
  function inner() {
    console.log(a)
  }
  return inner
}

let y = outer()
console.log(y)

//output:
// ƒ inner() {
//     console.log(a);
// }
