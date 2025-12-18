
document.getElementById('openYoutube').onclick = function() {
document.getElementById('youtubeModal').style.display = 'flex';
};
document.getElementById('closeYoutube').onclick = function() {
document.getElementById('youtubeModal').style.display = 'none';
};
// ESC 키로 닫기
document.addEventListener('keydown', function(e) {
if (e.key === "Escape") document.getElementById('youtubeModal').style.display = 'none';
});
// 바깥 클릭 시 닫기
document.getElementById('youtubeModal').onclick = function(e) {
if (e.target === this) this.style.display = 'none';
};