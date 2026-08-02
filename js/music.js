const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.textContent = "⏸ Pause Music";

        playing = true;

    } else {

        music.pause();

        musicBtn.textContent = "🎵 Play Music";

        playing = false;

    }

});