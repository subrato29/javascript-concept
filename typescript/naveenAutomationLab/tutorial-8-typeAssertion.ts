/**
 * Using <>
 * Using `as` keyword
 */

const amount: any = 900
const finalAmount = (amount as number) + 200
console.log(finalAmount)

const isBoolean: any = true
if (isBoolean as boolean) {
  console.log(isBoolean)
}
