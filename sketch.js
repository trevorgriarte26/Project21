var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound herew3
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "#0066ff";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "#ff9900";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,580,200,30)
    block3.shapeColor = "#ff0000";

    block4 = createSprite(805,580,360,30)
    block4.shapeColor = "#00cc66";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = -6;
    ball.velocityY = -6;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "#0066ff";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "#ff9900";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "#ff0000"
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "#00cc66"
    }

    drawSprites();
}
