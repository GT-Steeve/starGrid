const grid = document.getElementById("grid");

// Palette de couleurs agréables (pastel)
const colors = [
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#FFC6FF"
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let savedColors = JSON.parse(localStorage.getItem("gridColors")) || Array(25).fill(null);
let clickCounts = JSON.parse(localStorage.getItem("clickCounts")) || Array(25).fill(0);

function saveData() {
    localStorage.setItem("gridColors", JSON.stringify(savedColors));
    localStorage.setItem("clickCounts", JSON.stringify(clickCounts));
}

for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (savedColors[i]) {
        cell.style.backgroundColor = savedColors[i];
    }

    cell.textContent = clickCounts[i];

    cell.addEventListener("click", () => {
        const color = getRandomColor();
        cell.style.backgroundColor = color;

        clickCounts[i]++;
        cell.textContent = clickCounts[i];

        savedColors[i] = color;
        saveData();
    });

    grid.appendChild(cell);
}