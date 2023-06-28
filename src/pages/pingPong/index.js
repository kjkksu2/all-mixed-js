import "./common";
import "./styles.css";

import PingPong from "./components/pingPong";

const canvas = document.querySelector("canvas");
const pingPong = new PingPong(canvas);
pingPong.animate();
