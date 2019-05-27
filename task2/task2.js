const $block = document.querySelectorAll(".block");
const $button = document.querySelector(".button");
const $result = document.querySelector(".result");

let userSign = "x";
let computerSign = "o";
const winningCombonations = ['012','345','678','036','147','258','048','246'];
let breakFlag = false; //флаг нахождения оптимального хода компьютера
let winFlag = false; //флаг наличия победной компбинации

const whoGoesFirst = Math.round(Math.random());
const firstBlock = Math.round((Math.random() * 8)); //опредление первого хода
if (whoGoesFirst === 1) {
  userSign = "o";
  computerSign = "x";
  $block[firstBlock].textContent = computerSign;
};

let first;
let second;
let third;

function isUserAWinner() {
  for (let i = 0; i < winningCombonations.length; i++) {
    first = winningCombonations[i].slice(0, 1);
    second = winningCombonations[i].slice(1, 2);
    third = winningCombonations[i].slice(2, 3);
    if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === userSign && winFlag === false) {
      $result.textContent = "User won";
      winFlag = true;
    }
  };
};

function isComputerCombinationWinning() {
  if (winFlag === false)
    for (let i = 0; i < winningCombonations.length && breakFlag === false; i++) {
      first = winningCombonations[i].slice(0, 1);
      second = winningCombonations[i].slice(1, 2);
      third = winningCombonations[i].slice(2, 3);
      if ($block[first].textContent === computerSign && $block[second].textContent === computerSign && $block[third].textContent === "") {
        $block[third].textContent = computerSign;
        breakFlag = true;
      }
      else if ($block[first].textContent === computerSign && $block[third].textContent === computerSign && $block[second].textContent === "") {
        $block[second].textContent = computerSign;
        breakFlag = true;
      }
      else if ($block[second].textContent === computerSign && $block[third].textContent === computerSign && $block[first].textContent === "") {
        $block[first].textContent = computerSign;
        breakFlag = true;
      };
    };
}

function isUserCombinationWinning() {
  if (winFlag === false)
    for (let i = 0; i < winningCombonations.length && breakFlag === false; i++) {
      first = winningCombonations[i].slice(0, 1);
      second = winningCombonations[i].slice(1, 2);
      third = winningCombonations[i].slice(2, 3);
      if ($block[first].textContent === userSign && $block[second].textContent === userSign && $block[third].textContent === "") {
        $block[third].textContent = computerSign;
        breakFlag = true;
      }
      else if ($block[first].textContent === userSign && $block[third].textContent === userSign && $block[second].textContent === "") {
        $block[second].textContent = computerSign;
        breakFlag = true;
      }
      else if ($block[second].textContent === userSign && $block[third].textContent === userSign && $block[first].textContent === "") {
        $block[first].textContent = computerSign;
        breakFlag = true;
      };
    };
}

function defineComputerBlock() {
  if (breakFlag === false && winFlag === false)
    for (let i = 0; i < $block.length; i++)
      if ($block[i].textContent === "") {
        $block[i].textContent = computerSign;
        breakFlag = true;
        break;
      };
};

function isComputerAWinner() {
  if (winFlag === false)
    for (let i = 0; i < winningCombonations.length; i++) {
      first = winningCombonations[i].slice(0, 1);
      second = winningCombonations[i].slice(1, 2);
      third = winningCombonations[i].slice(2, 3);
      if ($block[first].textContent === computerSign && $block[second].textContent === computerSign && $block[third].textContent === computerSign && winFlag === false) {
        $result.textContent = "Computer won";
        winFlag = true;
      };
  };
};

$block.forEach(item => {
  item.addEventListener("click", function(){
    breakFlag = false;
    if (item.textContent === "" && winFlag === false) {
      item.textContent = userSign; //если выбранное пользователем место свободно, то на него ставится пользовательский знак
      isUserAWinner(); //если три пользовательских знака стоят в ряд, то пользователь победил
      isComputerCombinationWinning(); //если условие предыдущей функции не выполнено и если два знака компьютера стоят в ряд, а на месте третьего пусто, то на пустое место ставится знак компьютера
      isUserCombinationWinning(); //если условия предыдущих функций не выполнилось и если два пользовательских знака стоят в ряд, а на месте третьего пусто, то на пустое место ставится знак компьютера
      defineComputerBlock(); //если условия предыдущих функций не выполнилось, то знак компьютера ставится на первое свободное место
      isComputerAWinner(); //если три знака компьютера стоят в ряд, то компьютер победил
    };
  })
})

$button.addEventListener("click", function(){
  window.location.reload();
});