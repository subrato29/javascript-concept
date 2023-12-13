const names: string[] = ['A', 'B', 'C']
console.log(names)

//Using generics
const employeeNames: Array<String> = ['E1', 'E2', 'E3']
console.log(employeeNames)

const employeeInfo: Array<any> = ['Name', true, 12, null]
console.log(employeeInfo)

//Multi data type array
const values: (string | number)[] = ['bc', 2, 'G', 4]
console.log(values)

//Multi data type array with generics
const values1: Array<string | number> = ['xx', 10, 'H', 99]
console.log(values1)

//Iteration
//1. index base loop
for (let i = 0; i < employeeInfo.length; i++) {
  console.log(employeeInfo[i])
}

console.log('---------')

//2. for of loop
for (const name of employeeNames) {
  console.log(name)
}
