const $block = document.querySelectorAll(".block");
const $button = document.querySelector(".button");
const $result = document.querySelector(".result");

let userSign = "x";
let computerSign = "o";
let winningCombonations = ['012','345','678','036','147','258','048','246'];
let breakFlag = false;
let winFlag = false;

let whoGoesFirst = Math.round(Math.random());
let firstBlock = Math.round((Math.random() * 8));
if (whoGoesFirst === 1) {
  userSign = "o";
  computerSign = "x";
  $block[firstBlock].textContent = computerSign;
};

function defineComputerBlock() {
  for (let i = 0; i < winningCombonations.length; i++) {
    let first = winningCombonations[i].slice(0, 1);
    let second = winningCombonations[i].slice(1, 2);
    let third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === computerSign && $block[second].textContent === computerSign && $block[third].textContent === "") {
      $block[third].textContent = computerSign;
      breakFlag = true;
      break;
    };
    if ($block[first].textContent === computerSign && $block[third].textContent === computerSign && $block[second].textContent === "") {
      $block[second].textContent = computerSign;
      breakFlag = true;
      break;
    };
    if ($block[second].textContent === computerSign && $block[third].textContent === computerSign && $block[first].textContent === "") {
      $block[first].textContent = computerSign;
      breakFlag = true;
      break;
    };
    if ($block[first].textContent === userSign && $block[second].textContent === userSign && $block[third].textContent === "") {
      $block[third].textContent = computerSign;
      breakFlag = true;
      break;
    };
    if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === "") {
      $block[second].textContent = computerSign;
      breakFlag = true;
      break;
    };
    if ($block[second].textContent === userSign && $block[third].textContent === userSign && $block[first].textContent === "") {
      $block[first].textContent = computerSign;
      breakFlag = true;
      break;
    };
  };
  if (breakFlag === false)
    for (let i = 0; i < $block.length; i++)
      if ($block[i].textContent === "") {
        $block[i].textContent = computerSign;
        breakFlag = true;
        break;
      };
};

function isComputerAWinner() {
  for (let i = 0; i < winningCombonations.length; i++) {
    let first = winningCombonations[i].slice(0, 1);
    let second = winningCombonations[i].slice(1, 2);
    let third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === computerSign && $block[second].textContent === computerSign && $block[third].textContent === computerSign) {
      $result.textContent = "Computer won";
      winFlag = true;
      break;
    };
  };
};

function isUserAWinner() {
  for (let i = 0; i < winningCombonations.length; i++) {
    let first = winningCombonations[i].slice(0, 1);
    let second = winningCombonations[i].slice(1, 2);
    let third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === userSign) {
      $result.textContent = "User won";
      winFlag = true;
      break;
    }
  };
};

for (let i = 0; i < $block.length; i++) {
  $block[i].addEventListener("click", function(){
  breakFlag = false;
    if ($block[i].textContent === "" && winFlag === false) {
      $block[i].textContent = userSign;
      defineComputerBlock();
      isUserAWinner();
      isComputerAWinner();
    };
  });
};

$button.addEventListener("click", function(){
  window.location.reload();
});