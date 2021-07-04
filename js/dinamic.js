const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $forward = document.querySelector("#forward");
const $backward = document.querySelector("#backward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

$forward.addEventListener("click", handleForward);

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  $video.currentTime = $video.currentTime - 10;
}

let $progress = document.querySelector("#rango");
$video.addEventListener("loadedmetadata", handleLoader);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoader() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
}
