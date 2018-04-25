var scene;
var fly;
var frog;
var ribbit;
var flies;
var NUMFLIES = 5;
var MAXTIME = 20;
var timer;
var time;
var score;
var gui;



function checkCollisions(indexFly){
    if(frog.collidesWith(flies[indexFly])){
        ribbit.play();
        flies[indexFly].reset();
        score += 5;
    }
}


function setupFlies(){
    flies = [];
    for(var i = 0; i< NUMFLIES; i++){
        flies.push(new Fly());
    }
}

function checkTime(){
    time = timer.getElapsedTime();
    if(time > MAXTIME){
        scene.stop();
    }
}

function updateGUI(){
    gui.innerHTML = "Score; " + score + " Time: " + time;
}

function restart(){
    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}
//Sets the scence, calls the update function, creates the Sprites

function init() {
    
    gui = document.getElementById('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setBG("green");
    scene.setSize(700, 500);
    setupFlies();
    frog = new Frog();
    leaves = new Sprite(scene, "Space.png", 1024 , 800);
    ribbit = new Sound('https://jlaw21.github.io/Resources/ribbit.mp3');
    leaves.setSpeed(0);
    scene.start();

}

//Makes things MOVE, draws things to the canvas
function update() {
    //Clears the scene so we have clean movement
    scene.clear();
    checkTime();
    updateGUI();
    //MOVE THINGS
    leaves.update();    
    for(var i = 0; i < flies.length; i++){
        flies[i].wriggle();
        checkCollisions(i);
        flies[i].update();
    }
    
    frog.checkKeys();
    //REDRAW THINGS

    frog.update();
}