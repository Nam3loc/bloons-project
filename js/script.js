// Query Selectors

const body = document.querySelector('body');

const createGrid = document.querySelector('#game-board');




// Creating canvas
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = 1000;
const canvasHeight = canvas.height = 1000;




// Creating Monkey Animation
const monkeyImg = document.querySelector('#monkeyImg');
const monkeyImgCtx = monkeyImg.getContext('2d');
const monkeyImgWidth = monkeyImg.width = 80;
const monkeyImgHeight = monkeyImg.height = 80;




// Classes

class Balloon {
    constructor(color, layers, speed) {
        this.color = color;
        this.layers = layers;
        this.speed = speed;
    }
}

class Monkey {
    constructor() {
        
    }
}



// Declare variable

let redBalloon = new Balloon('red', 1, 0.5);




// Defining Monkey Image
const picOfMonkey = new Image();
picOfMonkey.src = './images/dart-monkey-sprite.png'
const spriteWidth = 218;
const spriteHeight = 218;
let frameX = 0;
let gameFrame = 0;
const staggerFrames = 40;


// Drawing monkey img
function monkeyAnimate() {
    monkeyImgCtx.clearRect(0, 0, monkeyImgWidth, monkeyImgHeight);
    monkeyImgCtx.drawImage(picOfMonkey, frameX * spriteWidth, 65, spriteWidth, spriteHeight, 0, 0, monkeyImgWidth, monkeyImgHeight);
    if(gameFrame % staggerFrames == 0){
        if(frameX < 4) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(monkeyAnimate);
}
monkeyAnimate();



// Drawing path
let path;

ctx.beginPath(); // Resets the current default path

// First line of the path
ctx.moveTo(0, 500); // Creates a new subpath with the given point
ctx.lineTo(1000, 500); //x = 250, y = 50 is a straight line... Creates a new line along the current subpath

// Second (bottom) line of the path
ctx.moveTo(0, 550);
ctx.lineTo(1000, 550);
// ctx.fill('brown')

// ctx.closePath() // Closes a path if there is an adjacent intersect

// ctx.fill() // Fills a closed path (shape)

ctx.stroke(); // Strokes the current default path