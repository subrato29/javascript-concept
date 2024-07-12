'use strict'

class Department1 {
  name: string

  constructor(name: string) {
    this.name = name
  }

  describe() {
    console.log('Department1: ' + this.name)
  }
}

const dept1 = new Department1('Accounting')
console.log(dept1)

dept1.describe()
