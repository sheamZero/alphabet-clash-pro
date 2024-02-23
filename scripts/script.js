
function findElementById(id) {
    const element = document.getElementById(id);
    return element;
}

function changeWebpage() {
    const homeSection = findElementById("home");
    homeSection.classList.add("hidden");

    const playgroundSection = findElementById("play-ground");
    playgroundSection.classList.remove("hidden");
}

function setBgColor() {
    const alphabets = document.getElementById("screen-text").innerText;
    const alphabet = alphabets.toLowerCase();

    document.getElementById(alphabet).classList.add("bg-green-400");
}

function removeBgColor() {
    const alphabets = document.getElementById("screen-text").innerText;
    const alphabet = alphabets.toLowerCase();

    document.getElementById(alphabet).classList.remove("bg-green-400");
}

function setRandomAlphabets() {
    const number = Math.round(Math.random() * 26);

    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabets.split("");
    const alpha = alphabet[number].toUpperCase();
    console.log(alpha);

    const screenText = findElementById("screen-text");
    // console.log(screenText.innerText);
    screenText.innerText = alpha;

    setBgColor();
}

document.getElementById("play-now").addEventListener("click", function () {
    changeWebpage();

    setRandomAlphabets();
})




document.addEventListener("keyup", function handleKeybordEvent(event) {

    const pressedKey = event.key.toUpperCase();


    const expectedKey = findElementById("screen-text").innerText;
    // console.log(pressedKey);

    if (pressedKey === expectedKey) {
        let score = parseInt(findElementById("score").innerText);
        score = score + 1;

        findElementById("score").innerText = score;
        // console.log(typeof score);
        // console.log(score);

        removeBgColor();
        setRandomAlphabets();
    }
    else if (pressedKey === "ESCAPE") {
        findElementById("play-ground").classList.add("hidden");
        findElementById("score-section").classList.remove("hidden");
    }
    else {
        let gameLife = parseInt(findElementById("life").innerText);
        gameLife = gameLife - 1;
        findElementById("life").innerText = gameLife;
        // console.log(gameLife);

        if (gameLife <= 0) {
            const finalScore = findElementById("score").innerText;
            // let finalScoreContainer = findElementById("view-score").innerText;
            findElementById("view-score").innerText = finalScore;

            const playgroundSection = findElementById("play-ground");
            playgroundSection.classList.add("hidden");

            findElementById("score-section").classList.remove("hidden");
        }
        // else {

        // }
    }
})




document.getElementById("play-now-again").addEventListener("click", function () {
    findElementById("score-section").classList.add("hidden");
    findElementById("play-ground").classList.remove("hidden");

    findElementById("score").innerText = '0';
    findElementById("life").innerText = '3';

    removeBgColor();
    setRandomAlphabets();
})

