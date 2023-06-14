// ES6-class
class Player {
  constructor(nickName, jarsiNum, rating) {
    this.nickName = nickName;
    this.jarsiNum = jarsiNum;
    this.rating = rating;
  }
  greet() {
    return `Hello,${this.nickName}`;
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
  playerRating() {
    return `${this.nickName} has ${this.rating}`;
  }
}

const mesi = new Captain("mesi", 11, 3.9, "blue");
console.log(mesi.greet());
console.log(mesi.playerRating());
