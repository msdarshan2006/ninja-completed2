class Game{
    constructor(){

    }

  getGameState(){
    var dbRef = database.ref("gameState");
    //on function is a listner function which is  used to read the data
    dbRef.on("value",function(data){

        gameState=data.val();
    });
    }

    startGame(){
        if (gameState===0){
            //object construted for game form class and will call constructor of same class
            gameObj.getPlayerCount();
            console.log("playerCount");
            formObj = new Form();
            formObj.display();
        }
        player1=createSprite(500,700);
        player1.addAnimation("player1idle",pli1);
        player1.addAnimation("player1front",plf1);
        player1.addAnimation("player1back",plb1);
        player1.scale=2
       // player1.addAnimation("player1attack1",p1a1);
        //player1.addAnimation("player1attack2",p1a2);

        player2=createSprite(900,700);
        player2.addAnimation("player2idle",pli2);
        player2.addAnimation("player2front",plf2);
        player2.addAnimation("player2back",plb2);
        player2.scale=2
        //player2.addAnimation("player2attack1",p2a1);
        //player2.addAnimation("player2attack2",p2a2);
        
        // read position x from datbase
        var player1Ref=database.ref('player1/position');
        player1Ref.on("value",function(data){
           // console.log(data.val());
            player1.x=data.val().x;
            player1.y=data.val().y;

        })
        var player2Ref=database.ref('player2/position');
        player2Ref.on("value",function(data){
            //console.log(data.val());
            player2.x=data.val().x;
            player2.y=data.val().y;
        })

/* to do 
images for player2=done
images for player1=done
loading movements

*/

    }
    updateGameState(newState){
        var dbRef =database.ref('/').update(
            {
                gameState:newState
                
            }
        )
    }
    updatePlayerName(newName){
        database.ref("player"+playerCount).update({
            playerName:newName
                });

    }
    updatePlayerCount(newPlayerCount){
        database.ref("/").update({
            playerCount:newPlayerCount
        });

    }
    getPlayerCount(){
        var dbRef = database.ref("playerCount");
        //on function is a listner function which is  used to read the data
        dbRef.on("value",function(data){
        
    
            playerCount=data.val();
        });
    }
    playGame(){
        /* the ground should be displayed
           the players should be displayed
           the moves of player shaould be displayed 
           the health bar should be displayed 
            */
           console.log("gamehasstarted");
           formObj.hideElements();
           
           if(keyDown("RIGHT_ARROW")){
               player1.changeAnimation("player1front",plf1);
            this.writePlayer1Position(+5,0);
           } 
           if(keyDown("LEFT_ARROW")){
            player1.changeAnimation("player1back",plb1);
            this.writePlayer1Position(-5,0);
           }     
           if(keyDown("a")){
            player2.changeAnimation("player2front",plf2);
            this.writePlayer2Position(-5,0);
           } 
           if(keyDown("d")){
            player2.changeAnimation("player2back",plb2);
           this.writePlayer2Position(+5,0);
           }
           drawSprites();


           

    }
    writePlayer1Position(x,y){
        database.ref("player1/position").update({
            x:player1.x+x,
            y:player1.y+y
        })
    }
    writePlayer2Position(x,y){
        database.ref("player2/position").update({
            x:player2.x+x,
            y:player2.y+y
        })
    }



}
