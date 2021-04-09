var database;
var gamestate=0
var playercount
var form,player,game
var allplayers



function setup(){
  database = firebase.database();
  createCanvas(500,500);
 game=new Game()
 game.getstate();
 game.start();

}

function draw(){
  
  if(playercount===4){
    game.update(1)

  }
  if(gamestate===1){
    clear();
    game.play()
  }

    drawSprites();
  
}

