leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(300,100)

    canvas = createCanvas(600,600);
    canvas.position(300,550);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("#a19b9a");
    textSize(difference);
    fill("#26abed");
    text("Miguel", 100, 200);
}
function modelLoaded(){
    console.log("PoseNet Loaded");
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        leftWristX = floor(results[0].pose.leftWrist.x);
        rightWristX = floor(results[0].pose.rightWrist.x);
        difference = leftWristX - rightWristX;
    }
}