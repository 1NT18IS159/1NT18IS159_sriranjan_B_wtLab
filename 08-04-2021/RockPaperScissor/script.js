const btns = document.querySelectorAll("button");
const result = document.getElementById("result");
const playerPic = document.getElementById("player");
const compPic = document.getElementById("computer");

// 1 = rock, 2 = paper, 3 = scissors
const vals = ["rock", "paper", "scissors"];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(btn.id);

    let player = parseInt(btn.id);

    const comp = Math.floor(Math.random() * 3) + 1;

    const choice = document.querySelector(".comp-choice");

    choice.innerHTML = `Computer took ${vals[comp - 1]}`;

    playerPic.src = `https://k4u5h4l.github.io/RockPaperScissors/images/${
      vals[player - 1]
    }.png`;
    compPic.src = `https://k4u5h4l.github.io/RockPaperScissors/images/${
      vals[comp - 1]
    }.png`;

    if (player == comp) {
      result.innerHTML = "DRAW";
    } else if (player == 1 && comp == 2) {
      result.innerHTML = "YOU LOST!";
    } else if (player == 2 && comp == 3) {
      result.innerHTML = "YOU LOST!";
    } else if (player == 1 && comp == 3) {
      result.innerHTML = "YOU WON!";
    } else if (player == 3 && comp == 2) {
      result.innerHTML = "YOU WON!";
    } else {
      result.innerHTML = "YOU WON!";
    }
  });
});
