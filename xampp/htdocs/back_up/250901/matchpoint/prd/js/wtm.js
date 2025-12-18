
  document.addEventListener("DOMContentLoaded", function() {
    var wmarContent = document.querySelector('.wmar').innerHTML;
    var basketLists = document.querySelectorAll('.oztus > div:first-of-type');
    basketLists.forEach(function(li) {
      var watermark = document.createElement('div');
      watermark.className = 'watermark';
      watermark.innerHTML = wmarContent;
      watermark.style.position = 'absolute';
      watermark.style.top = '50%';
      watermark.style.left = '50%';
      watermark.style.transform = 'translate(-50%, -50%)';
      watermark.style.pointerEvents = 'none';
      watermark.style.whiteSpace = 'nowrap';
      watermark.style.zIndex = '110';
      li.appendChild(watermark);
    });
  });