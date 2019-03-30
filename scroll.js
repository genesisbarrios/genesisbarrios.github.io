function scroll(target, duration){
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime == null){
            startTime = currentTime;
        }   
        
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        
        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(timeElapsed, startPosition, distance, duration){
        timeElapsed /= duration / 2;
        if(timeElapsed < 1){
            return distance / 2 * timeElapsed * timeElapsed + startPosition;
        }
        timeElapsed--;
        return -distance / 2 * (timeElapsed * (timeElapsed - 2) - 1 + startPosition);
    }

    //loop through animation() at 60fps
    requestAnimationFrame(animation);
}

window.onload = function(){
    var button = document.getElementById("projLink");

    button.addEventListener("click",function(){
        scroll("projects", 1000);
    });

    

    // var button = document.getElementById("about");

    // button.addEventListener("click",function(){
    //     scroll("top", 1000);
    // });

    var clientHeight = document.getElementById('top').clientHeight;
    var face = document.getElementById('face');
    var about = document.getElementById('about');

    console.log("got elements by id");

    face.style.paddingTop = clientHeight / 6;
    about.style.paddingTop = clientHeight / 6;
    console.log("set margins");
};