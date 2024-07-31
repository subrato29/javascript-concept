'use strict'

class Department3 {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class ITDepratment extends Department3 {
  index: number
  constructor(id: string, index: number) {
    super(id)
    this.index = index
  }
}

const itDept = new ITDepratment('Accounting', 2)
console.log(itDept)
