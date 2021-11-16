var progress = document.getElementsByClassName('status')[0];

var num = 0;


var intervalId = window.setInterval(function() {
    num++;
    progress.style.width = `${num}px`;
    if (num == 240) {
        window.open("https://youtu.be/dQw4w9WgXcQ?t=43","_self")
    }
}, 50);