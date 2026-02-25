const body = document.body;

function setColor(name){
    body.style.background = "none";   // 🔥 remove gradient
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    body.style.background = "none";   // 🔥 remove gradient
    body.style.backgroundColor = color; 
}

window.setColor = setColor;
window.randomColor = randomColor;

randomColor();

