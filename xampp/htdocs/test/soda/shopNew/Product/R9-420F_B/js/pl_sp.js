
document.addEventListener('DOMContentLoaded', function() {
var btn = document.getElementById('play-vimeo');
var iframe = document.querySelector('#exu-ud iframe');
btn.addEventListener('click', function() {
// Post message to vimeo player to play
iframe.contentWindow.postMessage('{"method":"play"}', '*');
btn.style.display = 'none';
});
});

document.addEventListener('DOMContentLoaded', function() {
var playBtn = document.getElementById('play-vimeo');
var pauseBtn = document.getElementById('pause-vimeo');
var iframe = document.querySelector('#exu-ud iframe');
playBtn.addEventListener('click', function() {
iframe.contentWindow.postMessage('{"method":"play"}', '*');
playBtn.style.display = 'none';
pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', function() {
iframe.contentWindow.postMessage('{"method":"pause"}', '*');
pauseBtn.style.display = 'none';
playBtn.style.display = 'inline-block';
});
});