
let gridsize = 20;
let mouseDown = false;
const grid = document.querySelector("#grid");
const input = document.querySelector("input")
const btn = document.querySelector("button");
const selection = document.querySelector("#selection");

console.log(selection.value);
// first initalitation
for(let i = 0; i < gridsize; i++){
    for(let j = 0; j < gridsize; j++) {
        const gridSquares = document.createElement("div");
        gridSquares.id = i + ":" + j;
        gridSquares.className = "grid-squares";
        gridSquares.style.height = 100 / gridsize + '%';
        gridSquares.style.width = 100 / gridsize + '%';
        grid.appendChild(gridSquares);
    }
}



document.addEventListener("mousedown",function(e) {
    mouseDown = true;
})

document.addEventListener("mouseup",function(e) {
    mouseDown = false;
})


btn.addEventListener("click", function(e) {
    gridsize = input.value;
    grid.replaceChildren();
    for(let i = 0; i < gridsize; i++){
        for(let j = 0; j < gridsize; j++) {
            const gridSquares = document.createElement("div");
            gridSquares.id = i + ":" + j;
            gridSquares.className = "grid-squares";
            gridSquares.style.height = 100 / gridsize + '%';
            gridSquares.style.width = 100 / gridsize + '%';
            grid.appendChild(gridSquares);
        }
    }

})

grid.addEventListener("mouseover", function(e){
    if(mouseDown) {
        if(selection.value === "random") {
            e.target.style.backgroundColor = randomColor();
        } else if(selection.value === "black")
            {
            e.target.style.backgroundColor = "#000000"; 
        } else if (selection.value === "red") {
            e.target.style.backgroundColor = "#460909"; 
        } else { //green
            e.target.style.backgroundColor = "#00ff00";
        }
    }
})

grid.addEventListener("mousedown", function(e) {
    e.preventDefault();
    if(selection.value === "random") {
        e.target.style.backgroundColor = randomColor();
    } else if(selection.value === "black")
        {
        e.target.style.backgroundColor = "#000000"; 
    } else if (selection.value === "red") {
        e.target.style.backgroundColor = "#460909"; 
    } else { //green
        e.target.style.backgroundColor = "#00ff00";
    }
})

function randomColor() {
    var color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}