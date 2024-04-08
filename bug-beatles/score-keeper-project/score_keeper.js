const playerOneBtn = document.querySelector("#player1btn");
const playerTwoBtn = document.querySelector("#player2btn");
const resetBtn = document.querySelector("#reset");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const input = document.querySelector("#maxScore");
const sessionRecordsDiv = document.querySelector("#sessionRecords");

// Initialize scores and session records array
playerOneScore.value = "0";
playerTwoScore.value = "0";
let scoreOfOne = 0;
let scoreOfTwo = 0;
let winner = false;
let sessionRecords = [];

// Function to update session records
function updateSessionRecords() {
    const record = {
        playerOneScore: scoreOfOne,
        playerTwoScore: scoreOfTwo,
        date: new Date().toLocaleString() // Add current date/time
    };
    sessionRecords.push(record);
    displaySessionRecords();
}

// Function to display session records on the UI
function displaySessionRecords() {
    sessionRecordsDiv.innerHTML = ""; // Clear existing records

    sessionRecords.forEach(record => {
        const recordElement = document.createElement("div");
        recordElement.innerHTML = `<strong>Date:</strong> ${record.date}, <strong>Player 1 Score:</strong> ${record.playerOneScore}, <strong>Player 2 Score:</strong> ${record.playerTwoScore}`;
        sessionRecordsDiv.appendChild(recordElement);
    });
}

// Function to increase score for player 1
function scoreIncreaserbtn1() {
    scoreOfOne = parseInt(playerOneScore.value);
    if (playerOneScore.value < input.value && winner === false) {
        scoreOfOne += 1;
    }
    playerOneScore.value = `${scoreOfOne}`;
    playerOneScore.innerText = `${playerOneScore.value}`;

    // Check if player 1 has won
    if (playerOneScore.value == input.value) {
        updateSessionRecords(); // Update session records when player 1 wins
        endGame();
    }
}

// Function to increase score for player 2
function scoreIncreaserbtn2() {
    scoreOfTwo = parseInt(playerTwoScore.value);
    if (playerTwoScore.value < input.value && winner === false) {
        scoreOfTwo += 1;
    }
    playerTwoScore.value = `${scoreOfTwo}`;
    playerTwoScore.innerText = `${playerTwoScore.value}`;

    // Check if player 2 has won
    if (playerTwoScore.value == input.value) {
        updateSessionRecords(); // Update session records when player 2 wins
        endGame();
    }
}

// Function to end the game when a player wins
function endGame() {
    winner = true;
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
}

// Event listeners for score buttons
playerOneBtn.addEventListener('click', function() {
    scoreIncreaserbtn1();
});

playerTwoBtn.addEventListener('click', function() {
    scoreIncreaserbtn2();
});

// Event listener for reset button
resetBtn.addEventListener('click', function() {
    reset();
});

// Function to reset scores and input
function reset() {
    scoreOfOne = 0;
    scoreOfTwo = 0;
    input.value = "";
    playerOneScore.value = "0";
    playerTwoScore.value = "0";
    playerOneScore.innerText = `${playerOneScore.value}`;
    playerTwoScore.innerText = `${playerTwoScore.value}`;
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;
    winner = false;
    displaySessionRecords(); // Update UI to clear input values
}

