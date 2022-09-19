//declare variable of elements we want to select in gamboard class
//establish players to be displayed when won


const cells = document.querySelectorAll('.cell')
const spanTurn = document.querySelector('span')
const restartBtn = document.querySelector('#restart')
console.log(restartBtn)
console.log(spanTurn)
const player1 = 'Player X Won!'
const player2 = 'Player O Won!'
let player = 1;

//forEach loop is iterating over each child cell from cell variable declared earlier
//event listener added to each cell so when the user clicks on one of the cells a conditional statement will run
//player varibale is set to one and if this is true then we will fill in the cells space with the respective X or O
//the span varibale text content will display the next players turn
//then switch the player to 0 so on the next click it will run vice versa


cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        if (player === 1) {
            cell.innerHTML = 'X'
            spanTurn.textContent = "O's"
            player = 0;
        } else {
            cell.innerHTML = 'O'
            spanTurn.textContent = "X's"
            player = 1
        }
    })
})

const checkWinner = () => {

}