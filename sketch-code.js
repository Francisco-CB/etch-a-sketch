function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function eraseGrid(){
    elements = document.getElementsByClassName("pixel");
    Array.from(elements).forEach(element => element.setAttribute("style", "background-color: white;"));
}

function changePixelColor(event, color="black"){
    if ((event.ctrlKey && isMousePressed) || (event.ctrlKey && event.type == "mousedown")){
        let color = "white"
        event.target.setAttribute("style", `background-color: ${color};`);
    }
    else if ((isMousePressed) || (event.type == "mousedown")){
        event.target.setAttribute("style", `background-color: ${color};`);
    }
}

function classAddRemoveEventListeners(clss, eventListener, func, action="add"){
    elements = document.getElementsByClassName(clss);
    if (action=="add"){
        Array.from(elements).forEach(element => element.addEventListener(eventListener, func))
    }
    else if(action=="remove"){
        Array.from(elements).forEach(element => element.removeEventListener(eventListener, func))
    }
}

function selectGridSize(){
    // SE ELIMINAN LOS EVENTLISTENER QUE HAYAN
    classAddRemoveEventListeners("pixel", "mouseenter", changePixelColor, action="remove");
    classAddRemoveEventListeners("pixel", "mousedown", changePixelColor, action="remove");

    rango = Math.floor(window.prompt("Enter grid size: "));
    if(rango > max || rango == 0 || typeof(rango) !== "number"){
        rango = 1; // EN CASO DE QUE PONGA UN VALOR ILEGAL
        alert(`Maximum range of ${max}!`);
    }
    
    // SE ELIMINAN TODOS LOS PIXELES QUE HAYAN
    removeAllChildNodes(container);
    
    // SE AGREGAN LAS NUEVAS CELDAS
    container.style.setProperty('grid-template-columns', `repeat(${rango}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${rango}, 1fr)`);

    // SE AGREGAN LOS NUEVOS PIXELES
    for(let i=0; i<rango; i++){
        for(let j=0; j<rango; j++){
            div = document.createElement('div');
            div.classList.add("pixel");
            container.appendChild(div);
        }
    }
    // SE AGREGAN LOS EVENTLISTENERS NECESARIOS
    classAddRemoveEventListeners("pixel", "mouseenter", changePixelColor, action="add");
    classAddRemoveEventListeners("pixel", "mousedown", changePixelColor, action="add");
}

function getHelp(){
    msge = `Welcome to Etch-a-Sketch! Follow the instructions to use it.
            1) Select the size you would like your grid to be.
            2) Click on a cell to color it. 
            4) Keep you mouse pressed and move it to color faster.
            5) If you want to clear everything, just press "Erase all"!`;
    alert(msge);
}

let div; // VARIABLE PARA GUARDAR DIVS A AGREGAR A DIV PRINCIPAL
let rango; // RANGO DE GRID
let children; // PARA GUARDAR CHILDREN DE DIV PRINCIPAL
let pixeles; // PARA GUARDAR CLASE PIXEL DE CELDAS A PINTAR
let max = 85; // RANGO MÁXIMO DE GRID
let isMousePressed;

const container = document.getElementById("div-principal");
const sizeButton = document.getElementById("size-button");
const eraseButton = document.getElementById("erase-button");
const helpButton = document.getElementById("help-button");

sizeButton.addEventListener("click", selectGridSize);
eraseButton.addEventListener("click", eraseGrid);
helpButton.addEventListener("click", getHelp);

window.addEventListener("mousedown", event => {isMousePressed = true});
window.addEventListener("mouseup", event => {isMousePressed = false});
