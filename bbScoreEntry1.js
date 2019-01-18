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
let submitScore1 = document.querySelector(".submitCheckMark");

function scoreEntry1() {
  scoreEntryPage1.style.visibility = "visible"

}
openScore1.onclick = scoreEntry1;

function recordScore1() {
  scoreEntryPage1.style.visibility = "hidden"
}
submitScore1.onclick = recordScore1;
