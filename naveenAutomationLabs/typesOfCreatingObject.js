//1. Object Literals: {}

const person = {
  name: "David",
  age: 27,
  phoneNo: 3786785500,
  address: "370 Lowsy Road",
};

console.log(person.address);

//2. Constructor function.
//Constructor function always starts with Capital letter. Array, Map follow the same convension.

function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const c1 = new Car("Tesla", "3X", "100k");
console.log(c1.brand);

//3. Equivalent to point 2: ES6 way to convert to a class declation, class style

class CarES6 {
  constructor(brand, model, price) {
    this.brand = brand; // Instance variable
    this.model = model;
    this.price = price;
  }

  getCarBrand() {
    console.log(`The brand of the car is: ${this.brand}`);
  }
}

const c2 = new CarES6("BMW", "5X", "70k");
console.log(c2.brand);
c2.getCarBrand();

//4. Object.create(): with some prototype object

const employeePrototype = {
  printInfo: function () {
    console.log(`Hello, employee name is ${this.name}`);
  },
};

const emp = Object.create(employeePrototype);
emp.name = "John";
emp.printInfo();

//5. using Factory function, returns an object

function createDept(deptName, hod) {
  return {
    deptName: deptName,
    hod: hod,
    printInfo: function () {
      console.log(
        `Hello, dept name is: ${this.deptName} and hod name is: ${this.hod}`
      );
    },
  };
}

const dept1 = createDept("Math", "David");
dept1.printInfo();
