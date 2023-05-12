import Chart from "./class/chart";

const canvas = document.querySelector("canvas");

canvas.width = 1000;
canvas.height = 700;

const chart = new Chart(canvas);
chart.draw();
