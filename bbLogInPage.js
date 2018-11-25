
//Login card flips//

let cardOne = document.querySelector(".button");
let cardTwo = document.querySelector(".inputs");
let flipButton = document.querySelector(".dismiss");

function flipToInput() {
  cardOne.style.animationName = 'flip-2-hor-top-bck';
  cardOne.style.zIndex = '1';
  cardTwo.style.animationName = 'scale-in-center';
  cardTwo.style.zIndex = '2';
  flipButton.style.display = 'inline';
}

cardOne.onclick = flipToInput;

function flipBack() {
  cardTwo.style.animationName = 'flip-2-hor-top-bck';
  cardTwo.style.zIndex = '1';
  cardOne.style.animationName = 'scale-in-center';
  cardOne.style.zIndex = '2';
  flipButton.style.display = 'none';
}

flipButton.onclick = flipBack;

//*** PASSWORD CHECK ***//

let passwordEnter = document.querySelector(".passwordEnter");

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
