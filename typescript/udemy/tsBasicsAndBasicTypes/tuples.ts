/**
 * In TypeScript, a tuple is a data structure that allows you to store a fixed-size,
 * ordered collection of elements of different types. Unlike arrays,
 * where elements are typically of the same type, tuples can contain elements of varying types.
 *
 */

//array
let arr: string[] = ['a', 'b']
arr[1] = 'd'
console.log(arr)

//tupples
let tupples: [number, string] = [2, 'G']
tupples[1] = 'H'
//tupples.push(true) : ERROR
console.log(tupples)

//push() is allowed in tuples
