// Global Variables
var wins = 0;
var losses = 0;
var totalScore = 0;

var greenCrystal;
var magmaCrystal;
var stormCrystal;
var plasmaCrystal;
var goalNum;

// Function to start the game when the page loads
function startGame() {

    greenCrystal = randCrystalNum();
    magmaCrystal = randCrystalNum();
    stormCrystal = randCrystalNum();
    plasmaCrystal = randCrystalNum();
    goalNum = randGoalNum();

    $("#randomScore").html("Goal: " + goalNum);

};

// Get random crystal numbers when page loads
function randCrystalNum () {

    return Math.floor(Math.random() * 12 + 1);

};

// Get random goal number when page loads
function randGoalNum () {

    return Math.floor(Math.random() * 101 + 19);

};

$(document).ready(function () {

    startGame();

    $("#green").click(function () {

        totalScore = greenCrystal + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);

    });

    $("#magma").click(function () {

        totalScore = magmaCrystal + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);

    });

    $("#storm").click(function () {

        totalScore = stormCrystal + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);

    });

    $("#plasma").click(function () {

        totalScore = plasmaCrystal + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);

    });
    
    // track wins and losses
    function tracker() {

        if (totalScore === goalNum) {

            $("#wins").html("Wins: " + (wins += 1));
            totalScore = 0;
            startGame();

        } else if (totalScore > goalNum) {

            $("#losses").html("Losses: " + (losses += 1));
            totalScore = 0;
            startGame();

        }

    }

});