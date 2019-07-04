var squares = document.querySelectorAll(".colorSquare");
var colors = generateRandomColors(squares.length);

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1Container = document.querySelector(".h1Container");

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    // squares[i].addEventListener ("click", function(){
    //     var clickedColor = this.style.backgroundColor;
    //     if (pickedColor === clickedColor) {
    //         messageDisplay.textContent = "CORRECT!";
    //         changeColors(clickedColor);
    //     } else {
    //         this.style.backgroundColor = "#232323";
    //         messageDisplay.textContent = "TRY AGAIN!";
    //     }
    // });
    squares[i].addEventListener ("click", checkColor);
}

function checkColor(){
    var clickedColor = this.style.backgroundColor;
    if (pickedColor === clickedColor) {
        messageDisplay.textContent = "CORRECT!";
        changeColors(clickedColor);
        h1Container.style.backgroundColor = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "TRY AGAIN!";
    }
}

function changeColors(x){
    for (var i= 0 ; i< squares.length; i++){
        squares[i].style.backgroundColor = x;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    console.log('random: ' + random + ', colors['+random+']='+colors[random]);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for (var i =0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b +")";
}