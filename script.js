const rouletteBtn = document.getElementById("rouletteBtn");

const strongInput = document.getElementById("strongInput");
const weakInput = document.getElementById("weakInput");

const resultBox = document.getElementById("resultBox");

const mainResult = document.getElementById("mainResult");
const detailResult = document.getElementById("detailResult");

function parseValues(value) {
  return value
    .split(",")
    .map(v => v.trim())
    .filter(v => v !== "");
}

function randomPick(arr) {
  if (arr.length === 0) {
    return "(없음)";
  }

  return arr[Math.floor(Math.random() * arr.length)];
}

rouletteBtn.addEventListener("click", () => {

  const strongList = parseValues(strongInput.value);
  const weakList = parseValues(weakInput.value);

  const strong = randomPick(strongList);
  const weak = randomPick(weakList);

  resultBox.style.display = "block";

  mainResult.innerHTML = `${strong} ↔ ${weak}`;

  detailResult.innerHTML = `
    강점: ${strong} → ${weak}<br>
    약점: ${weak} → ${strong}
  `;
});
