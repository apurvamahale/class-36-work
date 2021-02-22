class Player{
    construtor(){
        
    }
    getCount(){
        var pcref=database.ref(playerCount);
        pcref.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        databse.ref('/').update({
           playerCount:count
    });
}
}