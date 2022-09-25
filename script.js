

//get grid size
let gridDimension = Number(document.getElementById('gridNumber').value);
//adds divs on DOM
const container = document.querySelector("#canvas-wrapper");
for (let index = 0; index <= gridDimension * gridDimension; index++) {
    container.innerHTML += '<div class= "grid" onclick = "draw(this)"> </div>';
}
container.style.cssText = "grid-template-columns: repeat("+gridDimension+", 1fr); grid-template-rows: repeat("+gridDimension+",1fr);"


function gridEditor(){
    let gridDimension = Number(document.getElementById('gridNumber').value);
    for (let index = 0; index <= gridDimension * gridDimension; index++) {
        container.innerHTML += '<div class= "grid" onclick = "draw(this)"> </div>';
    }

    let childDiv = document.querySelectorAll(".grid");
    childDiv.forEach(grid => {
        grid.style.cssText = "background-color: white;";
    });

    gridDimension = Number(document.getElementById('gridNumber').value);
    container.style.cssText = "grid-template-columns: repeat("+gridDimension+", 1fr); grid-template-rows: repeat("+gridDimension+",1fr);"
}

function addGrid(){
    let gridDimension = Number(document.getElementById('gridNumber').value);
    document.getElementById("gridNumber").value = gridDimension + 1;
}

function minusGrid(){
    let gridDimension = Number(document.getElementById('gridNumber').value);
    document.getElementById("gridNumber").value = gridDimension - 1;
}





function draw(element){
    element.style.cssText = "background-color: green;";
}