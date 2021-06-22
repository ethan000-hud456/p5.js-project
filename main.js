function preload(){
    
}

function setup(){
   canvas=createCanvas(600 ,600);
   canvas.position(150 ,150);
   video=createCapture(VIDEO);
   video.hide()
}

function draw(){
   image(video ,100 ,100 ,400 ,400);
   fill(0, 51, 133);
   stroke(0, 51, 133);
   circle(50,50,80);
   
   circle(50 ,550 ,80);

   circle(550 ,50 ,80);

   circle(550 ,550 ,80);

   fill(105, 162, 255);
   stroke(105, 162, 255);
   rect(90 ,40 ,420 ,20);

   rect(90 ,540 ,420 ,20);

   rect(40 ,90 ,20 ,420);

   rect(540 ,90 ,20 ,420);

}

function take_snapshot(){
    save('user_name.png');
}