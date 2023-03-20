nosex=0;
nosey=0;
left=0;
right=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(670,280);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model Has Loaded !!");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("Nose X =  " + nosex +"Nose Y =  " + nosey);
left=results[0].pose.leftWrist.x;
right=results[0].pose.rightWrist.x;
difference=floor(left-right);
console.log("Left Wrist = "+left +"Right Wrist = "+right+"Difference = "+difference);
    }
}

function draw(){
background("#90d6d3");
fill("#d7b0ff");
stroke("#ffffed");
square(nosex,nosey,difference);
}