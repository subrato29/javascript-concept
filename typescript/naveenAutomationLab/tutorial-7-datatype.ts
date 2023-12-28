/**
 *
 * No blank return in `never` unlike `void`
 */

function printSomething(message: string): void {
  console.log(message)
  return
}

printSomething('Hello world')

function throwError(err: string): never {
  throw new Error(err)
  //return : declaring return will throw error
}

throwError('Error123')
