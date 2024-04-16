var xd=window.webkitSpeechRecognition;
var xD=new xd();
function a(){
document.getElementById ("fachero").innerHTML="";
xD.start();
}
xD.onresult=function(pi){
console.log(pi);
var Xd=pi.results[0][0].transcript;
document.getElementById("fachero").innerHTML=Xd;
if(Xd=="carita fachera facherita"){
    speak();console.log("u")
}
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("fachero").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    const newLocal = '#camara';
    Webcam.attach(newLocal);
    setTimeout(function(){
        XD();
        xXd();
    },5000
        
    );
}
function XD(){
    Webcam.snap(function(data_uri) { document.getElementById("resultado").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });
}
camarafachera=document.getElementById("camara")
Webcam.set({
width:350,height:200,image_format:"png",png_quality:100
})
function xXd(){
    link = document.getElementById("link"); image = document.getElementById("selfie_image").src ;
    link.href
    = image; link.save(".png");   
}





