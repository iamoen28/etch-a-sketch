function loadGrid(gridDimension){
    const container = document.querySelector("#canvas-wrapper");
    for (let index = 0; index <= gridDimension * gridDimension; index++) {
        container.innerHTML += '<div class= "grid" onclick = "draw(this)"> </div>';
    }
    container.style.cssText = "grid-template-columns: repeat("+gridDimension+", 1fr); grid-template-rows: repeat("+gridDimension+",1fr);"
    let childDiv = document.querySelectorAll(".grid");
    childDiv.forEach(grid => {
        grid.style.cssText = "background-color: white;";
    });
}

function addGrid(){
    let gridDimension = Number(document.getElementById('gridNumber').value);
    if (gridDimension == 64) {
        
    }else{
        gridDimension++;
        document.getElementById('gridNumber').value = gridDimension;
    }
    loadGrid(gridDimension);
}

function minusGrid(){
    let gridDimension = Number(document.getElementById('gridNumber').value);
    if (gridDimension == 0) {
        
    }else{
        gridDimension--;
        document.getElementById('gridNumber').value = gridDimension;
    }
    loadGrid(gridDimension);
}

function draw(element){
    element.style.cssText = "background-color: green;";
}

loadGrid(16);