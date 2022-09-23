//adds divs on DOM
const container = document.querySelector("#canvas-wrapper");
for (let index = 0; index <= 255; index++) {
    container.innerHTML += '<div class= "grid" onmouseover = "draw(this)"> </div>';
}

function draw(element){
    element.style.cssText = "background-color: green;";
}