function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function selectGridSize(){
    rango = Math.floor(window.prompt("Enter grid size: "));

    if(rango > 64 || rango == 0 || typeof(rango) !== "number"){
        rango = 1; // EN CASO DE QUE PONGA UN VALOR ILEGAL
    }
    
    cellSize = container.getBoundingClientRect()['width']/rango;
    removeAllChildNodes(container);
    
    container.style.setProperty('grid-template-columns', `repeat(${rango}, ${cellSize}px)`);
    container.style.setProperty('grid-template-rows', `repeat(${rango}, ${cellSize}px)`);

    // SE AGREGAN LAS CELDAS
    for(let i=0; i<rango; i++){
        for(let j=0; j<rango; j++){
            div = document.createElement('div');
            div.classList.add("pixel");
            container.appendChild(div);
        }
    }
}

let div; // VARIABLE PARA GUARDAR DIVS A AGREGAR A DIV PRINCIPAL
let rango; // RANGO DE GRID
let children; // PARA GUARDAR CHILDREN DE DIV PRINCIPAL
let cellSize; // TAMAÑO QUE TENDRAN LAS CELDAS
const container = document.getElementById("div-principal");
const sizeButton = document.getElementById("size-button");

sizeButton.addEventListener("click", selectGridSize);
