var scores, roundScore, activePlayer, gamePlaying, previousDice, winnScore;

// Initialize game
initialize();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (!gamePlaying) {
    return;
  }

  //   // 1. random number
  //   dice = Math.floor(Math.random() * 6) + 1;

  //   // 1.1 check if 2 time 6 in row
  //   if (dice === previousDice) {
  //     scores[activePlayer] = 0;
  //     document.getElementById("score-" + activePlayer).textContent = "0";
  //     nextPlayer();
  //     return;
  //   } else if (dice === 6) {
  //     previousDice = dice;
  //   }

  //   // 2. Display result
  //   var diceDOM = document.querySelector(".dice");
  //   diceDOM.style.display = "block";
  //   diceDOM.src = "dice-" + dice + ".png";

  //   // 3. Update the round score if the rolled number was NOT a 1
  //   if (dice > 1) {
  //     // Add score
  //     roundScore += dice;
  //     document.querySelector("#current-" + activePlayer).textContent = roundScore;
  //   } else {
  //     // next player
  //     nextPlayer();
  //   }

  var diceDOM = document.querySelectorAll(".dice");
  for (var i = 0; i < diceDOM.length; i++) {
    dice = Math.floor(Math.random() * 6) + 1;
    diceDOM[i].style.display = "block";
    diceDOM[i].src = "dice-" + dice + ".png";
    if (dice > 1) {
      // Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (!gamePlaying) {
    return;
  }

  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the  UI
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Check if player won the game
  if (scores[activePlayer] >= winnScore) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    // set playingGame is false
    gamePlaying = false;
  } else {
    // next player
    nextPlayer();
  }
});

/**
 * Next player function
 */
function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;

  previousDice = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  var diceDOM = document.querySelectorAll(".dice");
  for (var i = 0; i < diceDOM.length; i++) {
    diceDOM[i].style.display = "none";
  }
}

/**
 * Initialize game
 */
function initialize() {
  scores = [0, 0];
  roundScore = 0;

  activePlayer = 0;
  gamePlaying = true;

  previousDice = 0;

  winnScore = document.querySelector("#win-score").value;

  // Undefined, 0, null, "" coerced to false
  // Anything else is coerced to true
  if (!winnScore) {
    winnScore = 20;
  }

  //   document.querySelector(".dice").style.display = "none";
  var diceDOM = document.querySelectorAll(".dice");
  for (var i = 0; i < diceDOM.length; i++) {
    diceDOM[i].style.display = "none";
  }

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-new").addEventListener("click", initialize);

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>";

// var x = document.querySelector("#score-" + activePlayer).textContent;
// console.log(x);

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
