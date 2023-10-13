import "./style.css";

let counter: number = 0;
let countRate: number = 0;
let lastTime: number = 0;

function step(timeStamp: number) {
  counter += countRate * 0.001 * (timeStamp - lastTime);
  countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
  lastTime = timeStamp;
  if (counter >= 10) {
    upgrade.disabled = false;
  } else {
    upgrade.disabled = true;
  }
  window.requestAnimationFrame(step);
}

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Harrison's Game";

document.title = gameName;

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

const upgrade = document.createElement("button");
upgrade.innerHTML = "Upgrade (🥞x10)";
upgrade.disabled = true;
upgrade.addEventListener("click", () => {
  countRate++;
  counter -= 10;
});
app.append(upgrade);

const countDiv: HTMLDivElement = document.createElement("div");
countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
app.append(countDiv);

window.requestAnimationFrame(step);
console.log("Step 5");
