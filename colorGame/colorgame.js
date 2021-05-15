var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
    //add initial color to squares
        squares[i].style.backgroundColor = colors[i];
    //add click listeners to the color
        squares[i].addEventListener("click", function(){
        //grab color of the clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor){
               messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again??"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else{
                this.style.backgroundColor = "#444444";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }   
}

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
      //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new randon color from array 
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i=0; i<squares.length; i++){
         if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.display = "none";
            }
    }
    h1.style.backgroundColor = "steelblue";
}


function changeColors(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
   var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }return arr;
}

function randomColor(){
    //random color for red color from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //random color for green color from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //random color for blue color from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


