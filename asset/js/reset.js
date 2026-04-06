function resetGrid() {
    localStorage.removeItem("gridColors");
    localStorage.removeItem("clickCounts");
    location.reload();
}