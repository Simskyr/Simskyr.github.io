var ug;
var game;
var starfield;
var tide;
var tides = [];
var click;
var buk;


function Buk(){
    tBuk = new Sprite(game, "BUK.png", 180, 170);
    tBuk.falling = true;
    tBuk.setPosition(-50,10);
    
        tBuk.checkGravity = function(){
            if (this.falling){
              this.addVector(180, 1);
            }
              if (this.y >= 440){
                    this.setImage("BUK.png");
                    this.falling = false;
                    this.setSpeed(0);
                            }
        }
    tBuk.Ptwo = function(){
        if(keysDown[K_LEFT]){
            this.changeXby(-8);
    }
     if(keysDown[K_RIGHT]){
         this.changeXby(8);
     }
     if(keysDown[K_DOWN]){
         this.changeYby(8);
       }
     if (keysDown[K_UP]) {
         if (this.falling === false) {
                this.y -= 8;
                this.falling = true;
                this.setDY(-15);
            }
       }
       
    }
    return tBuk;
}
        
function Tide(){
    tTide = new Sprite(game, "tpod.png", 50,40);
    
    tTide.hide();
    
    tTide.fire = function(){
        tides.push(this);
        this.show();
        tTide.setSpeed(15);
        this.setPosition(ug.x, ug.y);

        this.setAngle(ug.getImgAngle());
        this.setBoundAction(DIE);
    }
    
    return tTide;
}

function Ug(){
    tUg = new Sprite(game, "UK.png", 180, 170);
    tUg.falling = true;
    tUg.setPosition(60,10);
    
        tUg.checkGravity = function(){
            if (this.falling){
              this.addVector(180, 1);
            }
              if (this.y >= 440){
                    this.setImage("UK.png");
                    this.falling = false;
                    this.setSpeed(0);
                            }
        }
    tUg.Pone = function(){
        if(keysDown[K_A]){
            this.changeXby(-8);
    }
     if(keysDown[K_D]){
         this.changeXby(8);
     }
     if(keysDown[K_S]){
         this.changeYby(8);
       }
       if (keysDown[K_W]) {
            if (this.falling === false) {
                this.y -= 8;
                this.falling = true;
                this.setDY(-15);
            }
       }
        
       if(keysDown[K_SPACE]){
           if(timer.getElapsedTime() >= 0.5){
           tide = new Tide();
           click.play();
           tide.fire();
           timer.reset();
           }

       }
       
    }
    return tUg;
}
function init(){
    
    game = new Scene();
    starfield = new Sprite( game, "54.png", 1200, 1200);
    starfield.setSpeed(0);
    tide = new Tide();
    ug = new Ug();
    buk = new Buk();
    ug.setSpeed(0);
    buk.setSpeed(0);
    click = new Sound('click.mp3');
    
    
    game.start();
}

function update(){
    game.clear();
    starfield.update();
    ug.checkGravity();
    buk.checkGravity();
    ug.Pone();
    buk.Ptwo();
    ug.update();
    buk.update();
    //FOR EACH LOOP WILL ITERATE EACH OBJECT IN AN ARRAY
    tides.forEach(function(element){
        element.update();
    })
}