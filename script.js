document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase())
});

document.querySelector(".composer button").addEventListener("click", () => {
    let sequenceSounds = document.querySelector("#input").value;

    if (sequenceSounds !== "") {
        let sequenceArray = sequenceSounds.split("");
        playSequence(sequenceArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyPress = document.querySelector(`div[data-key = "${sound}"]`);

    if (audioElement) {
        audioElement.play();
        audioElement.currentTime = 0;
    }
    if (keyPress) {
        keyPress.classList.add("active")
        setTimeout(() => {
            keyPress.classList.remove("active")
        }, 100);
    }
};

function playSequence(sequenceArray) {
    let time = 0;

    for (let keyPlay of sequenceArray) {
        setTimeout(() => {
            playSound(`key${keyPlay}`)
        }, time);

        time += 250;
    }
};