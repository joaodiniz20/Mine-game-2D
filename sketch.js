//player
var DEBUG = true
var player_position_x;
var player_position_y;
var tamanho_player = 50;
var velocidade_player = 10;

var player_position_mapa_x;
var player_position_mapa_y;
//mapa
let mapa;
var mapa_position_x = 0;
var mapa_position_y = 0;
var tamanho_mapa = 4096;

var centro_x
var centro_y

var dist_borda_esquerda;
var dist_borda_direita;

function preload(){
  mapa = loadImage("assets/Mapa.png");
}

function setup() {
  createCanvas(600, 400);
  centro_x = width/2-(tamanho_player/2);
  centro_y = height/2-(tamanho_player/2);
  
  player_position_x = player_position_mapa_x = centro_x;
  player_position_y = player_position_mapa_y = centro_y;
  
  calc_dist_borda_esquerda()
  calc_dist_borda_direita()
  
}

function draw() {
  //background(220);
  image(mapa,mapa_position_x,mapa_position_y);
  fill("white")
  square((player_position_x-(tamanho_player/2)), (player_position_y-(tamanho_player/2)), tamanho_player);
  fill("black")
  text("Tecla: "+keyCode,50,50);
  text("Centro x: "+centro_x,50,65)
  text("Distancia borda esquerda ("+player_position_mapa_x+"): "+ dist_borda_esquerda, 50,80);
  text("Distancia borda direita ("+tamanho_mapa+"-"+player_position_mapa_x+"): "+ dist_borda_direita, 50, 95)
  
  
  calc_dist_borda_esquerda()
  calc_dist_borda_direita()
  //movimento_mapa_y();
  //movimento_player_x()
  if(((player_position_x -mapa_position_x) <= centro_x) || ((player_position_x -mapa_position_x + tamanho_mapa) <= centro_x)){
    movimento_player_x();
  } else {
    movimento_mapa_x();
  }
  
  fill("red")
  circle(centro_x,centro_y,10)
  fill("blue")
  circle(player_position_x,player_position_y,10)
}

function movimento_player_x(){
  //Faz player se mecher no x
  if(keyIsDown(39)){
    player_position_x += velocidade_player;
    player_position_mapa_x += velocidade_player;
  } else if(keyIsDown(37)){
    player_position_x -= velocidade_player;
    player_position_mapa_x -= velocidade_player;
  }
  //Limita player a tela no x
  if((player_position_x+tamanho_player) >= width){
    player_position_x = width-tamanho_player;
    player_position_mapa_x = width-tamanho_player;
  } else if(player_position_x <= 0){
    player_position_x = 0;
    player_position_mapa_x = 0;
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
  alinha_centro();
  if(keyIsDown(37)){
    mapa_position_x += velocidade_player;
    player_position_mapa_x -= velocidade_player;
  }
  //para o mapa no x
  if(mapa_position_x >= 0){ //esquerda
    mapa_position_x = 0;
    player_position_mapa_x = 0;
  } else if((mapa_position_x+tamanho_mapa) <= width){//direita
    console.log("limita direita")
    mapa_position_x = width-tamanho_mapa;
    //player_position_mapa_x = width-tamanho_mapa;
  }else //move mapa no x
  if(keyIsDown(39) || DEBUG){
    mapa_position_x -= velocidade_player;
    player_position_mapa_x += velocidade_player;
    console.log("tecla direita\n")
  }
}

function movimento_mapa_y(){
  //movimenta mapa no y
  if(keyIsDown(38) || DEBUG){
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

function alinha_centro(){
  if(player_position_x != centro_x){
    player_position_x = centro_x;
    player_position_mapa_x = centro_x;
  }
}

function calc_dist_borda_esquerda(){
  dist_borda_esquerda = player_position_mapa_x;
}

function calc_dist_borda_direita(){
  dist_borda_direita = tamanho_mapa - player_position_mapa_x;
}
