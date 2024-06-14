window.mypopup = (function () {
    let overlay = document.createElement('div');
    overlay.id = "mypopupOverlay";
    document.body.appendChild(overlay);
    overlay.addEventListener('click', doFadeOut);
    overlay.addEventListener("animationend", onAnimationEnd, false);
    window.addEventListener('scroll', function () {
        if (overlay.style.display == 'block') {
            doFadeOut();
        }
    });
    for (let img of document.getElementsByClassName('mypopup')) {
        if (img instanceof HTMLImageElement) {
            img.addEventListener('click', doFadeIn);
        }
    }
    function doFadeIn(e) {
        let img = document.createElement('img');
        img.src = e.target.src;
        img.srcset = e.target.srcset;
        overlay.style.display = 'block';
        overlay.innerHTML = '';
        overlay.appendChild(img);
        overlay.classList.add('mypopup-fade-in');
    }
    function doFadeOut(e) {
        overlay.classList.remove('mypopup-fade-in');
        overlay.classList.add('mypopup-fade-out');
    }
    function onAnimationEnd(e) {
        if (e.animationName === 'fadeIn') {
        }
        else if (e.animationName === 'fadeOut') {
            overlay.style.display = 'none';
            overlay.classList.remove('mypopup-fade-out');
            overlay.innerHTML = '';
        }
    }
})();
