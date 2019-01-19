//ADD PLAYER NAMES TO SCORECARD//
let Player1 = 'Daniel Burke';

function populateScorecard() {
document.getElementById("Player1").innertext = 'Daniel Burke';
}








//SHOW LEADERBOARD//

let scoreboard = document.querySelector(".scoreboardRound1");
let showScoreboard = document.querySelector(".ScoreboardButtonRound1");

function scoreboardToggle() {
    if(scoreboard.style.visibility === "visible") {
      scoreboard.style.visibility = "hidden";
      showScoreboard.innerHTML = "Check Leaderboard";
    } else {
      scoreboard.style.visibility = "visible";
      showScoreboard.innerHTML = "Hide Leaderboard";
    }
}

showScoreboard.onclick = scoreboardToggle;

//POP-UP SCORE ENTRY BOX AND ENABLE SCORE SUBMIT//

let openScore1 = document.querySelector(".holeEntry");
let scoreEntryPage1 = document.querySelector(".scoreEntryOne");
let submitScore1 = document.getElementById("submitCheckMark");
let spinnerIcon = document.querySelector(".lds-hourglass");

function scoreEntry1() {
  scoreEntryPage1.style.visibility = "visible"
  submitScore1.style.visibility = "visible";
  }

openScore1.onclick = scoreEntry1;

function scoreEntryClose() {
  scoreEntryPage1.style.visibility = "hidden"
}

function  spinnerGo() {
  spinnerIcon.style.visibility = "hidden"
}

function recordScore1() {
  submitScore1.style.visibility = "hidden"
  spinnerIcon.style.visibility = "visible"
  setTimeout(scoreEntryClose,1500);
  setTimeout(spinnerGo,1500);
  }

submitScore1.onclick = recordScore1;
