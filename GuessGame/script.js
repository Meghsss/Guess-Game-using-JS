let num = document.getElementById("inputNum");
let result = document.getElementById("result");
let scoreElement = document.getElementById("score");
let randomNum = Math.floor(Math.random() * 10) + 1;
let guessesRemaining = 10;

function check() {
    let entered = parseInt(num.value);

    if (entered === randomNum) {
        result.textContent = "You win!";
        // Add a game over or new game functionality here
    } else if (guessesRemaining === 0) {
        result.textContent = "You lose! The number was " + randomNum;
        // Add a game over or new game functionality here
    } else {
        guessesRemaining--;
        scoreElement.textContent = "Guesses remaining: " + guessesRemaining;
        result.textContent = entered < randomNum ? "Too low!" : "Too high!";
    }
}
