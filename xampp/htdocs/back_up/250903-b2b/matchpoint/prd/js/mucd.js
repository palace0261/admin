


  // 마우스 드래그, 복사, 캡처, 우클릭 등 방지
  document.addEventListener('contextmenu', function(e) {
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


