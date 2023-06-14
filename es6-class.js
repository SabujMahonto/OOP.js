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

const neimar = new Player("Naimar", 22, 4.5);
console.log(neimar.greet());
