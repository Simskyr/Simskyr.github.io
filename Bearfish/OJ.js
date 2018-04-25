function Fly() {
    //creates a temporary Sprite object
    tFly = new Sprite(scene, "fish.png", 50, 25);
    //sets the speed of the Sprite object
    tFly.setSpeed(-10);
    //creates a funtion to stimulate a fly's flight patters
    tFly.wriggle = function() {
        //Random fly angel --- IMPROVE THIS LATER
        newDir = (Math.random() * 90)-45;
        this.changeAngleBy(newDir);
    }
    tFly.reset = function(){
        //set new random position
        newX = Math.random() * this.cWidth; 
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    }
    tFly.reset();
    return tFly;
}
function Frog() {
    tFrog = new Sprite(scene, "AH.png", 80, 100);
    tFrog.minSpeed = -5
    tFrog.maxspeed = 10;
    tFrog.setSpeed(0);
    tFrog.setAngle(0);

    tFrog.checkKeys = function() {

        if (keysDown[K_LEFT]) {
            this.changeAngleBy(-5);
        }
        if (keysDown[K_RIGHT]) {
            this.changeAngleBy(5);
        }
        if (keysDown[K_UP]) {
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if (keysDown[K_DOWN]) {
            this.changeSpeedBy(-1);
            if(this.speed > this.minSpeed){
                this.setSpeed(this.minSpeed);
            }
        }
        
    }
    return tFrog;
}