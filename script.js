

const cells = document.querySelectorAll('.cell')
let spanScoreTurn = document.querySelector('#player-position')
const swanSpan = document.querySelector('#swan-score')
const geelongSpan = document.querySelector('#geelong-score')
const restartBtn = document.querySelector('#restart')
const div = document.querySelector('div')
const pointerRemove = document.querySelectorAll('.pointer')
const clock = document.querySelector('.timer')
const container = document.querySelector('.container')
const qtrButton = document.querySelector('.quarter-button')
const qtrHeading = document.querySelector('.quarter-heading')
const popup = document.querySelector('.popup')
const finalHeading = document.querySelector('.final')
const restartGameBtn = document.querySelector('.start-over')

let quarterbutton = 2
let quarterHeading = 1
let seconds = 15; 


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

//when qtr button appears, heading and button increase respetive to the qtr. new player will start and board is enabled.

const buttonChange = () => {

    qtrButton.addEventListener('click', (e) => {
        
        quarterHeading++
        quarterbutton++
        seconds = 15
        restartBtn.classList.remove('pointer')
        qtrHeading.textContent = `Quarter ${quarterHeading}`
        for (let remove of cells) {
            remove.textContent = ''
            remove.classList.remove('pointer')
        }
        if (quarterHeading % 2 !== 0) {
                player = 1
                spanScoreTurn.textContent = "Sydney's Turn" 
            } else {
                player = 0
                spanScoreTurn.textContent = "Geelong's Turn"
            }
        playerX = []
        playerO = []
        playerXStatus = false
        playerOStatus = false
        resetTimer()
    
})
}
buttonChange()

//when timer reaches 0, clearinterval to kill timer. end of quarter button appears and board is disabled 
const resetTimer = () => {
     qtrButton.setAttribute('style', 'display: none') 
        const timer = setInterval(() => {
            clock.textContent = `00:${seconds}`
                if (seconds === 0) {
                    clearInterval(timer)
                    qtrButton.style.display = 'block'
                    qtrButton.textContent = `Start Quarter ${quarterbutton}`
                    spanScoreTurn.textContent = `End of Quarter ${quarterHeading}`
                    restartBtn.classList.add('pointer')
                    endGamePointer()
                    checkFinalWinner()
                return
        }           
                    
        seconds--;

    }, 1000)
}



//event listener set for all cells
//when player selects cell and player is 1 then the text content will set X in the box
//then push each dataset (cell number) into playerX/O array
//checkForWinner function runs
//checkForDraw function runs
//then player is set to 0 to switch turns
//first if statement checks whether any boxes contain an empty string. if they dont then break out of condition.

const gamePlay = () => {
    resetTimer()
cells.forEach((cell) => {
    
    cell.addEventListener('click', (e) => {
        const dataSet = parseInt(e.target.dataset.cell)
        
        resetGame()
        if(cell.innerHTML != "") return;
    
            if (player === 1) {
                cell.innerHTML = 'X'
                playerX.push(dataSet)
                spanScoreTurn.textContent = "Geelong's Turn"
                checkForWinner(playerX)
                checkForDraw()
                player = 0
                return
            } else {
                cell.innerHTML = 'O'
                playerO.push(dataSet)
                spanScoreTurn.textContent = "Sydney's Turn"
                checkForWinner(playerO)
                checkForDraw()
                player = 1
                return
                
            }
            
    });     
})
}

gamePlay()


//when reset button is clicked loop will set text content to an empty string
//will reset text in cells and remove pointer class from all cells
//players arrays are reset to an empty array
//Player is returned to player 1 so X starts

const resetGame = () => {
restartBtn.addEventListener('click', (e) => {  

    for (let remove of cells) {
        remove.textContent = ''
        //Removing all pointer classes from cells
        remove.classList.remove('pointer')
    }
    if (player === 1) {
        spanScoreTurn.textContent = 'Sydney Starts'
    } else if (player === 0) {
        spanScoreTurn.textContent = 'Geelong Starts'
    }
    
    playerX = []
    playerO = []
    playerOStatus = false
    playerXStatus = false
  
    })

}



//forEach iterates over the winnngCombo array.
//an every method then checks each individual sub array for the values where we compare the player choices which contain the datasets (cells selected in an array)
//if any of the cells the player choose include one of the combinations in the winningcombo then true will be returned to the result varibale
//if result is true and player is equal to 1 or 0 then this will decide a winner
//player X/O will be displayed in the html
//the score of eah player is incremented when they win
//endgamepointer runs


const checkForWinner = (playerWinner) => {
  
  winningCombo.forEach((e) => {
    
    let result = e.every(element => {
    return playerWinner.includes(element)
    })
    if (result === true) {
        if (player === 1) {
            spanScoreTurn.textContent = 'Sydney Scored!'
            playerXStatus = true
            playerXScore++
            endGamePointer()
           return
        } else if (player === 0){
            spanScoreTurn.textContent = 'Geelong Scored!'
            playerOStatus = true
            playerOScore++
            endGamePointer()
            return
        }
    }  
    })
    playerScores(playerOScore, playerXScore)
  }



// Check if player markings include any of the winning combos. Assign the boolean result to var result.
    // If they do, check the result var and return out of the forEach loop as soon as it finds one match.

//if all cells are full, then a tie will be called
const checkForDraw = () => {
    let count = playerX.length + playerO.length
    if (count === 9) {
        if (playerOStatus === true) {

            spanScoreTurn.textContent = "Geelong Scored!"

        } else if (playerXStatus === true) {

            spanScoreTurn.textContent = "Sydney Scored!"
 
        } else {
            spanScoreTurn.textContent = "It's a Draw!"
        }
    }
    }



//increments team/player score
const playerScores = (scoreO, scoreX) => {
    geelongSpan.textContent = scoreO
    swanSpan.textContent = scoreX
}



//prevents players from clicking on cells after winner is called
const endGamePointer = () => {
    cells.forEach((cell) => { 
        cell.classList.add('pointer')
            
    })     
}

//checks in quarter is equal to 4. If true, will display respective and run restart game button
const checkFinalWinner = () => {
    
    if (quarterHeading === 4) {
        if (playerOScore > playerXScore) {
            popup.style.display = 'block'
            finalHeading.textContent = `Geelong won the Grand Final!`
            restartGameButton()
         } else if (playerOScore < playerXScore) {
            popup.style.display = 'block'
            finalHeading.textContent = `Sydney won the Grand Final!`
            restartGameButton()
        } else {
            popup.style.display = 'block'
            finalHeading.textContent = `It's a Draw! Jesus! Play again`
            restartGameButton()
        }
       
}
}


//resets all scores, quarters and the board
const restartGameButton = () => {
    restartGameBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        for (let remove of cells) {
            remove.textContent = ''
            remove.classList.remove('pointer')
        }
        restartBtn.classList.remove('pointer')
        quarterHeading = 1
        quarterbutton = 2
        playerXScore = 0
        playerOScore = 0
        seconds = 15
        player = 1
        spanScoreTurn.textContent = 'Player X Starts'
        qtrHeading.textContent = `Quarter ${quarterHeading}`
        playerX = []
        playerO = []
        resetTimer()
        playerScores(0, 0)
        
    })
}