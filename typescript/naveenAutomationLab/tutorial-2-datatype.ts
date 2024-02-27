const age: number = 30
const firstName: string = 'David'

console.log(age + firstName)

//Type annotation => num: number... name: string

let num: number
num = 100

let isActive: boolean
isActive = false

let city: null
let country: undefined

let val: any = 'easy'
val = true
val = 7

function print(): void {
  console.log('hello world')
}

function getNumber(): number {
  return 123
}

//type inference, no mentioning datatype. By value of the variable, variable will understand its datatype
let num2 = 56 //type = number
