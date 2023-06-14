// ES6-class
class Player {
  #tokenNum;
  #password = 12345;

  constructor(nickName, jarsiNum, rating, tockenNum) {
    this.nickName = nickName;
    this.jarsiNum = jarsiNum;
    this.rating = rating;
    this.#tokenNum = tockenNum;
    console.log(this.#password);
    this.greet();
    this.playerRating();
  }
  #greet() {
    return `Hello,${this.nickName}`;
  }
  #playerRating() {
    return `${this.nickName} has ${this.rating}`;
  }
}

const neymar = new Player("Neymar", 22, 4.5);
console.log(neymar.greet());

// Extend

class Captain extends Player {
  constructor(nickName, jarsiNum, rating, bandColor) {
    super(nickName, jarsiNum, rating);
    this.bandColor = bandColor;
  }
}

const mesi = new Captain("mesi", 11, 3.9, "blue");
console.log(mesi.greet());
console.log(mesi.playerRating());
