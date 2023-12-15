//Variables
let blue = "X";
let green = "O";
let turn = 0;
let currentPlayer = 0; //0 = Blue | 1 = Red

let gameOver = false;
let tie = true;
let columns = 3;
let rows = 6;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Starter Icon
const iconToggle = document.querySelector('#starter');
iconToggle.addEventListener('click', toggleIcon);

function toggleIcon() {
  const icon = document.getElementById('starterIcon');
  if (icon.innerHTML === "X") {
    icon.innerHTML = "O";
    blue = "O";
    green = "X";
  } else {
    icon.innerHTML = "X";
    blue = "X";
    green = "O";
  }
  resetGame();
};

// Play Button
function playGame() {
    const playButton = document.getElementById("playButton");

    playButton.style.display = "none";
    document.querySelector('.container').style.display = "flex";
    document.querySelector('.connect3SidebarRight').style.display = "flex";
    document.querySelector('.connect3SidebarLeft').style.display = "flex";

}

//Reset Game
function resetGame() {
    let reset;
    turn = 0;
    gameOver = false;
    tie = true;

    let winner = document.getElementById("gameResult");
    winner.innerHTML = "The game is ongoing";
    winner.classList.remove('neutral');
    winner.classList.remove('resultTie');
    winner.classList.remove('resultBlue');
    winner.classList.remove('resultGreen');
    winner.classList.add('neutral');

    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    for (i = 0; i < 3; i++){
      for (j = 0; j < 6; j++) {
        reset = (j * 10) + i;
        let restart = reset.toString(10);
        document.getElementById(restart).innerHTML = '';
        document.getElementById(restart).classList.remove('blue');
        document.getElementById(restart).classList.remove('green');
        document.getElementById(restart).classList.add('gameCell');
        document.getElementById('playerArticle').style.display = "block"; 
    }
  }
};

//Gameplay
//Main
function main(column) {
  if (gameOver) {
    return;
  }

  gameInstance(column);  
}

//cellCheck to make sure not to overwrite other players
function cellCheck(column) {
  let result;
  for (let row = 6; row > 0; row--) {
    let current = ((row - 1) * 10) + column;
    let square = document.getElementById(current);
    if (square.innerHTML == '') {
      result = current;
      break;
    } else if(row == 1 && square.innerHTML != '') {
      alert('This move is invalid');
      result = -1;
      turn--;
    } else {}
  }

  return result;
}

//Game Instance with most player code
function gameInstance(column) {
    let result = cellCheck(column).toString(10);
    let play = document.getElementById(result);
    let playerTurn = document.getElementById('playerDisplay');
    
    let coords = result.split('');
    let row = parseInt(coords[0]);

    if (currentPlayer === 0) {
        currentPlayer = 1;
        turn++;
        board[row][column] = blue;
        play.innerHTML = blue;
        play.classList.add('blue');
        playerTurn.innerHTML = "Green";
        playerTurn.classList.remove('blue');
        playerTurn.classList.remove('neutral');
        playerTurn.classList.add('green');
        //console.log(turn);

    } else if (currentPlayer === 1) {
        currentPlayer = 0;
        turn++;
        board[row][column] = green;
        play.innerHTML = green;
        play.classList.add('green');
        playerTurn.innerHTML = "Blue";
        playerTurn.classList.remove('green');
        playerTurn.classList.remove('neutral');
        playerTurn.classList.add('blue');
        //console.log(turn);
    } else if (turn === 18 && currentPlayer === 0) {
        currentPlayer = 1;
        turn++;
        board[row][column] = blue;
        play.innerHTML = blue;
        play.classList.add('blue');
        playerTurn.innerHTML = "Green";
        playerTurn.classList.remove('blue');
        playerTurn.classList.remove('neutral');
        playerTurn.classList.add('green');
        //console.log(turn);
        tie = checkWinner();
        if (tie) {
        alert(tie);
        tieGame();
        }
        else if (turn === 18 && currentPlayer === 1) {
        currentPlayer = 0;
        turn++;
        board[row][column] = green;
        play.innerHTML = green;
        play.classList.add('green');
        playerTurn.innerHTML = "Blue";
        playerTurn.classList.remove('green');
        playerTurn.classList.remove('neutral');
        playerTurn.classList.add('blue');
        //console.log(turn);
        tie = checkWinner();
        if (tie) {
            alert(tie);
            tieGame();
        }
        }
    }

    checkWinner();
    };

    function checkWinner() {

    //Vertical
    for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows - 2; row++) {
    if (board[row][column] != '') {
        if (board[row][column] == board[row+1][column] && board[row+1][column] == board[row+2][column]) {
        setWinner(row, column);
        tie = false;
        return tie;
        }
    }
    }
    }

    //Horizontal
    for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns - 2; column++){
    if (board[row][column] != '') {
        if (board[row][column] == board[row][column+1] && board[row][column+1] == board[row][column+2]) {
        setWinner(row, column);
        tie = false;
        return tie;
        }
    }
    }
    }

    //Diagonal Up
    for (let row = 0; row < rows - 2; row++) {
    for (let column = 0; column < columns - 2; column++) {
    if (board[row][column] != '') {
        if (board[row][column] == board[row+1][column+1] && board[row+1][column+1] == board[row+2][column+2]) {
        setWinner(row, column);
        tie = false;
        return tie;
        }
    }
    }
    }

    //Diagonal Down
    for (let row = 2; row < rows; row++) {
    for (let column = 0; column < columns - 2; column++) {
    if (board[row][column] != '') {
        if (board[row][column] == board[row-1][column+1] && board[row-1][column+1] == board[row-2][column+2]) {
        setWinner(row, column);
        tie = false;
        return tie;
        }
    }
    }
    }

    return tie;
}

function setWinner(row, column) {
 let winner = document.getElementById("gameResult");
 if (board[row][column] == blue) {
     winner.innerHTML = "Game Over! Blue Wins!";
     winner.classList.remove('neutral');
     winner.classList.remove('resultTie');
     winner.classList.add('resultBlue');
     document.getElementById('playerArticle').style.display = "none";    
 } else if (board[row][column] == green) {
     winner.innerHTML = "Game Over! Green Wins!";
     winner.classList.remove('neutral');
     winner.classList.remove('resultTie');
     winner.classList.add('resultGreen');
     document.getElementById('playerArticle').style.display = "none";
 } else {}
 gameOver = true;
}

function tieGame() {
  let winner = document.getElementById("gameResult");

  winner.innerHTML = "Game Over! It's a Tie";
  winner.classList.remove('neutral');
  winner.classList.add('resultTie');
  document.getElementById('playerArticle').style.display = "none"; 
  
  gameOver = true;
}