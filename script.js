document.querySelector("#play").addEventListener("click", function () {
    document.querySelector("#play").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">' +
        '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>' +
        '</svg> &nbsp; Play Game';
    document.querySelector("#play").style.position = "absolute";
    document.querySelector("#play").style.left = "10px";
    document.querySelector("#play").style.top = "10px";
    document.querySelector("#play").style.backgroundColor = "rgb(54, 131, 54) ";
    document.querySelector("#play").style.opacity = "0.7";

    let Timer = 60;
    let score = 0;
    let hitrn = 0;

    function increaseScore() {
        score += 10;
        document.querySelector("#scoreval").textContent = score;
    }

    function getNewHit() {
        hitrn = Math.floor(Math.random() * 10);
        document.querySelector("#hitval").textContent = hitrn;
    }

    function makeBubble() {
        let clutter = "";
        for (let i = 1; i <= 19 * 7; i++) {
            let x = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble">${x}</div>`;
        }
        document.querySelector("#pbtm").innerHTML = clutter;
    }

    function runTimer() {
        var timer = setInterval(function () {
            if (Timer > 0) {
                Timer--;
                document.querySelector("#timerval").textContent = Timer;
            } else {
                clearInterval(timer);
                document.querySelector("#pbtm").innerHTML = `<h1>&nbsp; &nbsp;Game Over <br> Your score is : ${score} </h1> `;
                document.querySelector("#play").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">' +
                    '<path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>' +
                    '</svg> &nbsp; Try Again';

                document.querySelector("#play").style.position = "absolute";
                document.querySelector("#play").style.left = "47%";
                document.querySelector("#play").style.top = "65%";
                document.querySelector("#play").style.backgroundColor = "rgb(90, 90, 157)";
                document.querySelector("#play").style.opacity = "1";

                document.querySelector("#hitval").textContent = "00";
                Timer = 0;
            }
        }, 1000)
    }

    const sound = document.getElementById('sound');
    const muteButton = document.getElementById('muteButton');
    const speakerIcon = document.getElementById('speakerIcon');

    document.querySelector("#pbtm").addEventListener("click", function (bbl) {
        let clickednum = Number(bbl.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
            // Play the bubble sound
            sound.play();
            // Update the speaker icon
            speakerIcon.classList.remove('fa-volume-mute');
            speakerIcon.classList.add('fa-volume-up');
        } else {
            document.querySelector("#pbtm").innerHTML = `<h1> &nbsp;&nbsp;  Game Over <br> Your score is : ${score} </h1>`;
            document.querySelector("#hitval").textContent = "00";
            Timer = 0;
            // Pause the bubble sound
            sound.pause();
            // Update the speaker icon
            speakerIcon.classList.remove('fa-volume-up');
            speakerIcon.classList.add('fa-volume-mute');
        }
    });

    muteButton.addEventListener('click', function () {
        // Toggle the mute state of the audio
        sound.muted = !sound.muted;

        // Toggle the speaker icon
        if (sound.muted) {
            speakerIcon.classList.remove('fa-volume-up');
            speakerIcon.classList.add('fa-volume-mute');
        } else {
            speakerIcon.classList.remove('fa-volume-mute');
            speakerIcon.classList.add('fa-volume-up');
        }
    });

    runTimer();
    makeBubble();
    getNewHit();
});

// Audio controls for background music
const muteButton1 = document.getElementById('muteButton');
const speakerIcon1 = document.getElementById('speakerIcon');
const backgroundMusic = document.getElementById('backgroundMusic');

muteButton1.addEventListener('click', function () {
    // Check if the audio is paused
    if (backgroundMusic.paused) {
        // Play the audio
        backgroundMusic.play();
        // Update the speaker icon
        speakerIcon1.classList.remove('fa-volume-mute');
        speakerIcon1.classList.add('fa-volume-up');
    } else {
        // Pause the audio
        backgroundMusic.pause();
        // Update the speaker icon
        speakerIcon1.classList.remove('fa-volume-up');
        speakerIcon1.classList.add('fa-volume-mute');
    }
});
