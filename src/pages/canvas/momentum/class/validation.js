class Validation {
  static canvas = document.querySelector("canvas");

  static makeBallsInsideCanvas(ball) {
    if (ball.x + ball.r > this.canvas.width) {
      ball.vx *= -1;
    }
    if (ball.x - ball.r < 0) {
      ball.vx *= -1;
    }
    if (ball.y + ball.r > this.canvas.height) {
      ball.vy *= -1;
    }
    if (ball.y - ball.r < 0) {
      ball.vy *= -1;
    }
  }

  static isCollided(ball1, ball2) {
    const distance = Math.sqrt(
      (ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2
    );

    if (distance < ball1.r + ball2.r) {
      return true;
    }
    return false;
  }
}

export default Validation;
