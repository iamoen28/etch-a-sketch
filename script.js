//get grid size
const gridDimension = Number(document.getElementById('gridNumber').value);

//adds divs on DOM
const container = document.querySelector("#canvas-wrapper");
for (let index = 0; index <= gridDimension; index++) {
    container.innerHTML += '<div class= "grid" onmouseover = "draw(this)"> </div>';
}
container.style.cssText = "grid-template-columns: repeat("+gridDimension+", 1fr); grid-template-rows: repeat("+gridDimension+",1fr);"

function draw(element){
    element.style.cssText = "background-color: green;";
}

