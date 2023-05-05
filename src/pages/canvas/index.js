// 여기서 동적 import
import "./styles.css";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

window.onload = () => {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 200);
  ctx.stroke();
};
