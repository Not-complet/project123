function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(300,100)

    canvas = createCanvas(600,600);
    canvas.position(300,500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("#a19b9a")
}
function modelLoaded(){
    console.log("PoseNet Loaded");
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
    }
}