var scene;
var pad;
var pad2;
var ball;
var CHANGE = 5;


function checkCollisions() {
        
        if (paddle.collidesWith(ball)) {
        ball.dx *= -1; 
        ball.dy *= -1;
    } 
    else if (paddle2.collidesWith(ball)){
        ball.dx *= -1
        ball.dy *= -1
    }
}

function Paddle() {
    tPaddle = new Sprite(scene, "paddle.png", 60, 20);
    tPaddle.setAngle(180);
    tPaddle.setSpeed(0);

    tPaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }
          
            if (keysDown[K_LEFT]) {
            this.changeXby(-CHANGE);
            
            
        }

        if (keysDown[K_RIGHT]) {
            this.changeXby(CHANGE);
            
            
        }
    }
    tPaddle.checkKeysINV = function() {
        if (keysDown[K_DOWN]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysDown[K_UP]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }
    }

    return tPaddle
}


function init() {
    scene = new Scene();
    scene.hideCursor();
    scene.setSize(600, 300);
    ball = new Sprite(scene, "ball.png", 56, 49);
    ball.setMoveAngle(135);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);
    pad = new Paddle();
    pad2 = new Paddle();
    pad2.setSpeed(5);
    pad2.setBoundAction(BOUNCE);
    pad.setPosition(20, scene.height / 2);
    pad2.setPosition(scene.width - 20, scene.height / 2);

    
    scene.start();
}

function update() {
    scene.clear();
    checkCollisions();
    pad.checkKeys();
    pad2.update();
    pad.update();    
    ball.update();   
}

