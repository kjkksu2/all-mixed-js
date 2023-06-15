import "./common";
import "./styles.css";

import FlappyBird from "./components/flappyBird";

const canvas = document.querySelector("canvas");
const flappyBird = new FlappyBird(canvas);
flappyBird.start();
