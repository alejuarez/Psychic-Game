// Declare Variables
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

var wins = 0;
var losses = 0;
var numGuesses = 9;
var userGuessesArray = [];
var computerChoice = letters[Math.floor(Math.random() * (letters.length - 1))];
console.log(computerChoice);

// UI Functions
// ==============================================================================

function showUserGuesses() {
  document.getElementById('userGuess').innerHTML = userGuessesArray;
  console.log(userGuessesArray);
}

function showNumGuesses() {
  document.getElementById('numOfGuess').innerHTML = numGuesses;
}

function showLosses() {
  document.getElementById('losses').innerHTML = losses;
}

function showWins() {
  document.getElementById('wins').innerHTML = wins;
}
// RESET - Sets inital state of the game

function reset() {
  computerChoice = letters[Math.floor(Math.random() * (letters.length - 1))];
  userGuessesArray = [];
  numGuesses = 9;
  showUserGuesses();
  showNumGuesses();
  showLosses();
  showWins();
  console.log(computerChoice);
  console.log('reset');
}

// before the game starts, call reset to initalize the game
reset();

// validates that the letter entered is in the array ..
document.onkeyup = function(event) {
  userGuess = event.key.toLowerCase();

  if (!letters.includes(userGuess)) {
    alert(
      'Your choice is not a letter, please pick a letter from the alphabet'
    );
  } else if (userGuessesArray.includes(userGuess)) {
    alert('You can only pick the same letter once');
  } else {
    userGuessesArray.push(userGuess);
    numGuesses--;
    showUserGuesses();
    showNumGuesses();
  }

  if (userGuess === computerChoice) {
    wins++;
    //userGuessesArray.push(userGuess);

    showUserGuesses();
    showWins();
    alert('You Win, YAY!!!!');
    reset();
  }

  if (numGuesses === 0) {
    losses++;
    showLosses();
    alert('Sorry, your guess is not correct, try again!');
    reset();
  }
};
