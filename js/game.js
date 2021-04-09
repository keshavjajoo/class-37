class Game{
constructor(){}
getstate(){
var gamestateref=database.ref('gamestate');
gamestateref.on("value",function(data){
    gamestate=data.val()
})

}
update(state){
database.ref('/').update({
    gameState:state
})

}
async start(){
if(gamestate===0){
    player=new Player()
    var playercountRef=await database.ref('playerCount').once("value");
    if(playercountRef.exists()){
        playercount=playercountRef.val();
    player.getcount();
    }
    form=new Form();
    form.display();
}
}
play(){
    form.hide()
    textSize(30)
    text("Game Start",120,100)
    Player.getplayerinfo()
    if(allplayers!==undefined){
        var displayposition=130
        for(var plr in allplayers){
            if(plr=="player"+playerindex)
            fill("red")
            else
            fill("black")
        displayposition+=20
        textSize(15)
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition)
        
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index!=null){
     player.distance+=50
     player.update()
     
    }

}
}