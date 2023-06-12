import "./common";
import "./styles.css";

import Chart from "./components/chart";

const canvas = document.querySelector("canvas");
const chart = new Chart(canvas);
chart.draw();
