import "./style.css";

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
  countDiv.innerHTML = `${counter} pancakes`;
});
app.append(button);

const countDiv: HTMLDivElement = document.createElement("div");
countDiv.innerHTML = `${counter} pancakes`;
app.append(countDiv);
