// Descriptive variables
let playerHealth = 100;      // integer
let playerStamina = 80;      // integer
let playerName = "Survivor"; // string
let survivalMode = false;    // boolean

// Mathematical operation
let totalStrength = playerHealth + playerStamina;

// Decision structure with logical operator
if (totalStrength > 150 && playerHealth > 0) {
    console.log("Player strong enough to begin.");
    document.getElementById("playerMessage").innerHTML =
        playerName + ", Total Strength: " + totalStrength;
} else {
    console.log("Player too weak.");
    document.getElementById("playerMessage").innerHTML =
        "You must train before entering survival mode.";
}

// Button event
document.getElementById("startButton").addEventListener("click", function() {

    survivalMode = true;

    console.log("Survival Mode:", survivalMode);

    if (survivalMode === true) {
        document.getElementById("gameStatus").innerHTML =
            "⚔ Entering Survival Mode...";
    } else {
        document.getElementById("gameStatus").innerHTML =
            "Error starting game.";
    }

});