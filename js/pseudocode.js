/*
// Path following video
https://www.youtube.com/watch?v=rlZYT-uvmGQ

// Bloons Sprite Sheets
https://www.spriters-resource.com/pc_computer/bloonstowerdefense6/

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