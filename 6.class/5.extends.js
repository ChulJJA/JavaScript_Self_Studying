// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("I eat meat.");
//   }
//   sleep() {
//     console.log("I sleep in the jungle.");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("I eat meat.");
//   }
//   sleep() {
//     console.log("I sleep in the jungle.");
//   }
//   play() {
//     console.log("I play with human.");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("I eat meat.");
  }
  sleep() {
    console.log("I sleep in the jungle.");
  }
}

class Tiger extends Animal {}
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("I play with human.");
  }
  //overriding
  eat() {
    //super.eat();
    console.log("I eat shit.");
  }
}

const tiger = new Tiger("orange");
console.log(tiger);
const dog = new Dog("white", "CJ");
console.log(dog);
dog.eat();

class Counter {
  #value;
  constructor(num) {
    if (isNaN(num) || num < 0) {
      this.#value = 0;
    } else {
      this.#value = num;
    }
  }

  increment = () => {
    ++this.#value;
  };

  get value() {
    return this.#value;
  }
}

const counter = new Counter(-3);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);

class Employee {
  #name;
  #department;
  #monthlyWorkHour;
  #payRate;
  constructor(name, department, monthlyWorkHour, payRate) {
    this.#name = name;
    this.#department = department;
    this.#monthlyWorkHour = monthlyWorkHour;
    this.#payRate = payRate;
  }

  calculateMonthlyPay() {
    return this.#monthlyWorkHour * this.#payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, monthlyWorkHour) {
    super(name, department, monthlyWorkHour, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, monthlyWorkHour) {
    super(name, department, monthlyWorkHour, PartTimeEmployee.PAY_RATE);
  }
}

const cj = new FullTimeEmployee("CJ", "S/W", 30);
const lee = new PartTimeEmployee("Lee", "S/W", 20);
console.log(cj);
console.log(lee);
console.log(cj.calculateMonthlyPay());
console.log(lee.calculateMonthlyPay());
