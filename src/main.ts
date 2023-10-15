import "./style.css";

let counter: number = 0;
let countRate: number = 0;
let lastTime: number = 0;
let uCounts = [0, 0, 0];
let uCosts = [10, 100, 1000];

function step(timeStamp: number) {
  counter += countRate * 0.001 * (timeStamp - lastTime);
  countDiv.innerHTML = `${counter.toFixed(4)} pancakes`;
  rateDiv.innerHTML = `${countRate.toFixed(1)} 🥞/s`;
  lastTime = timeStamp;
  if (counter >= uCosts[0]) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
  }
  if (counter >= uCosts[1]) {
    upgrade2.disabled = false;
  } else {
    upgrade2.disabled = true;
  }
  if (counter >= uCosts[2]) {
    upgrade3.disabled = false;
  } else {
    upgrade3.disabled = true;
  }
  window.requestAnimationFrame(step);
}

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Harrison's Pancake Clicker";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = "🥞";
button.addEventListener("click", () => {
  counter++;
});
button.style.fontSize = "3em";
app.append(button);

app.append(document.createElement("div"));

const upgrade1 = document.createElement("button");
upgrade1.innerHTML = `+ Pancake Shop (🥞x${uCosts[0].toFixed(2)})`;
upgrade1.disabled = true;
upgrade1.addEventListener("click", () => {
  countRate += 0.1;
  counter -= uCosts[0];
  uCounts[0]++;
  uCosts[0] *= 1.15;
  upgrade1.innerHTML = `+ Pancake Shop  (🥞x${uCosts[0].toFixed(2)})`;
  u1Count.innerHTML = `${uCounts[0]} Pancake Shops`;
});
app.append(upgrade1);

app.append(document.createElement("div"));

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = `+ Pancake Factory (🥞x${uCosts[1].toFixed(2)})`;
upgrade2.disabled = true;
upgrade2.addEventListener("click", () => {
  countRate += 2;
  counter -= uCosts[1];
  uCounts[1]++;
  uCosts[1] *= 1.15;
  upgrade2.innerHTML = `+ Pancake Factory (🥞x${uCosts[1].toFixed(2)})`;
  u2Count.innerHTML = `${uCounts[1]} Pancake Factories`;
});
app.append(upgrade2);

app.append(document.createElement("div"));

const upgrade3 = document.createElement("button");
upgrade3.innerHTML = `+ Pancake Reactor (🥞x${uCosts[2].toFixed(2)})`;
upgrade3.disabled = true;
upgrade3.addEventListener("click", () => {
  countRate += 50;
  counter -= uCosts[2];
  uCounts[2]++;
  uCosts[2] *= 1.15;
  upgrade3.innerHTML = `+ Pancake Reactor (🥞x${uCosts[2].toFixed(2)})`;
  u3Count.innerHTML = `${uCounts[2]} Pancake Reactors`;
});
app.append(upgrade3);

const countDiv: HTMLDivElement = document.createElement("div");
countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
app.append(countDiv);

const rateDiv: HTMLDivElement = document.createElement("div");
rateDiv.innerHTML = `${countRate.toFixed(1)} 🥞/s`;
app.append(rateDiv);

const u1Count: HTMLDivElement = document.createElement("div");
u1Count.innerHTML = `${uCounts[0]} Pancake Shops`;
app.append(u1Count);

const u2Count: HTMLDivElement = document.createElement("div");
u2Count.innerHTML = `${uCounts[1]} Pancake Factories`;
app.append(u2Count);

const u3Count: HTMLDivElement = document.createElement("div");
u3Count.innerHTML = `${uCounts[2]} Pancake Reactors`;
app.append(u3Count);

window.requestAnimationFrame(step);
console.log("Step 8");
