
    document.querySelectorAll('.nv_bar details').forEach(details => {
        details.addEventListener('mouseover', () => {
            document.querySelectorAll('.nv_bar details').forEach(d => {
                if (d !== details) d.removeAttribute('open');
            });
            details.setAttribute('open', true);
        });
        details.addEventListener('mouseleave', () => {
            details.removeAttribute('open');
        });
    });
    