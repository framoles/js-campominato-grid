/*creare una griglia di gioco quadrata, in cui ogni cella contiene un 
numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


const gridBox = document.getElementById("box");

const maxCells = 100;

for (let i = 0; i < maxCells; i++) {
    const cells = createCells();
    cells.innerHTML = i + 1;
    gridBox.appendChild(cells);
}

function createCells() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => { cell.classList.toggle("bg-click") });
    return cell;
}