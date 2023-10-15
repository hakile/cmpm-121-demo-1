import "./style.css";

interface Item {
  name: string;
  cost: number;
  rate: number;
  desc: string;
}

const availableItems: Item[] = [
  {
    name: "Pancake Shops",
    cost: 10,
    rate: 0.1,
    desc: "Shops that make 1 pancake every 10 seconds",
  },
  {
    name: "Pancake Factories",
    cost: 100,
    rate: 2,
    desc: "A factory that can produce 2 pancakes a second",
  },
  {
    name: "Pancake Reactors",
    cost: 1000,
    rate: 50,
    desc: "Nuclear reactors using all their power to make 50 pancakes a second",
  },
  {
    name: "Pancake Starfleet",
    cost: 10000,
    rate: 1500,
    desc: "In space, this starfleet harvests 1500 pancakes every second",
  },
  {
    name: "Pancake Death Laser",
    cost: 100000,
    rate: 60000,
    desc: "This laser explodes distant planets and absorbs 60000 pancakes per second",
  },
];

let counter: number = 0;
let countRate: number = 0;
let lastTime: number = 0;
let uCounts = [0, 0, 0, 0, 0];

function step(timeStamp: number) {
  counter += countRate * 0.001 * (timeStamp - lastTime);
  countDiv.innerHTML = `${counter.toFixed(4)} pancakes`;
  rateDiv.innerHTML = `${countRate.toFixed(1)} 🥞/s`;
  lastTime = timeStamp;
  if (counter >= availableItems[0].cost) {
    upgrade1.disabled = false;
  } else {
    upgrade1.disabled = true;
  }
  if (counter >= availableItems[1].cost) {
    upgrade2.disabled = false;
  } else {
    upgrade2.disabled = true;
  }
  if (counter >= availableItems[2].cost) {
    upgrade3.disabled = false;
  } else {
    upgrade3.disabled = true;
  }
  if (counter >= availableItems[3].cost) {
    upgrade4.disabled = false;
  } else {
    upgrade4.disabled = true;
  }
  if (counter >= availableItems[4].cost) {
    upgrade5.disabled = false;
  } else {
    upgrade5.disabled = true;
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
upgrade1.innerHTML =
  availableItems[0].name + ` (🥞x${availableItems[0].cost.toFixed(2)})`;
upgrade1.disabled = true;
upgrade1.title = availableItems[0].desc;
upgrade1.addEventListener("click", () => {
  countRate += availableItems[0].rate;
  counter -= availableItems[0].cost;
  uCounts[0]++;
  availableItems[0].cost *= 1.15;
  upgrade1.innerHTML =
    availableItems[0].name + ` (🥞x${availableItems[0].cost.toFixed(2)})`;
  u1Count.innerHTML = `${uCounts[0]} ${availableItems[0].name}`;
});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2.innerHTML =
  availableItems[1].name + ` (🥞x${availableItems[1].cost.toFixed(2)})`;
upgrade2.disabled = true;
upgrade2.title = availableItems[1].desc;
upgrade2.addEventListener("click", () => {
  countRate += availableItems[1].rate;
  counter -= availableItems[1].cost;
  uCounts[1]++;
  availableItems[1].cost *= 1.15;
  upgrade2.innerHTML =
    availableItems[1].name + ` (🥞x${availableItems[1].cost.toFixed(2)})`;
  u2Count.innerHTML = `${uCounts[1]} ${availableItems[1].name}`;
});
app.append(upgrade2);

app.append(document.createElement("div"));

const upgrade3 = document.createElement("button");
upgrade3.innerHTML =
  availableItems[2].name + ` (🥞x${availableItems[2].cost.toFixed(2)})`;
upgrade3.disabled = true;
upgrade3.title = availableItems[2].desc;
upgrade3.addEventListener("click", () => {
  countRate += availableItems[2].rate;
  counter -= availableItems[2].cost;
  uCounts[2]++;
  availableItems[2].cost *= 1.15;
  upgrade3.innerHTML =
    availableItems[2].name + ` (🥞x${availableItems[2].cost.toFixed(2)})`;
  u3Count.innerHTML = `${uCounts[2]} ${availableItems[2].name}`;
});
app.append(upgrade3);

const upgrade4 = document.createElement("button");
upgrade4.innerHTML =
  availableItems[3].name + ` (🥞x${availableItems[3].cost.toFixed(2)})`;
upgrade4.disabled = true;
upgrade4.title = availableItems[3].desc;
upgrade4.addEventListener("click", () => {
  countRate += availableItems[3].rate;
  counter -= availableItems[3].cost;
  uCounts[3]++;
  availableItems[3].cost *= 1.15;
  upgrade4.innerHTML =
    availableItems[3].name + ` (🥞x${availableItems[3].cost.toFixed(2)})`;
  u4Count.innerHTML = `${uCounts[3]} ${availableItems[3].name}`;
});
app.append(upgrade4);

app.append(document.createElement("div"));

const upgrade5 = document.createElement("button");
upgrade5.innerHTML =
  availableItems[4].name + ` (🥞x${availableItems[4].cost.toFixed(2)})`;
upgrade5.disabled = true;
upgrade5.title = availableItems[4].desc;
upgrade5.addEventListener("click", () => {
  countRate += availableItems[4].rate;
  counter -= availableItems[4].cost;
  uCounts[4]++;
  availableItems[4].cost *= 1.15;
  upgrade5.innerHTML =
    availableItems[4].name + ` (🥞x${availableItems[4].cost.toFixed(2)})`;
  u5Count.innerHTML = `${uCounts[4]} ${availableItems[4].name}`;
});
app.append(upgrade5);

const countDiv: HTMLDivElement = document.createElement("div");
countDiv.innerHTML = `${counter.toFixed(6)} pancakes`;
app.append(countDiv);

const rateDiv: HTMLDivElement = document.createElement("div");
rateDiv.innerHTML = `${countRate.toFixed(1)} 🥞/s`;
app.append(rateDiv);

const u1Count: HTMLDivElement = document.createElement("div");
u1Count.innerHTML = `${uCounts[0]} ${availableItems[0].name}`;
app.append(u1Count);

const u2Count: HTMLDivElement = document.createElement("div");
u2Count.innerHTML = `${uCounts[1]} ${availableItems[1].name}`;
app.append(u2Count);

const u3Count: HTMLDivElement = document.createElement("div");
u3Count.innerHTML = `${uCounts[2]} ${availableItems[2].name}`;
app.append(u3Count);

const u4Count: HTMLDivElement = document.createElement("div");
u4Count.innerHTML = `${uCounts[3]} ${availableItems[3].name}`;
app.append(u4Count);

const u5Count: HTMLDivElement = document.createElement("div");
u5Count.innerHTML = `${uCounts[4]} ${availableItems[4].name}`;
app.append(u5Count);

window.requestAnimationFrame(step);
console.log("Step 10");
