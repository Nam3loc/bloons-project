/*
// JS Game Dev video
https://www.youtube.com/watch?v=GFO_txvwK_c&t=11919s

// Path following video
https://www.youtube.com/watch?v=rlZYT-uvmGQ

// Bloons Sprite Sheets
https://www.spriters-resource.com/pc_computer/bloonstowerdefense6/

// How to draw a path (9:00 on how to curve the path)
https://www.youtube.com/watch?v=HUp8yDpfFm4

// Moving an image on canvas
https://www.youtube.com/watch?v=6dpxrBTESvQ

// Tower Defense Tutorial
https://www.youtube.com/watch?v=C4_iRLlPNFc

// Grid
My idea is to get a grid on the DOM and to traverse the grid similar to chess notation. To somehow give each grid a value and to send the balloons down the valued grid points in the form of a path. Instead of trying to somehow create a path and then a path following algorithm.

// Balloon class
I am going to make classes for balloons with color, layers, and speed. They will ramp up based on the "next level" balloon.

// Monkey class
I am also going to make a class for monkey to be my dart monkey. We'll start simple and then move on to more complex if we are able. If not, then that will be a "future project."


// Balloon speed and Monkey placement
I will place the monkeys on grid points and they will somehow have a radius to shoot balloons with. I will research that when I get there. As for the speed of the balloons, I will also research how to make things move with a velocity.

// Money counter
I will also develop a "money counter." 

1 layer of balloon will = 1 gold
2 gold/sec. Create a game counter counting the second. Let gametimeGold += 2 gold per one second... Maybe do/while loop? Or will it never break out of the loop.

I am also thinking of giving the player 2 gold per second. Maybe one gold if it is simpler.

// Timer
I want to put a timer to measure the amt of time the player has been playing

// Levels
If I get to this point, I would love to make levels so that you would know when more difficult balloons begin to come.

// Health
I want to make health 100 and every time a balloon crosses the end of the grid, you lose a life per layer on balloons

health -= balloon.layers

// Monkeys throwing darts
I want the monkey to be able to throw a dart. Probably just stick to dart monkeys. If I break into multiple levels with monkeys, then do triple dart and super monkeys that just throw faster.

< -------- THINGS TO RESEARCH -------- >

-How to make a grid
-Velocity for balloon movement
-Giving dart monkeys a radius
-Monkeys throwing darts
    -figure out how to have something being thrown from the monkey
    -figure out how to always target the first balloon within the monkeys radius
    -what constructors does a monkey need? # of darts? Throwing speed?
-Giving gold per second of gameplay


*/















/*
// Creating Bloon Animation
const redBloonImg = document.querySelector('#red-bloon-img');
const redBloonCtx = redBloonImg.getContext('2d');
const redBloonWidth = redBloonImg.width = 50;
const redBloonHeight = redBloonImg.height = 50;



// Animated red balloon
const redBalloonImage = new Image();
redBalloonImage.src = './images/red-bloon-sprite-removebg.png';
const secondSpriteWidth = 115;
const secondSpriteHeight = 115;

function redBloonAnimate(){
    redBloonCtx.clearRect(0, 0, redBloonWidth, redBloonHeight);
    redBloonCtx.drawImage(redBalloonImage, 55, 55, secondSpriteWidth, secondSpriteHeight, 0, 0, redBloonWidth, redBloonHeight);
   
    requestAnimationFrame(redBloonAnimate);
}
redBloonAnimate();
*/



/*
// Drawing path
let path;

ctx.beginPath(); // Resets the current default path

ctx.stroke(); // Strokes the current default path

// First line of the path
ctx.moveTo(0, 500); // Creates a new subpath with the given point
ctx.lineTo(1000, 500); //x = 250, y = 50 is a straight line... Creates a new line along the current subpath

// Second (bottom) line of the path
ctx.moveTo(0, 550);
ctx.lineTo(1000, 550);
// ctx.fill('brown')

// ctx.closePath() // Closes a path if there is an adjacent intersect

// ctx.fill() // Fills a closed path (shape)








// Score counter?
// if(this.x < 0 - this.width){
//     health--;
//     if(score <= 0){
//         gameOver = true;   
//     }
// } 










// Balloon Function Breakdown for game function build

const redBalloonImage = new Image();
redBalloonImage.src = './images/red-bloon-sprite-removebg.png'
redBalloonImage.style.border = '5px solid black';
let balloonWidth = redBalloonImage.width = 220;
let balloonHeight = redBalloonImage.height = 220;

redBalloonImage = new Image();
redBalloonImage.src = './images/red-bloon-sprite-removebg.png'
balloonWidth = this.redBalloonImage.width = 220;
balloonHeight = this.redBalloonImage.height = 220;


function draw() {
    ctx.globalCompositeOperation = 'destination-under';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    // ctx.strokeRect(x, 500, canvasWidth/20, canvasHeight/20);
    ctx.fillStyle = 'tan';
    ctx.fillRect(0, 500, 1000, 80);

    ctx.drawImage(redBalloonImage, 0, 0, balloonWidth, balloonHeight, x, 500, canvasHeight/10, canvasHeight/10);

    requestAnimationFrame(draw);
    drawScore();
    drawTimer();
    drawGold();
    x++;
    if(x > canvasWidth){
        x = 0;
        health--;
    }
}
draw();





    // [...balloon].forEach(object => {
    //             console.log(balloon.length)
    //             object.draw()
    //         });





// THIS IS THE WORKING BALLOON ========================================================

// const redBalloonImage = new Image();
// redBalloonImage.src = './images/red-bloon-sprite-removebg.png'
// redBalloonImage.style.border = '5px solid black';
// let balloonWidth = redBalloonImage.width = 220;
// let balloonHeight = redBalloonImage.height = 220;
// let x = 0;

// function draw() {
//     drawScore();
//     ctx.globalCompositeOperation = 'destination-under';
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     // ctx.strokeRect(x, 500, canvasWidth/20, canvasHeight/20);
//     ctx.fillStyle = 'tan';
//     ctx.fillRect(0, 500, 1000, 80);

//     ctx.drawImage(redBalloonImage, 0, 0, balloonWidth, balloonHeight, x, 500, canvasHeight/10, canvasHeight/10);

//     requestAnimationFrame(draw);
    
//     x++;
//     if(x > canvasWidth){
//         x = 0;
//     }
// }
// draw();

// THIS IS THE WORKING BALLOON ========================================================












// THIS IS THE WORKING ANIMATED MONKEY====================================================================
// Creating Monkey Variables
const monkeyImg = document.querySelector('#monkeyImg');
const monkeyImgCtx = monkeyImg.getContext('2d');
const monkeyImgWidth = monkeyImg.width = 80;
const monkeyImgHeight = monkeyImg.height = 80;




// Defining Monkey Image
const picOfMonkey = new Image();
picOfMonkey.src = './images/dart-monkey-sprite.png'
const spriteWidth = 218;
const spriteHeight = 218;
let frameX = 0;
let gameFrame = 0;
const staggerFrames = 40;
let towerX = 0;
let towerY = 0;




// Drawing monkey img
function monkeyAnimate() {
    monkeyImgCtx.clearRect(0, 0, monkeyImgWidth, monkeyImgHeight);
    monkeyImgCtx.drawImage(picOfMonkey, frameX * spriteWidth, 65, spriteWidth, spriteHeight, towerX, towerY, monkeyImgWidth, monkeyImgHeight);
    if(gameFrame % staggerFrames == 0){
        if(frameX < 4) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(monkeyAnimate);
}
monkeyAnimate();
// THIS IS THE WORKING ANIMATED MONKEY====================================================================










// Making the balloon draggable
// let draggable = false;
// let currentX = canvasWidth/2;
// let currentY = canvasHeight/2;

// Creating canvas mouse events
// canvas.onmousedown = (evt) => {
//     console.log('mousedown', evt.layerX, evt.layerY)
//     if(evt.layerX <= (currentX + redBalloonImage.width/2) && evt.layerX >= (currentX - redBalloonImage.width/2) && (evt.layerY <= (currentY + redBalloonImage.height/2) && evt.layerX >= (currentY - redBalloonImage.height/2))) {
//         draggable = true;
//         console.log('clicked image');
//     } else {
//         console.log("didn't click the image");
//     }
// }

// canvas.onmouseup = (evt) => {
//     console.log('mouseup', evt.layerX, evt.layerY)
// }

// canvas.onmouseout = (evt) => {
//     console.log('mouseout', evt.layerX, evt.layerY)
// }







// let balloon = [];
// class Balloon {
//     constructor() {
//         this.redBalloonImage = new Image();
//         this.redBalloonImage.src = './images/red-bloon-sprite-removebg.png'

//         this.balloonWidth = this.redBalloonImage.width = 220;
//         this.balloonHeight = this.redBalloonImage.height = 220;
//         this.x = 0;
//         this.y = 500;
//     }

//     draw() {
//         ctx.drawImage(this.redBalloonImage, 0, 0, this.balloonWidth, this.balloonHeight, this.x, this.y, canvasHeight/10, canvasHeight/10);
//         this.x++;

//         if(this.x > canvasWidth){
//             this.x = 0;
//             health--;
//         }
//     }
// }


// let redBalloon = new Balloon();
// let timeToNextBalloon = 0;
// let balloonInterval = 20;


    // redBalloon.draw();

    // timeToNextBalloon++;
    // if(timeToNextBalloon > balloonInterval){
    //     balloons.push(new Balloon());
    //     timeToNextBalloon = 0;
    // }
    // [...balloons].forEach(object => object.draw());











    // function collision(first, second) {
//     if(!(first.x > second.x + second.width || 
//         first.x + first.width < second.x || 
//         first.y > second.y + second.height || 
//         first.y + first.height < second.y)) {
//             return true;
//         }
// }
*/