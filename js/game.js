class Game{
    constructor(){
      
    }
    getState(){
        var gsref = database.ref('gameState');
        gsref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        databse.ref('/').update({
            gameState:state
        })
    }
}