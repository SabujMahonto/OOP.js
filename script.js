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

console.log(Student.prototype);
console.log(student1.__proto__);

// Class
//instance
// OOP 4 principal\
//  1. Abstraction
// 2.Encapsulations
// 3.inheritance
// 4.polimotisome

const obj = {
  age: 1990,
};
console.log(obj.hasOwnProperty());

class Test {
  constructor(birthYear) {
    this.birthYear = this.birthYear;
  }
}

const testObj = new Test(1993);
console.log(testObj.hasOwnProperty());
console.log(testObj.hasOwnProperty("birthYear"));
///////////////////////////////////////////////////////////////////////
// constructor  function
/////////////////////////////////////////////////////////////////////
function Person(nickName, birthYear) {
  this.nickName = nickName;
  this.birthYear = birthYear;

  // Never do this
  // this.calAge = function () {
  //   console.log(2023 - birthYear);
  // };
}
Person.prototype.calAge = function () {
  console.log(2023 - this.birthYear);
};

const sabuj = new Person("sabuj", "1993");
const nasim = new Person("nasim", 1990);
// new create a empty object {}
// function call this keyword {}
// {} link to prototype
//function will automatically return;

console.log(sabuj);
console.log(nasim instanceof Person);
sabuj.calAge();
nasim.calAge();
console.log(sabuj.__proto__ === Person.prototype);
console.log(Person.prototype === Person.prototype);
console.log(Person.prototype.isPrototypeOf(sabuj));
////////////////////////////////////////////////////////
//ES6 class
////////////////////////////////////////////////////////

class NewUser {
  constructor(userFullName, userBirthYear) {
    this.userFullName = userFullName;
    this.userBirthYear = userBirthYear;
  }
  calculateAge = function () {
    return 2023 - this.userBirthYear;
  };
  greet = function () {
    return `Hello, ${this.userFullName}`;
  };
}

const newUser = new NewUser("sabuj mahonto", 1993);
console.log(newUser);
console.log(newUser.calculateAge());
console.log(newUser.greet());

// class can't Hosted
// class always first-class function
//class use automatic "use street"

class CenamaHall {
  constructor(movieName, setCount, audience) {
    this.movieName = movieName;
    this.setCount = setCount;
    this.audience = [];
  }
  //getter
  get ticketPrice() {
    return this.setCount * 200;
  }
  // // setter
  // set audienceCount(name) {
  //   this.audience.push(name, this.movieName, this.setCount);
  // }
}

const rahim = new CenamaHall("SpiderMen", 4);
console.log(rahim.ticketPrice);

console.log(rahim);
////////////////////////////////////////////////////////////////////////////
// object.create()
//////////////////////////////////////////////////////////////////////////////
const PersonProto = {
  calAge() {
    return 2023 - this.birthYear;
  },
};

const jessika = Object.create(PersonProto);
jessika.fullName = "jessika roy";
jessika.birthYear = 1994;

console.log(jessika);
console.log(jessika.calAge());
