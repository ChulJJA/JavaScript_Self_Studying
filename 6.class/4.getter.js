class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    console.log(name);
  }
}

const student = new Student("CJ", "Lee");
console.log(student.fullName);
student.fullName = "John Doe";
console.log(student.fullName);
