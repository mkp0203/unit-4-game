// Global Variables
var wins = 0;
var losses = 0;
var totalScore = 0;

// crystal variables randomly 1-12
var green = Math.floor((Math.random() * 12) + 1);
var magma = Math.floor((Math.random() * 12) + 1);
var storm = Math.floor((Math.random() * 12) + 1);
var plasma = Math.floor((Math.random() * 12) + 1);

$(document).ready(function () {

    var random = Math.floor((Math.random() * 102) + 19);
    $("#randomScore").html("<p>Target number: " + random + "</p>");

    // each crystal grabbing onto TotalScore div
    $("#green").click(function () {
        totalScore = green + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);
    })

    $("#magma").click(function () {
        totalScore = magma + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);
    })

    $("#storm").click(function () {
        totalScore = storm + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);
    })

    $("#plasma").click(function () {
        totalScore = plasma + totalScore;
        tracker();
        $("#total-score").html("Total Score: " + totalScore);
    })
    
    // track wins and losses
    function tracker() {

        if (totalScore === random) {
            $("#wins").html("Wins: " + (wins += 1));
            totalScore = 0;
            randomReset();
            crystalReset();
        } else if (totalScore > random) {
            $("#losses").html("Losses: " + (losses += 1));
            totalScore = 0;
            randomReset();
            crystalReset();
        }

    }

    // resets the random number
    function randomReset() {

        random = Math.floor((Math.random() * 102) + 19);
        $("#randomScore").html("<p>Target number: " + random + "</p>");

    }

    // resets the crystal values
    function crystalReset() {

        green = Math.floor((Math.random() * 12) + 1);
        magma = Math.floor((Math.random() * 12) + 1);
        storm = Math.floor((Math.random() * 12) + 1);
        plasma = Math.floor((Math.random() * 12) + 1);

    }

})