function startdetecting(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(" https://teachablemachine.withgoogle.com/models/wg4Cb_UkY/model.json",modelready);
}

function modelready(){
    console.log("model has been loaded correctly");
    classifier.classify(gotResult);
}
    
function gotResult(error,results){
    console.log("got results")
    
}