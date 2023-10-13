import "./style.css";

let lastTime: number = 0;

function step(timeStamp: number) {
  counter += 0.001 * (timeStamp - lastTime);
  countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
  lastTime = timeStamp;
  window.requestAnimationFrame(step);
}

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Harrison's Game";

document.title = gameName;

let counter: number = 0;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = "🥞";
button.addEventListener("click", () => {
  counter++;
  countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
});
app.append(button);

const countDiv: HTMLDivElement = document.createElement("div");
countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
app.append(countDiv);

window.requestAnimationFrame(step);
