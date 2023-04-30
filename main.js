let poseNet;
let poseArray;
let canvas;
function setup (){
    canvas = createCanvas(300, 300);
    canvas.center();
    canvas.createCapture(VIDEO);
    canvas.hide();
    poseNet = ml5.poseNet(canvas, modelLoaded);
    poseNet.on('pose', gotPosesPosition)
}

function modelLoaded(){
    console.log("Loaded...")
}

function gotPosesPosition(result){
    if(result.length>0){
        poseArray = result[0];
        console.log(poseArray);
    }
}

setup();

const snapshot = () =>{
    save("YourRealTimeDFilter");
}

const draw = () =>{
  image(canvas, 0, 0, 300, 300);  
}