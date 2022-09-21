//declare variable of elements we want to select in gamboard class
//establish players to be displayed when won


const cells = document.querySelectorAll('.cell')
const spanScoreTurn = document.querySelector('#player-position')
const swanSpan = document.querySelector('#swan-score')
const geelongSpan = document.querySelector('#geelong-score')
const restartBtn = document.querySelector('#restart')
const div = document.querySelector('div')
const pointerRemove = document.querySelectorAll('.pointer')
const clock = document.querySelector('.timer')
console.log(clock)


playerXStatus = false
playerOStatus = false
let playerX = []
let playerO = []
let playerXScore = 0
let playerOScore = 0
let player = 1;


const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]
let seconds = 5;   
    const timer = setInterval(() => {
        clock.textContent = `00:${seconds}`
        if (seconds === 0) {
            clearInterval(timer)
            // killTime()
        }
        seconds--;

    }, 1000)





//when player selects cell and player equals

const startGame = () => {

cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        const dataSet = parseInt(e.target.dataset.cell)
        console.log(playerO)
        console.log(playerX)
        if(cell.innerHTML != "") return;
    
            if (player === 1) {
                cell.innerHTML = 'X'
                playerX.push(dataSet)
                spanScoreTurn.textContent = "Player O's Turn"
                checkForWinner(playerX)
                checkForDraw()
                player = 0;
                // console.log(playerX)
            } else {
                cell.innerHTML = 'O'
                playerO.push(dataSet)
                spanScoreTurn.textContent = "Player X's Turn"
                checkForWinner(playerO)
                checkForDraw()
                player = 1
                
            }
            
    });     
    
    // countDown()
})
}
startGame()



//when reset button is clicked loop will set text content to an empty string
//will reset text in cells and remove pointer class from all cells
//players arrays are reset to an empty array
//Player is returned to player 1 so X starts

restartBtn.addEventListener('click', (e) => {  
    //looping over every cell
    for (let remove of cells) {
        remove.textContent = ''
        remove.classList.remove('pointer')
    }
    spanScoreTurn.textContent = 'Player X Starts'
    playerX = []
    playerO = []
    player = 1
})



const checkForWinner = (playerWinner) => {
    // Pull out each array
  winningCombo.forEach((e) => {
      
    // Check if player markings include any of the winning combos. Assign the boolean result to var result.
    let result = e.every(element => {
    return playerWinner.includes(element)
    })
    // If they do, check the result var and return out of the forEach loop as soon as it finds one match.
    if (result === true) {
        if (player === 1) {
            spanScoreTurn.textContent = 'Sydney Scored!'
            playerXStatus === true
            playerXScore++
            console.log(playerXScore)
            endGamePointer()
           return
        } else if (player === 0){
            spanScoreTurn.textContent = 'Geelong Scored!'
            playerOStatus === true
            playerOScore++
            console.log(playerOScore)
            endGamePointer()
            return
        }
    }  
    })
    playerScores(playerOScore, playerXScore)
  }

//if all cells are full, then a tie will be called
const checkForDraw = () => {
    let count = playerX.length + playerO.length
    if (count === 9) {
        spanScoreTurn.textContent = "It's a Draw!"
    }
    playerOStatus = true
    playerXStatus = true

}

//increments team/player score
const playerScores = (scoreO, scoreX) => {
    if (scoreO) {
        geelongSpan.textContent = scoreO
    } else if (scoreX) {
        swanSpan.textContent = scoreX
    }
}

//prevents players from clicking on cells after winner is called
const endGamePointer = () => {
    cells.forEach((cell) => { 
        cell.classList.add('pointer')
    })     
}

const grandFinalWinner = () => {
    
}

// const countDown = () => {
//     let seconds = 60;
//     timer = setInterval(() => {
//         clock.textContent = `00:${seconds}`
//         seconds--;
//     }, 1000)
    
// }



//switch between players at beginning of each qtr