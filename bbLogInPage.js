
//Login card flips//

let cardOne = document.querySelector(".button");
let cardTwo = document.querySelector(".inputs");
let flipButton = document.querySelector("#title-dismiss");

function flipToInput() {
  cardOne.style.animationName = 'flip-2-hor-top-bck';
  cardOne.style.zIndex = '1';
  cardTwo.style.animationName = 'scale-in-center';
  cardTwo.style.zIndex = '2';
}

cardOne.onclick = flipToInput;

function flipBack() {
  cardTwo.style.animationName = 'flip-2-hor-top-bck';
  cardTwo.style.zIndex = '1';
  cardOne.style.animationName = 'scale-in-center';
  cardOne.style.zIndex = '2';
  dropdownContent.style.display = 'none';
}

flipButton.onclick = flipBack;

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

//Login card flips back//
