//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//Example of a callback function
function iPhone(version, callback) {
    console.log('The version is: ' + version);
    const price = getPrice()
    setTimeout(() => {
        callback(price + ' Blue')
    }, 1000);
}

function getColor(color) {
    console.log(color)
}

function getPrice() {
    return 1000
}

iPhone(12, getColor)


//Here we are passing a callback function
createOrder(cart, function (orderId) {
    proceedPayment(orderId)
})

//Here we are attaching a callback function
const promise = createOrder(cart)
promise.then(function (orderId) {
    proceedPayment(orderId)
})

/**
 * 3 states of promise
 * 1. Pending
 * 2. Fulfilled 
 * 3. Rejected
 * 
 * 
 * Promise is resolved only once and it's immutable
 */

//callback hell
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance()
        })
    })
})

//use of promise chaining
createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo))