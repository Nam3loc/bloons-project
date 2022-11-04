// Query Selectors

const body = document.querySelector('body');

const createGameBoard = document.querySelector('#game-board');



// Creating canvas
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = 1000;
const canvasHeight = canvas.height = 1000;




// Creating path

function drawPath() {
    ctx.fillStyle = 'tan';
    ctx.fillRect(0, 500, 1000, 80);
}




// Classes

let balloons = [];
class Balloon {
    constructor() {
        this.redBalloonImage = new Image();
        this.redBalloonImage.src = './images/red-bloon-sprite-removebg.png';

        this.balloonWidth = this.redBalloonImage.width = 220;
        this.balloonHeight = this.redBalloonImage.height = 220;
        this.x = -100;
        this.y = 500;
        this.speed = 0.6;
        this.movement = this.speed;
    }

    update() {
        this.x += this.movement;
    }

    draw() {
        ctx.drawImage(this.redBalloonImage, 0, 0, this.balloonWidth, this.balloonHeight, this.x, this.y, canvasHeight/10, canvasHeight/10);
    }
}

function handleBalloons() {
    for(let i = 0; i < balloons.length; i++) {

        if (balloons[i].x > canvasWidth){
            health--;
            balloons.splice(i, 1);
        }

        balloons[i].update();
        balloons[i].draw();
    }
    if (frame % 100 === 0) {
        balloons.push(new Balloon())
    }
}



// Projectiles
const projectiles = [];

class Projectile {
    constructor(x, y) {
        this.dartImage = new Image();
        this.dartImage.src = 'images/dart-sprite-removebg.png'        

        this.x = x; 
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 0.6;
    }

    update() {
        this.x += this.speed;
    }

    draw() {
        ctx.drawImage(this.dartImage, 0, 0, this.dartImage.width, this.dartImage.height, this.x, this.y, this.width, this.height);
    }
}

function handleProjectiles() {
    for (let i = 0; i < projectiles.length; i++) {
        projectiles[i].update();
        projectiles[i].draw();

        if(projectiles[i] && projectiles[i].x > canvas.width - cellSize){
            projectiles.splice(i, 1);
            i--;
        }
    }
}




// Creating monkey towers
const monkeys = [];

class Monkey {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.shooting = false;
        this.projectiles = [];
        this.timer = 0;
    }

    draw() {
        this.monkeyImage = new Image();
        this.monkeyImage.src = 'images/Dart-Monkey-removebg.png' 
        ctx.drawImage(this.monkeyImage, 0, 0, this.monkeyImage.width, this.monkeyImage.height, this.x, this.y, this.width, this.height);

        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.timer++;
        if (this.timer %100 === 0) {
            projectiles.push(new Projectile(this.x + 50, this.y + 50));
        }
    }
}

canvas.addEventListener('click', function(){
    const gridPositionX = mouse.x - (mouse.x % cellSize);
    const gridPositionY = mouse.y - (mouse.y % cellSize);
    for(let i = 0; i < monkeys.length; i++) {
        if(monkeys[i].x === gridPositionX && monkeys[i]. y === gridPositionY){
            return;
        }
    }

    let monkeyCost = 100;
    if (gold >= monkeyCost) {
        monkeys.push(new Monkey(gridPositionX, gridPositionY));
        gold -= monkeyCost;
    }
})

function handleMonkeys() {
    for(let i = 0; i < monkeys.length; i++){
        monkeys[i].draw();
        monkeys[i].update();
    }
}



// Mouse
const mouse = {
    x: undefined,
    y: undefined,
    width: 0.1,
    height: 0.1
}

let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', function(evt){
    mouse.x = evt.x - canvasPosition.left;
    mouse.y = evt.y - canvasPosition.top;
});
canvas.addEventListener('mouseleave', function() {
    mouse.y = undefined;
    mouse.y = undefined;
})



// Creating gameGrid
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }

    draw() {
        if (mouse.x && mouse.y && collision(this, mouse)) {
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}

function createGrid() {
    for(let y = cellSize; y < canvas.height; y += cellSize){
        for(let x = 0; x < canvas.width; x += cellSize){
            gameGrid.push(new Cell(x, y));
        }
    }
}
createGrid();

function handleGameGrid() {
    for(let i = 0; i < gameGrid.length; i++) {
        gameGrid[i].draw();
    }
}




// function game() {
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// }



// Tower Vision Radius
// let getBalloonCoordinates = new Balloon();
let a = 0;
let b = 0;
// let Tx = towerX; // Tower x
// let Ty = towerY; // Tower y
// let Ex = balloon[0].x; // Enemy x
// let Ey = 500; // Enemy y
let rx = 0; // Tower vision radius x
let ry = 0; // Tower vision radius y

// Given tower position (Tx, Ty) and enemy position (x, y). And tower vision radius (rx and ry)

function towerVision() {
    a = (Ex - Tx);
    a = a * a / (rx * rx)
    b = (Ey - Ty);
    b = b * b / (ry * ry)

    enemyInRange = a + b <= 1;

    // Drawing vision radius

    ctx.arc(Tx, Ty, (rx, ry), 0, Math.PI * 2)
    ctx.fill();
    return;
}
// towerVision();




// Variable definitions for score
let health = 100;
let gold = 300;
let gameOver = false;
ctx.font = '35px serif';



function drawScore() {
    ctx.fillStyle = 'white';
    ctx.fillText("Health: " + health, 55, 80);
}

function createTimer() {
    // const minutes = document.querySelector('#minutes');
    // const seconds = document.querySelector('#seconds');
    let minutes = '00';
    let seconds = '00';

    let totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        totalSeconds++;
        seconds = pad(totalSeconds % 60);
        minutes = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        let valStr = val + "";
        if(valStr.length < 2) {
            return "0" + valStr;
        } else {
            return valStr;
        }
    }

    return (`${minutes}:${seconds}`);
}

function drawTimer() {
    ctx.fillStyle = 'white';
    ctx.fillText("Timer: " + createTimer(), 375, 80);
}

function drawGold() {
    ctx.fillStyle = 'white';
    ctx.fillText("Gold: " + gold, 775, 80);
}

function drawGameOver() {
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2 + 5);
}





// Game Function

let frame = 0;

function game() {
    ctx.globalCompositeOperation = 'destination-under';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawPath();

    handleGameGrid();
    handleMonkeys();
    handleProjectiles();
    handleBalloons();

    drawScore();
    drawTimer();
    drawGold();

    frame++;

    if (health <= 0){
        drawGameOver();
    } else {
        requestAnimationFrame(game);
    }
}
game();

function collision(first, second) {
    if(!(first.x > second.x + second.width || 
        first.x + first.width < second.x || 
        first.y > second.y + second.height || 
        first.y + first.height < second.y)) {
            return true;
        }
}