import "./common";
import "./styles.css";

import FlappyMonster from "./components/flappyMonster";

const canvas = document.querySelector("canvas");
const flappyBird = new FlappyMonster(canvas);
flappyBird.start();
