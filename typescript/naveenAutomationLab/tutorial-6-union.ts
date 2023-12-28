let userId: string | number

userId = 100
userId = 'sam'

function getCustomerId(customerId: string | number) {
  if (typeof customerId === 'number') {
    return 'CustomerId is a number'
  } else if (typeof customerId === 'string') {
    return 'CustomerId is a string'
  }
}

const value: number = 123
console.log(getCustomerId(value))
