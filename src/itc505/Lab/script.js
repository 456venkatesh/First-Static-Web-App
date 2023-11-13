// JavaScript code in a separate file

// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Get the user's guessed number
    const userGuess = parseInt(document.getElementById("guess").value);

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Provide feedback based on the guessed number
    if (userGuess === targetNumber) {
        displayResult("Congratulations! You guessed the correct number.");
    } else if (userGuess < targetNumber) {
        displayResult("Too low! Try again.");
    } else {
        displayResult("Too high! Try again.");
    }
}

function displayResult(message) {
    // Display the result message
    document.getElementById("result").textContent = message;

    // Reset the guessed number input
    document.getElementById("guess").value = "";
}