//posição bolinha
let PCX = 302;
let PCY = 200;
let VELX = 5;
let VELY = 4;
//posição raquetes
let PRJY = 150;
let PRAY = 150;
let PRJX = 20;
let PRAX = 570;
let LAR = 10;
let AUT = 100;
let VELR = 5;
let delay = 2;
//outras variaveis
let cor;
//placar:
let PJ = 0;
let PA = 0;
//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  cor = color(10, 117, 10);
  trilha.loop();
}

function draw() {
  //visual
  background(0, 0, 0);
  fill(cor);
  rect(300,0,5,600);
  bolinha();
  raquet();
  placar();
}
//bolinha
function bolinha(){
  circle(PCX, PCY, 25);
  PCX += VELX;
  PCY += VELY;
  if ((PCX + 12.5) > width || (PCX - 12.5) < 0){VELX *= -1;}
  if ((PCY + 12.5) > height || (PCY - 12.5) < 0){VELY *= -1;}
  
  if ((PCX - 12.5) < PRJX + LAR && (PCX + 12.5) > PRJX && (PCY - 12.5) < PRJY + AUT && (PCY + 12.5) > PRJY) {
    VELX *= -1;
    raquetada.play();
  }
  if ((PCX - 12.5) < PRAX + LAR && (PCX + 12.5) > PRAX && (PCY - 12.5) < PRAY + AUT && (PCY + 12.5) > PRAY) {
    VELX *= -1;
    raquetada.play();
  }
}
//raquete
function raquet(){
  rect(PRJX,PRJY, LAR, AUT);
  rect(PRAX,PRAY, LAR, AUT);
  //jogador
  if (keyIsDown(UP_ARROW)) {PRJY -= VELR;}
  if (keyIsDown(DOWN_ARROW)) {PRJY += VELR;}
  //adversario
  if (frameCount % delay === 0) {if (PCY > PRAY + 50) {PRAY += VELR;} else if (PCY < PRAY + 50){PRAY -= VELR;}}

}

//placar
function placar() {
  textAlign(CENTER);
  textFont('Arial');
  textSize(22);
  text(PJ, 285, 25);
  text(PA, 320, 25);
  
  if (PCX > 570) {
    PA += 1;
    PCX = 302;
    PCY = 200;
    ponto.play();
  }
  if (PCX < 20) {
    PJ += 1;
    PCX = 302;
    PCY = 200;
    ponto.play();
  }
}
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}