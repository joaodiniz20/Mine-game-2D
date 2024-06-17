//player
var player_position_x;
var player_position_y;
var tamanho_player = 50;
var velocidade_player = 10;
//mapa
let mapa;
var mapa_position_x = 0;
var mapa_position_y = 0;
var tamanho_mapa = 4096;

var centro_x
var centro_y

function preload(){
  mapa = loadImage("assets/Mapa.png");
}

function setup() {
  createCanvas(600, 400);
  centro_x = width/2-(tamanho_player/2);
  centro_y = height/2-(tamanho_player/2);
  
  player_position_x = centro_x;
  player_position_y = centro_y;
}

function draw() {
  //background(220);
  image(mapa,mapa_position_x,mapa_position_y);
  square(player_position_x, player_position_y, tamanho_player);
  text("Tecla: "+keyCode,50,50);
  text("Centro x: "+centro_x,50,65)
  
  
  movimento_mapa_x();
  movimento_mapa_y();
}

function movimento_player_x(){
  //Faz player se mecher no x
  if(keyIsDown(39)){
    player_position_x += velocidade_player;          
  } else if(keyIsDown(37)){
    player_position_x -= velocidade_player;
  }
  //Limita player a tela no x
  if((player_position_x+tamanho_player) >= width){
    player_position_x = width-tamanho_player;
  } else if(player_position_x <= 0){
    player_position_x = 0;
  }
}

function movimento_player_y(){
  //Faz player se mecher no y
  if(keyIsDown(38)){
    player_position_y -= velocidade_player;
  } else if(keyIsDown(40)){
    player_position_y += velocidade_player;
  }
  //Limita player a tela no y
  if((player_position_y+tamanho_player) >= height){
    player_position_y = height-tamanho_player
  } else if(player_position_y <= 0){
    player_position_y = 0;
  }
}

function movimento_mapa_x(){
  //move mapa no x
  if(keyIsDown(39)){
    mapa_position_x -= velocidade_player;          
  } else if(keyIsDown(37)){
    mapa_position_x += velocidade_player;
  }
  //para o mapa no x
  if(mapa_position_x >= 0){
    mapa_position_x = 0;
  } else if((mapa_position_x+tamanho_mapa) <= width){
    mapa_position_x = width-tamanho_mapa;
  }
}

function movimento_mapa_y(){
  //movimenta mapa no y
  if(keyIsDown(38)){
    mapa_position_y += velocidade_player;
  } else if(keyIsDown(40)){
    mapa_position_y -= velocidade_player;
  }
  //para o mapa do y
  if(mapa_position_y >= 0){
    mapa_position_y = 0;
  } else if((mapa_position_y+tamanho_mapa) <= height){
    mapa_position_y = height-tamanho_mapa;
  }
}
