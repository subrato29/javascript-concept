'use strict'

class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const dept = new Department('Accounting')
console.log(dept)
