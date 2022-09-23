

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
console.log(restartGameBtn)

let quarterbutton = 2
let quarterHeading = 1
let seconds = 30; 


playerXStatus = false
playerOStatus = false
let playerX = []
let playerO = []
let playerXScore = 0
let playerOScore = 0
let player = 1;
console.log(playerOScore)
console.log(playerXScore)

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



// const buttonChange = () => {}

    qtrButton.addEventListener('click', (e) => {
        
        quarterHeading++
        quarterbutton++
        // console.log(quarter)
        seconds = 30
        restartBtn.classList.remove('pointer')
        qtrHeading.textContent = `Quarter ${quarterHeading}`
        for (let remove of cells) {
            remove.textContent = ''
            remove.classList.remove('pointer')
        }

        if (quarterHeading % 2 !== 0) {
                // console.log(`Sydney ${quarterHeading}`)
                player = 1
                spanScoreTurn.textContent = "Player X's Turn" 
                
                console.log(`Sydney ${player}`)
            } else {
                // console.log(`geelong ${quarterHeading}`)
                player = 0
                spanScoreTurn.textContent = "Player O's Turn"
                
                console.log(`Geelong ${player}`)
            }
            console.log("qtrButton")
        
        playerX = []
        playerO = []
        
        resetTimer()
        
})



const resetTimer = () => {
     qtrButton.setAttribute('style', 'display: none') 
        const timer = setInterval(() => {
            clock.textContent = `00:${seconds}`
                if (seconds === 0) {
                    clearInterval(timer)
                    // qtrButton.setAttribute('stlye', 'display: block')
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
                spanScoreTurn.textContent = "Player O's Turn"
                checkForWinner(playerX)
                checkForDraw()
                player = 0;
                return
            } else {
                cell.innerHTML = 'O'
                playerO.push(dataSet)
                spanScoreTurn.textContent = "Player X's Turn"
                checkForWinner(playerO)
                checkForDraw()
                player = 1
                return
                
            }
            
    });     
})
}

gamePlay()

// const beginGame = () => {
//     cells.forEach((event) => {
//         event.addEventListener('click', gamePlay)
//     })
// }

// beginGame()


//when reset button is clicked loop will set text content to an empty string
//will reset text in cells and remove pointer class from all cells
//players arrays are reset to an empty array
//Player is returned to player 1 so X starts

const resetGame = () => {
restartBtn.addEventListener('click', (e) => {  
    //looping over every cell
    for (let remove of cells) {
        remove.textContent = ''
        remove.classList.remove('pointer')
    }
    spanScoreTurn.textContent = 'Player X Starts'
    playerX = []
    playerO = []
    // player = 1
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
    geelongSpan.textContent = scoreO
    swanSpan.textContent = scoreX
}

//prevents players from clicking on cells after winner is called
const endGamePointer = () => {
    cells.forEach((cell) => { 
        cell.classList.add('pointer')
        
    })     
}

const checkFinalWinner = () => {
    
    if (quarterHeading === 4) {
        if (playerOScore > playerXScore) {
            popup.style.display = 'block'
            finalHeading.textContent = `Geelong won the Grand Final!`
            restartGameButton()
         } else if (playerOScore < playerXScore) {
            console.log("Sydney Won the GF")
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





// Consider changing the start player every round



console.log(playerOScore)
console.log(playerXScore)

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
        seconds = 30
        player = 1
        spanScoreTurn.textContent = 'Player X Starts'
        qtrHeading.textContent = `Quarter ${quarterHeading}`
        playerX = []
        playerO = []
        console.log(`geelong ${playerOScore}`)
        console.log(`sydney ${playerXScore}`)
        resetTimer()
        playerScores(0, 0)
        
    })
}