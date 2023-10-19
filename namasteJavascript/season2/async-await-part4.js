
//resolving Promise, using async-await, more complex problem

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise1 is resolved')
    }, 6000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise2 is resolved')
    }, 3000)
})


async function getData() {
    console.log('Start execution')
    
    const val1 = await promise1;
    console.log('Subrato')
    console.log(val1)

    const val2 = await promise2;
    console.log('Mouli')
    console.log(val2)
}

getData()