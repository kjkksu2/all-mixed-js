import Momentum from "./class/momentum";

const canvas = document.querySelector("canvas");
const momentum = new Momentum(5, canvas);
momentum.animate();
