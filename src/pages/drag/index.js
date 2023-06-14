import "./common";
import "./styles.css";

import Ball from "./components/ball";

const canvas = document.querySelector("canvas");
const ball = new Ball(canvas);
ball.draw();
