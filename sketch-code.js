function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function selectGridSize(){
    rango = window.prompt("Enter grid size: ");
    let cellSize = container.getBoundingClientRect()['width']/rango;
    removeAllChildNodes(container);
    
    container.style.setProperty('grid-template-columns', `repeat(${rango}, ${cellSize}px)`);
    container.style.setProperty('grid-template-rows', `repeat(${rango}, ${cellSize}px)`);

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
const container = document.getElementById("div-principal");
const sizeButton = document.getElementById("size-button");

sizeButton.addEventListener("click", selectGridSize);
