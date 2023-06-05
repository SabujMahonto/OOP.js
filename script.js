// functional prototype
//class-bast prototype
//object-create() function

// Class
class Student {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAge() {
    return 2023 - this.birthYear;
  }
}

const student1 = new Student("Rahim Ahamed", 1992);
const student2 = new Student("Sabuj Mahaonto", 1994);
// console.log(student1);
// console.log(student2);
console.log(student1.calAge());
console.log(student2.calAge());
