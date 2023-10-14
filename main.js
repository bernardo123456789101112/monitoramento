alarme="";
pessoa="";
function preload(){
alarme.loadSound("viatura_policia.mp3");
}
function setup(){
canvas=createCanvas(900,800);
canvas.createCapture(VIDEO);
canvas.hide();
}
function draw(){
if(pessoa.lenght>0){
document.getElementById("status").innerHTML="o bebe esta aqui";
alarme.stop();
}
if(pessoa.lenght<0){
    document.getElementById("status").innerHTML="o bebe não esta aqui";
    alarme.start();
    }
}
function iniciar(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting obejects";
}
