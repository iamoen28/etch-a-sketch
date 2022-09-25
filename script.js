function getGridSize(){
    return Number(document.getElementById('gridNumber').value);
}


function loadGrid(gridDimension){
    const container = document.querySelector("#canvas-wrapper");
    for (let index = 0; index <= gridDimension * gridDimension; index++) {
        container.innerHTML += '<div class= "grid" onmouseover = "draw(this)"> </div>';
    }
    container.style.cssText = "grid-template-columns: repeat("+gridDimension+", 1fr); grid-template-rows: repeat("+gridDimension+",1fr);"
    let childDiv = document.querySelectorAll(".grid");
    childDiv.forEach(grid => {
        grid.style.cssText = "background-color: white;";
    });
}

function addGrid(){
    let size = getGridSize();
    if (size == 64) {
        
    }else{
        size++;
        document.getElementById('gridNumber').value = size;
    }
    loadGrid(size);
}

function minusGrid(){
    let size = getGridSize();
    if (gridDimension == 0) {
        
    }else{
        size--;
        document.getElementById('gridNumber').value = size;
    }
    loadGrid(size);
}

function getColor(){
    return document.getElementById("color-picker").value;
}

function draw(element){
    const RandomColor = document.getElementById("randomColor").checked;
    if (RandomColor) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.cssText = "background-color: #" + randomColor;
    }else{
        element.style.cssText = "background-color: " + getColor();
    }
}

//default grid size
loadGrid(getGridSize());