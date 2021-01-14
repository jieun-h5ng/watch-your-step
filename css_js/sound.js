// function play(){
//     const audio =document.getElementById("sound");
//     audio.play();
// }

var button = document.getElementById("waterdrop");
var audio = document.getElementById("player");
button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    // button.innerHTML = "&#10074;&#10074;";
  } else {
    audio.pause();
    // button.innerHTML = "&#9658";
  }
});
 