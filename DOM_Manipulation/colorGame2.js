var squares = document.querySelectorAll(".colorSquare");
var colors = generateRandomColors(squares.length);

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1Container = document.querySelector(".h1Container");
var resetButton = document.querySelector(".resetButton");
var easyButton = document.querySelector(".easyButton");
var hardButton = document.querySelector(".hardButton");

var mainContainer = document.querySelector(".mainContainer");

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
        resetButton.textContent = "PLAY AGAIN?";
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

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(squares.length);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1Container.style.backgroundColor = "steelblue";


    for (var i= 0 ; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

})

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "block";
        }
    }
})

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    
    
    
    
    //mainContainer.removeChild(squares);

    
    // colors = generateEasyGame(squares.length);
    // //var num = squares.length;
    // function generateEasyGame(num){
    //     var arr = []; 

    // for (var i =0; i<num/2; i++) {
    //     arr.push(randomColor());
    // }
    // return arr;
    // };
})