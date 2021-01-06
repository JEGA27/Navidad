var x = [];// esto es un arreglo
var y = [];// esto es un arreglo
var incremento = [];
var h = [];
var capture;

function setup() {
  createCanvas(600, 400);
  floor(random(1, 10))
  for(var i = 0; i < 50; i = i +1){
    x[i] = floor(random(0, width));
    y[i] = 0;
    incremento[i] = floor(random(1, 10));
    h[i] = floor(random(1, 50));
  }
  
  capture=createCapture();
  capture.hide();
}

function draw() {
  background(255,0,0);
  stroke(1000);
  strokeWeight(1);
  noFill();
  
  for(var i = 0; i < 50; i = i +1){
     text('*',x[i], y[i] ,h[i]);  
    if (y[i] > height) {
      y[i] = 0;
    }else if(y[i] <0 ){
      incremento[i] = incremento[i] * -1;
    }
    y[i] = y[i] + incremento[i];
  }
  textSize(34);
  text('Feliz Navidad!!!!', 200, 200);
  
  if (keyIsPressed){
      if (key == 'p'){
        image (capture,0,0,width,height); 
        for(var j = 0; j < 50; j = j +1){
          ///
         text('*',x[j], y[j] ,h[j]);  
         if (y[j] > height) {
         y[j] = 0;
         }else if(y[j] <0 ){
          incremento[j] = incremento[j] * -1;
         }
          
        y[i] = y[i] + incremento[i];
      }
      }
    }
}
