
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
  flipToInput();
  setTimeout(dismissAppear(),5000);
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
  setTimeout(dismissDisappear(),5000);
}

flipButton.onclick = flipCardBack;

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
}
