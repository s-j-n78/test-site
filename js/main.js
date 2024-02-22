var mymusic = document.getElementById("mymusic");
var isPlaying = false;

function togglePlay() {
  isPlaying ? mymusic.pause() : mymusic.play();
}
mymusic.onplaying = function () {
  isPlaying = true;
  console.log("playing");
  document.getElementById("icon").classList.remove("fa-play-circle");
  document.getElementById("icon").classList.add("fa-pause-circle");
};
mymusic.onpause = function () {
  isPlaying = false;
  console.log("paused");
  document.getElementById("icon").classList.add("fa-play-circle");
  document.getElementById("icon").classList.remove("fa-pause-circle");
};
