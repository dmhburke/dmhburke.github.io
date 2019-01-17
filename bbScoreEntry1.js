
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
