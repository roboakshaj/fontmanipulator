difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550, 550);
canvas.position(560, 150);

poseNet=ml5.poseNet( video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
background('#969A97');
fill("green");
textSize(difference);
text("Akshaj", 50, 400);

}

function modelLoaded(){
    console.log("PoseNet is initiallized");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftwrist = " + leftwristX +"rightwrist = " + rightwristX +"difference = " + difference);
    }
    }
    












