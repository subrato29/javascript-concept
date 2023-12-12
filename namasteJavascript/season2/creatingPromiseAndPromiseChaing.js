const cart = ['books', 'grocery', 'fruits']

//promise chaining

createOrder(cart)
  .then((orderId) => {
    console.log(orderId)
    return orderId
  })
  .then((orderId) => {
    return proceedToPayment(orderId)
  })
  .then((paymentInfo) => {
    console.log(paymentInfo)
  })
  //Whenever you consuming a promise you should always write a catch statement to gracefully handle the error due to promise reject
  .catch((err) => {
    console.log(err.message)
  })
  .then(() => {
    console.log('I will be called always')
  })

//Producer
function createOrder(cart) {
  //createOrder
  //validateCart
  //orderId

  const promise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject(new Error('Cart is not valid'))
    } else {
      //logic for create order
      const orderId = '123456'
      setTimeout(() => {
        resolve(orderId)
      }, 1000)
    }
  })

  return promise
}

function validateCart(cart) {
  return cart.length > 0
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve('Payment successful!')
  })
}
