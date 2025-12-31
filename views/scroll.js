// ...existing code...
function scroll(targetId, duration){
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return; // guard if element missing

    const targetPosition = targetEl.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(timeElapsed, startPosition, distance, duration){
        // easeInOutQuad corrected
        let t = timeElapsed / (duration / 2);
        if(t < 1){
            return distance / 2 * t * t + startPosition;
        }
        t--;
        return -distance / 2 * (t * (t - 2) - 1) + startPosition;
    }

    // guard duration
    if (!duration || duration <= 0) {
        window.scrollTo(0, startPosition + distance);
        return;
    }

    requestAnimationFrame(animation);
}
// ...existing code...
window.onload = function(){
    const button = document.getElementById("projLink");
    if (button) {
        button.addEventListener("click", function(){
            scroll("projects", 1000);
        });
    } else {
        console.warn('projLink element not found — scroll link disabled');
    }

    // commented code left as-is

    const topEl = document.getElementById('top');
    const face = document.getElementById('face');
    const about = document.getElementById('about');

    if (topEl && face) {
        const clientHeight = topEl.clientHeight;
        face.style.paddingTop = (clientHeight / 6) + 'px';
    } else {
        console.warn('top or face element not found — skipping face padding');
    }

    if (topEl && about) {
        const clientHeight2 = topEl.clientHeight;
        about.style.paddingTop = (clientHeight2 / 6) + 'px';
    } else {
        console.warn('top or about element not found — skipping about padding');
    }

    console.log("scroll.js initialization complete");
};