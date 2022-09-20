//declare variable of elements we want to select in gamboard class
//establish players to be displayed when won


const cells = document.querySelectorAll('.cell')
const spanTurn = document.querySelector('span')
const restartBtn = document.querySelector('#restart')
const div = document.querySelector('div')

const playerXScore = 0
const playerOScore = 0
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


let playerX = []
let playerO = []



cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        const dataSet = parseInt(e.target.dataset.cell)
        
        if(cell.innerHTML != "") return;
    
            if (player === 1) {
                cell.innerHTML = 'X'
                playerX.push(dataSet)
                spanTurn.textContent = "O's"
                player = 0;
                winner(playerX)
            } else {
                cell.innerHTML = 'O'
                playerO.push(dataSet)
                spanTurn.textContent = "X's"
                player = 1
                winner(playerO)
            }
       
    })
    
})

//when reset button is clicked loop will set text content to an empty string

restartBtn.addEventListener('click', (e) => {  
    //looping over every cell
    for (let remove of cells) {
        remove.textContent = ''
    }
    spanTurn.textContent = ''
    player = 1
})



const winner = (player) => {
  // Pull out each array
winningCombo.forEach((e) => {
    
  // Check if player markings include any of the winning combos. Assign the boolean result to var result.
  let result = e.every(element => {
    
    return player.includes(element)
  })
  // If they do, check the result var and return out of the forEach loop as soon as it finds one match.
  if (result === true) {
    console.log('winner')
    return;
  } 
  })
}




const checkForDraw = () => {
    cells.forEach((e) => {
        if (e.textContent !== "") {
            return true
            
        }
    })
}
checkForDraw()




       
