document.addEventListener('DOMContentLoaded', function() {
  var wmarContent = document.querySelector('.wmar').textContent;
  var uls = document.querySelectorAll('.item_basket_type ul');
  uls.forEach(function(ul) {
    var watermarkWrapper = document.createElement('div');
    watermarkWrapper.style.position = 'absolute';
    watermarkWrapper.style.top = '0';
    watermarkWrapper.style.left = '-11rem';
    watermarkWrapper.style.width = '100%';
    watermarkWrapper.style.height = '100%';
    watermarkWrapper.style.pointerEvents = 'none';
    watermarkWrapper.style.zIndex = '1';
    watermarkWrapper.style.overflow = 'hidden';

    var watermarkText = document.createElement('div');
    watermarkText.textContent = wmarContent;
    watermarkText.style.position = 'absolute';
    watermarkText.style.top = '0%';
    watermarkText.style.left = '-21rem';
    watermarkText.style.width = '100%';
    watermarkText.style.transform = 'translateY(-50%) rotate(-45deg)';
    watermarkText.style.opacity = '0.15';
    watermarkText.style.fontSize = '2em';
    watermarkText.style.fontWeight = 'bold';
    watermarkText.style.color = '#ebcacaff';
    watermarkText.style.whiteSpace = 'nowrap';

    // 반복적으로 워터마크 추가
    var repeatCount = Math.ceil(ul.offsetWidth / 300);
    for (var i = 0; i < repeatCount; i++) {
      var clone = watermarkText.cloneNode(true);
      clone.style.left = (i * 300) + 'px';
      watermarkWrapper.appendChild(clone);
    }

    ul.style.position = 'relative';
    ul.appendChild(watermarkWrapper);
  });
});