//optional parameter

function getInformation(name: string, age?: number) {
  console.log(`Name ${name} : Age ${age}`)
}

getInformation('Subrato')

//default parameter
function getInfo(name: string, age: number = 20) {
  console.log(`Name ${name} : Age ${age}`)
}

getInfo('David', undefined) //undefined will be ignored
