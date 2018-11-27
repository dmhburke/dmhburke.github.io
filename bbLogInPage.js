
//Login card flips//

let cardOne = document.querySelector(".button");
let cardTwo = document.querySelector(".inputs");
let flipButton = document.querySelector(".dismiss");

function flipToInput() {
  cardOne.style.animationName = 'flip-2-hor-top-bck';
  cardOne.style.zIndex = '1';
  cardTwo.style.animationName = 'scale-in-center';
  cardTwo.style.zIndex = '2';
}

function dismissAppear() {
  flipButton.style.display = 'inline';
}

function flipCard() {
  flipToInput()
  setTimeout(dismissAppear,2000);
}

cardOne.onclick = flipCard;

function flipBack() {
  cardTwo.style.animationName = 'flip-2-hor-top-bck';
  cardTwo.style.zIndex = '1';
  cardOne.style.animationName = 'scale-in-center';
  cardOne.style.zIndex = '2';
}

function dismissDisappear(){
  flipButton.style.display = 'none';
}

function flipCardBack() {
  flipBack();
  dismissDisappear();
}

flipButton.onclick = flipCardBack;

//Password validation//

let passwordText = document.querySelector(".passwordEnter");
let changeText = document.querySelector(".enterPassword");
let linkElement = document.querySelector(".entryLink");

function validatePass() {
  if(passwordText.value == "stitchup") {
    linkElement.href = "BBagenda.html";
  } else {
    changeText.innerHTML = "Wrong password"
    return false;
  }
};

//Player card creation//

const source = document.getElementById('playerDetailsFill').innerHTML;
const template = Handlebars.compile(source);

const context = {
    players: ["Daniel Burke", "Phil Rosengreen", "Tim Stuart"]
};

const compiledHtml = template(context);

const displayPlayers = document.getElementById('playerList');
displayPlayers.innerHTML = compiledHtml;


//END//
