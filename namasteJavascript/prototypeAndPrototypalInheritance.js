/**
 * Each object has a private property which holds a link to another object called its prototype.
 * That prototype object has a prototype of its own, and so on until an object is reached with null
 * as its prototype. By definition, null has no prototype, and acts as the final link in this
 * prototype chain
 */
let arr = ['A', 'B']

let obj1 = {
  name: 'Subrato',
  city: 'Orlando',
  getIntro: function () {
    console.log(this.name + ' from ' + this.city)
  },
}

let obj2 = {
  name: 'Mouli',
}

obj2.__proto__ = obj1 //prototypal inheritance

obj1.getIntro() //Subrato from Orlando
obj2.getIntro() //Mouli from Orlando

/**
 * Prototypal inheritance
 */
const parent = {
  value: 2,
  printValue() {
    console.log(this.value + 1)
  },
}
console.log(parent.printValue()) //3
//When calling parent.method in this case, 'this' refers to parent

const child = {
  __proto__: parent,
}
console.log(child.printValue()) //3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4 // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.printValue()) // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead
