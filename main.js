status= "";
input= "";

function setup() {
    canvas= createCanvas(620,390);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(620,390);
    video.hide();
}

function start() {
    object_Detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}

function draw(){
    image(video,0,0,620,390);
}