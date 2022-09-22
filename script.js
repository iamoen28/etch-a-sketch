//adds divs on DOM
const container = document.querySelector("#container");
for (let index = 0; index <= 255; index++) {
    container.innerHTML += '<div class= "grid" > </div>';
}

//css border container just for viewing results
container.style.cssText = 'border: 2px solid red;';

//selects all child nodes of the parents and store it to an array
var containerChild = document.getElementById('container').childNodes;
//select every child nodes and format it using css
for (let index = 0; index < containerChild.length; index++) {
    if (containerChild[index].nodeName.toLowerCase() == 'div') {
        containerChild[index].style.cssText = 'height: 8px; width: 8px; border: 1px solid blue; margin: 0;';
    }   
}