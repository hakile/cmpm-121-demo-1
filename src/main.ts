import "./style.css";

let counter: number = 0;
let countRate: number = 0;
let lastTime: number = 0;
let uCounts = [0, 0, 0];

function step(timeStamp: number) {
  counter += countRate * 0.001 * (timeStamp - lastTime);
  countDiv.innerHTML = `${counter.toFixed(4)} pancakes`;
  rateDiv.innerHTML = `${countRate.toFixed(1)} 🥞/s`;
  lastTime = timeStamp;
  if (counter >= 10) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
  }
  if (counter >= 100) {
    upgrade2.disabled = false;
  } else {
    upgrade2.disabled = true;
  }
  if (counter >= 1000) {
    upgrade3.disabled = false;
  } else {
    upgrade3.disabled = true;
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
});
app.append(button);

const upgrade1 = document.createElement("button");
upgrade1.innerHTML = "+ A (🥞x10)";
upgrade1.disabled = true;
upgrade1.addEventListener("click", () => {
  countRate += 0.1;
  counter -= 10;
  uCounts[0]++;
  u1Count.innerHTML = `${uCounts[0]} A`;
});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "+ B (🥞x100)";
upgrade2.disabled = true;
upgrade2.addEventListener("click", () => {
  countRate += 2;
  counter -= 100;
  uCounts[1]++;
  u2Count.innerHTML = `${uCounts[1]} B`;
});
app.append(upgrade2);

const upgrade3 = document.createElement("button");
upgrade3.innerHTML = "+ C (🥞x1000)";
upgrade3.disabled = true;
upgrade3.addEventListener("click", () => {
  countRate += 50;
  counter -= 1000;
  uCounts[2]++;
  u3Count.innerHTML = `${uCounts[2]} C`;
});
app.append(upgrade3);

const countDiv: HTMLDivElement = document.createElement("div");
countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
app.append(countDiv);

const rateDiv: HTMLDivElement = document.createElement("div");
rateDiv.innerHTML = `${countRate.toFixed(1)} 🥞/s`;
app.append(rateDiv);

const u1Count: HTMLDivElement = document.createElement("div");
u1Count.innerHTML = `${uCounts[0]} A`;
app.append(u1Count);

const u2Count: HTMLDivElement = document.createElement("div");
u2Count.innerHTML = `${uCounts[1]} B`;
app.append(u2Count);

const u3Count: HTMLDivElement = document.createElement("div");
u3Count.innerHTML = `${uCounts[2]} C`;
app.append(u3Count);

window.requestAnimationFrame(step);
console.log("Step 6");
