import Data from "./data";

class Configuration {
  ratio = 10;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.refineData();
    this.init();
  }

  refineData() {
    this.dataLength = Data.data.length;
    this.labels = [];
    this.figures = [];

    Data.data.forEach((v) => {
      this.labels.push(v.label);
      this.figures.push(v.value);
    });
  }

  init() {
    this.axis();
    this.label();
    this.interval();
    this.guideline();
  }

  axis() {
    this.axisWidth = 2;
    this.axisColor = "#D0D0D0";
    this.verticalMargin = (this.ratio / 100) * this.canvas.height;
    this.horizontalMargin = (this.ratio / 100) * this.canvas.width;

    this.xAxisLength = this.canvas.width - 2 * this.horizontalMargin;
    this.yAxisLength = this.canvas.height - 2 * this.verticalMargin;
  }

  label() {
    this.labelStyle = "normal";
    this.labelWeight = "bold";
    this.labelSize = "16px";
    this.labelFontFamily = "-apple-system";

    // y-axis
    this.numOfVerticalLabels = 8;
    this.verticalUpperBound = Math.max(...this.figures);
    this.gapBetweenVerticalLabels =
      this.verticalUpperBound / this.numOfVerticalLabels;
  }

  interval() {
    this.horizontalInterval = this.xAxisLength / this.labels.length;
    this.verticalInterval = this.yAxisLength / this.numOfVerticalLabels;
  }

  guideline() {
    this.guidelineWidth = 1;
    this.guidelineColor = "#E5E5E5";
  }
}

export default Configuration;
