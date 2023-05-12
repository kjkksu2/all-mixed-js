class Helper {
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static getRandomColor() {
    const red = this.getRandomInt(0, 255);
    const green = this.getRandomInt(0, 255);
    const blue = this.getRandomInt(0, 255);
    return { red, green, blue };
  }
}

export default Helper;
