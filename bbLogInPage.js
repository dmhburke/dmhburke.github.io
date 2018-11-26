
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

/*** PASSWORD CHECK

let passwordEnter = document.querySelector(".passwordEnter");
let passwordText = document.querySelector(".enterPassword");

if(passwordEnter.value == "Password") {
  passwordText.style.color = 'black';
} else {
  passwordText.style.color = 'red';
}
*/

//***Show dropdown//

let dropdown = document.querySelector(".dropdown");
let dropdownContent = document.querySelector(".dropdown-content");
let activePlayer = document.querySelector(".playerName:hover");

function showDropdown() {
      if(dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
  }
dropdown.onclick = showDropdown;
