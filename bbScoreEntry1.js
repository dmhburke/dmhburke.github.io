
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

//Hole 1 pop-up
let openScore1 = document.querySelector(".holeEntry.Hole1");
let scoreEntryPage1 = document.querySelector(".scoreEntryOne");
let submitScore1 = document.querySelector(".submitCheckMark.Hole1");
let spinnerIcon1 = document.querySelector(".lds-hourglass.Hole1");

function scoreEntry1() {
  scoreEntryPage1.style.visibility = "visible"
  submitScore1.style.visibility = "visible";
  }
openScore1.onclick = scoreEntry1;

function scoreEntryClose1() {
  scoreEntryPage1.style.visibility = "hidden"
  submitScore1.style.visibility = "hidden";
}
function  spinnerGo1() {
  spinnerIcon1.style.visibility = "hidden"
  submitScore1.style.visibility = "visible";
}
function recordScore1() {
  submitScore1.style.visibility = "hidden"
  spinnerIcon1.style.visibility = "visible"
  setTimeout(spinnerGo1,1000)
  setTimeout(scoreEntryClose1,1500);
  }

submitScore1.onclick = recordScore1;

//Hole 2 pop-up
let openScore2 = document.querySelector(".holeEntry.Hole2");
let scoreEntryPage2 = document.querySelector(".scoreEntryTwo");
let submitScore2 = document.querySelector(".submitCheckMark.Hole2");
let spinnerIcon2 = document.querySelector(".lds-hourglass.Hole2");

function scoreEntry2() {
  scoreEntryPage2.style.visibility = "visible"
  submitScore2.style.visibility = "visible";
  }
openScore2.onclick = scoreEntry2;
function scoreEntryClose2() {
  scoreEntryPage2.style.visibility = "hidden"
  submitScore2.style.visibility = "hidden";
}
function  spinnerGo2() {
  spinnerIcon2.style.visibility = "hidden"
  submitScore2.style.visibility = "visible";
}
function recordScore2() {
  submitScore2.style.visibility = "hidden"
  spinnerIcon2.style.visibility = "visible"
  setTimeout(spinnerGo2,1000);
  setTimeout(scoreEntryClose2,1500);
  }
submitScore2.onclick = recordScore2;

//Populate player names
let NamePlayer1 = "Daniel Burke";
let ImagePlayer1 = "PlayerImageDB.jpg";

let NamePlayer2 = "Phil Rosengreen";
let ImagePlayer2 = "PlayerImagePR.jpg";

let NamePlayer3 = 'Bob Evans';
let ImagePlayer3 = 'PlayerImageBE.jpg'

let NamePlayer4 = 'Tim Stuart';
let ImagePlayer4 = 'PlayerImageTS.jpg'

let NamePlayer5 = 'Rowan Joseph';
let ImagePlayer5 = 'PlayerImageRJ.jpg'

let NamePlayer6 = 'Steve Gafen';
let ImagePlayer6 = 'PlayerImageSG.jpg'

let NamePlayer7 = 'Dylan Beaumont';
let ImagePlayer7 = 'PlayerImageDBe.jpg'

let NamePlayer8 = 'Geoff Roth';
let ImagePlayer8 = 'PlayerImageGR.jpg'

//Player 1
let nameDetailsPlayer1 = document.getElementById('PlayerOne').querySelector('.nameInput');
let imageDetailsPlayer1 = document.getElementById('PlayerOne').querySelector('.imageInput');
function changePlayer1Details() {
  nameDetailsPlayer1.innerHTML = NamePlayer1
  imageDetailsPlayer1.src = ImagePlayer1;
}
changePlayer1Details();

//Player 2
let nameDetailsPlayer2 = document.getElementById('PlayerTwo').querySelector('.nameInput');
let imageDetailsPlayer2 = document.getElementById('PlayerTwo').querySelector('.imageInput');
function changePlayer2Details() {
  nameDetailsPlayer2.innerHTML = NamePlayer2
  imageDetailsPlayer2.src = ImagePlayer2;
}
changePlayer2Details();

//Player 3
let nameDetailsPlayer3 = document.getElementById('PlayerThree').querySelector('.nameInput');
let imageDetailsPlayer3 = document.getElementById('PlayerThree').querySelector('.imageInput');
function changePlayer3Details() {
  nameDetailsPlayer3.innerHTML = NamePlayer3
  imageDetailsPlayer3.src = ImagePlayer3;
}
changePlayer3Details();

//Player 4
let nameDetailsPlayer4 = document.getElementById('PlayerFour').querySelector('.nameInput');
let imageDetailsPlayer4 = document.getElementById('PlayerFour').querySelector('.imageInput');
function changePlayer4Details() {
  nameDetailsPlayer4.innerHTML = NamePlayer4
  imageDetailsPlayer4.src = ImagePlayer4;
}
changePlayer4Details();

//Player 5
let nameDetailsPlayer5 = document.getElementById('PlayerFive').querySelector('.nameInput');
let imageDetailsPlayer5 = document.getElementById('PlayerFive').querySelector('.imageInput');
function changePlayer5Details() {
  nameDetailsPlayer5.innerHTML = NamePlayer5
  imageDetailsPlayer5.src = ImagePlayer5;
}
changePlayer5Details();

//Player 6
let nameDetailsPlayer6 = document.getElementById('PlayerSix').querySelector('.nameInput');
let imageDetailsPlayer6 = document.getElementById('PlayerSix').querySelector('.imageInput');
function changePlayer6Details() {
  nameDetailsPlayer6.innerHTML = NamePlayer6
  imageDetailsPlayer6.src = ImagePlayer6;
}
changePlayer6Details();

//Player 7
let nameDetailsPlayer7 = document.getElementById('PlayerSeven').querySelector('.nameInput');
let imageDetailsPlayer7 = document.getElementById('PlayerSeven').querySelector('.imageInput');
function changePlayer7Details() {
  nameDetailsPlayer7.innerHTML = NamePlayer7
  imageDetailsPlayer7.src = ImagePlayer7;
}
changePlayer7Details();

//Player 8
let nameDetailsPlayer8 = document.getElementById('PlayerEight').querySelector('.nameInput');
let imageDetailsPlayer8 = document.getElementById('PlayerEight').querySelector('.imageInput');
function changePlayer8Details() {
  nameDetailsPlayer8.innerHTML = NamePlayer8
  imageDetailsPlayer8.src = ImagePlayer8;
}
changePlayer8Details();

//Player 9
let nameDetailsPlayer9 = document.getElementById('PlayerNine').querySelector('.nameInput');
let imageDetailsPlayer9 = document.getElementById('PlayerNine').querySelector('.imageInput');
function changePlayer9Details() {
  nameDetailsPlayer9.innerHTML = NamePlayer9
  imageDetailsPlayer9.src = ImagePlayer9;
}
changePlayer9Details();

//Player 10
let nameDetailsPlayer10 = document.getElementById('PlayerTen').querySelector('.nameInput');
let imageDetailsPlayer10 = document.getElementById('PlayerTen').querySelector('.imageInput');
function changePlayer10Details() {
  nameDetailsPlayer4.innerHTML = NamePlayer10
  imageDetailsPlayer4.src = ImagePlayer10;
}
changePlayer10Details();

//Player 11
let nameDetailsPlayer11 = document.getElementById('PlayerEleven').querySelector('.nameInput');
let imageDetailsPlayer11 = document.getElementById('PlayerEleven').querySelector('.imageInput');
function changePlayer11Details() {
  nameDetailsPlayer11.innerHTML = NamePlayer11
  imageDetailsPlayer11.src = ImagePlayer11;
}
changePlayer11Details();

//Player 12
let nameDetailsPlayer12 = document.getElementById('PlayerTwelve').querySelector('.nameInput');
let imageDetailsPlayer12 = document.getElementById('PlayerTwelve').querySelector('.imageInput');
function changePlayer12Details() {
  nameDetailsPlayer12.innerHTML = NamePlayer12
  imageDetailsPlayer12.src = ImagePlayer12;
}
changePlayer12Details();
