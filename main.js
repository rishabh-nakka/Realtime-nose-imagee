diffrence=""
lwrist_x=""
lwrist_y=""
rwrist_x=""
rwrist_y=""
nose_x=""
nose_y=""
function preload(){}
function setup(){
    canvas=createCanvas(500,500)
    video=createCapture(VIDEO)
    video.position(10,200)
    canvas.center()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
    
}
function draw(){
    background("grey")
    fill("red")
    stroke("cyan")
    square(nose_x,nose_y,diffrence)
    document.getElementById("size").innerHTML=diffrence

}
function modelLoaded(){
    console.log("Ml5 working")
    
    
}
function gotPoses(result){
   if(result.length>0)
   {
    nose_x=result[0].pose.nose.x
    nose_y=result[0].pose.nose.y
    lwrist_x=result[0].pose.leftWrist.x
    lwrist_y=result[0].pose.leftWrist.y
    rwrist_x=result[0].pose.rightWrist.x
    rwrist_y=result[0].pose.rightWrist.y
    diffrence=lwrist_x-rwrist_x
    diffrence=floor(diffrence)  
    console.log(diffrence)
    
}
}