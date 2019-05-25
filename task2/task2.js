const $block = document.querySelectorAll(".block");

let userSign = "x";
let computerSign = "o";
let winningCombonations = ['012','345','678','036','147','258','048','246'];
let breakFlag = false;

let whoGoesFirst = Math.round(Math.random());
let firstBlock = Math.round((Math.random() * 8));
if (whoGoesFirst === 1) {
  userSign = "o";
  computerSign = "x";
  $block[firstBlock].textContent = computerSign;
};

function defineComputerBlock(userSign) {
  for (let i = 0; i < winningCombonations.length; i++) {
    let first = winningCombonations[i].slice(0, 1);
    let second = winningCombonations[i].slice(1, 2);
    let third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === userSign && $block[second].textContent === userSign && $block[third].textContent === "") {
      $block[third].textContent = computerSign;
      console.log("1")
      breakFlag = true;
    };
    if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === "") {
      $block[second].textContent = computerSign;
      console.log("2")
      breakFlag = true;
    };
    if ($block[second].textContent === userSign && $block[third].textContent === userSign && $block[first].textContent === "") {
      $block[first].textContent = computerSign;
      console.log("3")
      breakFlag = true;
    };
  };
  if (breakFlag === false)
    for (let i = 0; i < $block.length; i++)
      if ($block[i].textContent === "") {
        $block[i].textContent = computerSign;
        console.log("4",i);
        break;
      };
};

function isComputerAWinner(computerSign) {
  for (let i = 0; i < winningCombonations.length; i++) {
    let first = winningCombonations[i].slice(0, 1);
    let second = winningCombonations[i].slice(1, 2);
    let third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === computerSign && $block[second].textContent === computerSign && $block[third].textContent === computerSign) {
      // $block[third].textContent = computerSign;
      alert("Computer won");
      // break;
    };
    // if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === "") {
    //   $block[second].textContent = computerSign;
    //   alert("Computer won");
    //   break;
    // };
    // if ($block[second].textContent === userSign && $block[third].textContent === userSign && $block[first].textContent === "") {
    //   $block[first].textContent = computerSign;
    //   alert("Computer won");
    //   break;
    // };
  };
};

function isUserAWinner(userSign) {
  for (let i = 0; i < winningCombonations.length; i++) {
    let first = winningCombonations[i].slice(0, 1);
    let second = winningCombonations[i].slice(1, 2);
    let third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === userSign)
      alert("User won");
  };
};

for (let i = 0; i < $block.length; i++) {
  $block[i].addEventListener("click", function(){
    if ($block[i].textContent === "") {
      $block[i].textContent = userSign;
      defineComputerBlock(userSign);
      isComputerAWinner(computerSign);
      isUserAWinner(userSign);
    };
  });
};