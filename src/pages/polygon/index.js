import "./common";
import "./styles.css";

import Polygon from "./components/polygon";

const canvas = document.querySelector("canvas");
const polygon = new Polygon(canvas);
polygon.draw();
