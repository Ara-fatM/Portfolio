console.log('Hello World')
const resetButton = document.querySelector("#restart")
let counter = 0;

function count() {
    counter = counter + 1;
    console.log('Current clicks:' + counter)
}
resetButton.addEventListener("click", count);


const square = document.querySelector('.square');
const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');

// function changeToX(){
//     square.textContent ='X';
//     currentPlayer.textContent ='O';
// }
// function changeToO(){
//     square.textContent ='O';
//     currentPlayer.textContent = 'X';
// }

// function changeSquareValue(){
//     let squareValue = square.textContent;
//     if(squareValue == "X") {
//         changeToO();
//     }else{
//         changeToX();
//     }
// }

// function changeSquare(event){
//     console.log("click", event);
//     const square = event.target;
//     console.log("Square", square);
//     square.textContent = "X";
// }

// square.addEventListener("click", changeSquareValue);

function playTurn(event) {
    const square = event.target;
    console.log('Event Square:', square);


    if (square.textContent === '') {
        square.textContent = currentPlayer.textContent;
    }
    switchPlayers()
}


function switchPlayers() {
    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
}




for (const square of squares) {
    square.addEventListener("click", playTurn)
}



function resetGame() {
    for(const square of squares){
        
        square.textContent = "";
    }
    currentPlayer.textContent = 'X';
}
resetButton.addEventListener("click", resetGame)