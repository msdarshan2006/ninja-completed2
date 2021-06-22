var database;
var gameState = 0 ;
var ground;
var player1,player2;
var plf1,plb1,pli1,p1a1,p1a2,p1a3,p1a4,p1a5,p1a6,p1a7;
var plf2,plb2,pli2,p2a1,p2a2,p2a3,p2a4,p2a5,p2a6,p2a7;
//plf1/2=playerfront,plb1/2=player back,pli1/2=player idle
var formObj,gameObj;
var playerCount = 0;

function preload(){
plf1 = loadAnimation("images/player1/running1/1.png","images/player1/running1/2.png","images/player1/running1/3.png","images/player1/running1/4.png","images/player1/running1/5.png","images/player1/running1/6.png");
plb1 = loadAnimation("images/player2/running2/1.png","images/player2/running2/2.png","images/player2/running2/3.png","images/player2/running2/4.png","images/player2/running2/5.png","images/player2/running2/6.png");
pli1 = loadImage("images/player1/pa1.4/player1.png");
//p1a1 = loadAnimation("images/player1/pa1.1/player1.png","images/player1/pa1.1/player2.png","images/player1/pa1.1/player3.png","images/player1/pa1.1/player4(2).png");
//p1a2 = loadAnimation("images/player1/pa1.2/player1.png","images/player1/pa1.2/player3.png","images/player1/pa1.2/player4.png");
//p1a3 = loadAnimation("images/player1")
// to do animation for player 2
plf2 = loadAnimation("images/player2/running2/1.png","images/player2/running2/2.png","images/player2/running2/3.png","images/player2/running2/4.png","images/player2/running2/5.png","images/player2/running2/6.png");
plb2 = loadAnimation("images/player1/running1/1.png","images/player1/running1/2.png","images/player1/running1/3.png","images/player1/running1/4.png","images/player1/running1/5.png","images/player1/running1/6.png");
pli2 = loadImage("images/player2/pa2.4/player1.png");
//p2a1 = loadAnimation("images/player2/pa2.1/player1.png","images/player2/pa2.1/player2.png","images/player2/pa2.1/player3.png","images/player2/pa4.1/player4(2).png");
//p1a2 = loadAnimation("images/player2/pa2.2/player1.png","images/player2/pa2.2/player3.png","images/player2/pa2.2/player4.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  gameObj = new Game();
  gameObj.getGameState();
  console.log(gameState);
  gameObj.startGame();
  


 
}


function draw() {
  background(255,255,255);  
  if(playerCount===2){
    //gamestate should be updated in fbc
    gameObj.updateGameState(1);
  }
  if(gameState===1){
    clear();
    gameObj.playGame();

  }

}