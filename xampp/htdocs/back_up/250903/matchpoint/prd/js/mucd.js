


  // 마우스 드래그, 복사, 캡처, 우클릭 등 방지
  //document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });
  document.addEventListener('copy', function(e) {
    e.preventDefault();
  });
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });
  document.addEventListener('keydown', function(e) {
    // PrintScreen, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+U, Ctrl+S, Ctrl+P
    if (
      e.key === 'PrintScreen' ||
      e.key === 'PrtScSysRq' ||
      (e.ctrlKey && ['c', 'v', 'x', 'u', 's', 'p'].includes(e.key.toLowerCase())) ||
      ((e.metaKey || e.key === 'Meta') && e.key.toLowerCase() === 'printscreen') || // MacOS PrintScreen
      ((e.key === 'Meta' || e.key === 'OS') && e.key.toLowerCase() === 'printscreen') // Windows key + PrintScreen
    ) {
      e.preventDefault();
    }
  });



  

    // 모바일 확대 및 꾹누르기(롱프레스) 드래그 제한
    document.addEventListener('touchstart', function(e) {
      if (e.touches.length > 1) {
        e.preventDefault(); // 멀티터치 확대 방지
      }
    }, { passive: false });

    document.addEventListener('gesturestart', function(e) {
      e.preventDefault(); // iOS 확대 제스처 방지
    });

    document.addEventListener('touchmove', function(e) {
      if (e.touches.length > 1) {
        e.preventDefault(); // 멀티터치 드래그 방지
      }
    }, { passive: false });

    document.addEventListener('contextmenu', function(e) {
      e.preventDefault(); // 모바일 롱프레스 메뉴 방지
    });