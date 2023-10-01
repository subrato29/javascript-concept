//callback function: passing function as method argument
//callback is a way to write asynchronous code

//Example: 1
function phone(name, callback) {
    console.log(name)
    callback()
}

//callback function
function getPrice() {
    console.log('Price is 1000')
}

phone('iPhone', getPrice)

//callback with async function
//Example: 2
function iPhone(version, callback) {
    console.log('The version is: ' + version);
    setTimeout(() => {
        callback('Blue')
    }, 1000);
}

function getColor(color) {
    console.log(color)
}

iPhone(12, getColor)


//Example: 3
function fetchUser(userId, callback) {
    const users = {
        1: {
            id: 1,
            name: 'David'
        },
        2: {
            id: 2,
            name: 'Rossy'
        }
    }
    setTimeout(() => {
        const user = users[userId]
        if (user) {
            callback('Valid userId: ', JSON.stringify(user))
        } else {
            callback('Err: ', 'UserId is not valid')
        }
    }, 1000)
}

function getUserData(error, userData) {
    console.log(error, userData)
}

fetchUser(3, getUserData)