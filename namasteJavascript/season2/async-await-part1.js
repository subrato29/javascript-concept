//async always return a promise
//if you return a value instead of promise, then also async will wrap that value inside a promise and return a promise
async function getData() {
    return 'anything'
}

const dataPromise = getData()
console.log(dataPromise) //return a promise [ Promise { 'anything' } ]

dataPromise.then((data) => console.log(data)) //Now it will return actual value i.e. [ anything ]

//async-await combo used to handle promises

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise is resolved')
    }, 3000)
})

async function handlePromise() {
    const val = await promise; //await is used only inside an async function
    console.log(val)
}

handlePromise()