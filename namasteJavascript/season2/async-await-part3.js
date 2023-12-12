//resolving Promise, using async-await

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise is resolved')
  }, 3000)
})

async function getData() {
  const val = await promise
  console.log('Subrato')
  console.log(val)
}

getData()
