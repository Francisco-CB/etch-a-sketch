function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function selectGridSize(){
    rango = window.prompt("Enter grid size: ");
    
    removeAllChildNodes(container);

    for(let i=0; i<rango; i++){
        div = document.createElement('div');
        div.classList.add("pixel");
        div.textContent = `${i}`;
        container.appendChild(div);
    }
}

let div; // VARIABLE PARA GUARDAR DIVS A AGREGAR A DIV PRINCIPAL
let rango; // RANGO DE GRID
let children; // PARA GUARDAR CHILDREN DE DIV PRINCIPAL
const container = document.getElementById("div-principal");
const sizeButton = document.getElementById("size-button");

sizeButton.addEventListener("click", selectGridSize);
