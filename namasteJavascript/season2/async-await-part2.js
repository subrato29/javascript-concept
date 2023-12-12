//resolving Promise, NOT using async-await

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise is resolved')
  }, 3000)
})

function getData() {
  promise.then((res) => console.log(res))
  console.log('Subrato')
}

getData()
