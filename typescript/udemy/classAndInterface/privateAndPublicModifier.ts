'use strict'

class Department2 {
  name: string
  public employee: string[] = []

  constructor(name: string) {
    this.name = name
  }

  describe() {
    console.log('Department1: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employee.push(employee)
  }
}

const dept2 = new Department2('Accounting')
console.log(dept2)

dept2.addEmployee('A')
dept2.addEmployee('B')

dept2.employee[2] = 'C'

console.log(dept2.employee)
