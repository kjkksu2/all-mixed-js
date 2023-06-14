import Configuration from "./configuration";
import Helper from "./helper";

class Chart extends Configuration {
  draw() {
    this.xAxis();
    this.yAxis();
    this.xLabel();
    this.yLabel();
    this.xGuideline();
    this.yGuideline();
    this.bar();
  }

  xAxis() {
    // style
    this.ctx.lineWidth = this.axisWidth;
    this.ctx.strokeStyle = this.axisColor;

    // draw
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.horizontalMargin,
      this.canvas.height - this.verticalMargin
    );
    this.ctx.lineTo(
      this.canvas.width - this.horizontalMargin,
      this.canvas.height - this.verticalMargin
    );
    this.ctx.stroke();
  }

  yAxis() {
    // style
    this.ctx.lineWidth = this.axisWidth;
    this.ctx.strokeStyle = this.axisColor;

    // draw
    this.ctx.beginPath();
    this.ctx.moveTo(this.horizontalMargin, this.verticalMargin);
    this.ctx.lineTo(
      this.horizontalMargin,
      this.canvas.height - this.verticalMargin
    );
    this.ctx.stroke();
  }

  xLabel() {
    // style
    this.ctx.font = `${this.labelStyle} ${this.labelWeight} ${this.labelSize} ${this.labelFontFamily}`;
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "top";

    // draw
    this.ctx.beginPath();
    for (let i = 0; i < this.dataLength; i++) {
      const text = this.labels[i];
      const x =
        this.horizontalMargin +
        this.horizontalInterval / 2 +
        i * this.horizontalInterval;
      const y =
        this.canvas.height -
        this.verticalMargin +
        this.verticalMargin / this.ratio;
      this.ctx.fillText(text, x, y);
    }
  }

  yLabel() {
    // style
    this.ctx.font = `${this.labelStyle} ${this.labelWeight} ${this.labelSize} ${this.labelFontFamily}`;
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.textAlign = "right";
    this.ctx.textBaseline = "middle";

    // draw
    this.ctx.beginPath();
    for (let i = 0; i <= this.numOfVerticalLabels; i++) {
      const text = Math.floor(
        this.verticalUpperBound - i * this.gapBetweenVerticalLabels
      );
      const x = this.horizontalMargin - this.horizontalMargin / this.ratio;
      const y = this.verticalMargin + i * this.verticalInterval;
      this.ctx.fillText(text, x, y);
    }
  }

  xGuideline() {
    // style
    this.ctx.lineWidth = this.guidelineWidth;
    this.ctx.strokeStyle = this.guidelineColor;

    // draw
    this.ctx.beginPath();
    for (let i = 1; i <= this.dataLength; i++) {
      this.ctx.moveTo(
        this.horizontalMargin + i * this.horizontalInterval,
        this.verticalMargin
      );
      this.ctx.lineTo(
        this.horizontalMargin + i * this.horizontalInterval,
        this.canvas.height - this.verticalMargin
      );
    }
    this.ctx.stroke();
  }

  yGuideline() {
    // style
    this.ctx.lineWidth = this.guidelineWidth;
    this.ctx.strokeStyle = this.guidelineColor;

    // draw
    this.ctx.beginPath();
    for (let i = 0; i < this.numOfVerticalLabels; i++) {
      this.ctx.moveTo(
        this.horizontalMargin,
        this.verticalMargin + i * this.verticalInterval
      );
      this.ctx.lineTo(
        this.canvas.width - this.horizontalMargin,
        this.verticalMargin + i * this.verticalInterval
      );
    }
    this.ctx.stroke();
  }

  bar() {
    for (let i = 0; i < this.dataLength; i++) {
      // style
      const color = Helper.getRandomColor();

      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`;
      this.ctx.fillStyle = `rgba(${color.red}, ${color.green}, ${color.blue}, 0.3)`;

      // draw
      const height = this.figures[i];

      this.ctx.beginPath();
      this.ctx.rect(
        this.horizontalMargin +
          i * this.horizontalInterval +
          (3 / 2) * (this.horizontalInterval / this.ratio),
        this.canvas.height - this.verticalMargin,
        this.horizontalInterval - 3 * (this.horizontalInterval / this.ratio),
        -1 * (height / this.verticalUpperBound) * this.yAxisLength
      );
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}

export default Chart;
