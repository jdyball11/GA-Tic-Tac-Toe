//declare variable of elements we want to select in gamboard class
//establish players to be displayed when won


const cells = document.querySelectorAll('.cell')
const spanTurn = document.querySelector('span')
const restartBtn = document.querySelector('#restart')
const div = document.querySelector('div')

const player1 = 'Player X Won!'
const player2 = 'Player O Won!'
let player = 1;


//iterate over each cell 
// cells.forEach((cell) => {
//     //when one of the cells are clicked, the below will run
//     cell.addEventListener('click', (e) => {
//         if (player === 1) {
//             cell.innerHTML = 'X'
//             spanTurn.textContent = "O's"
//             player = 0;
//         } else {
//             cell.innerHTML = 'O'
//             spanTurn.textContent = "X's"
//             player = 1
//         }
//     })
// })

// const playerScore = []
// const checkWinner = () => {
//     cells.forEach((data) => {
//         data.addEventListener('click', () => {
//             console.log('clicked')
//         })
//     })
// }


const playerX = []
const playerO = []

cells.forEach((cell) => {
    //when one of the cells are clicked, the below will run
    cell.addEventListener('click', (e) => {
        if(cell.innerHTML != "") return;
        console.log(cell.dataset.cell)
        if (player === 1) {
            cell.innerHTML = 'X'
            playerX.push(cell.dataset.cell)
            spanTurn.textContent = "O's"
            player = 0;
        } else {
            cell.innerHTML = 'O'
            playerO.push(cell.dataset.cell)
            spanTurn.textContent = "X's"
            player = 1
        }
        
    })
    
})


//if cell 1 / 2/ 3 contain 'X' then player wins

// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [3, 5, 7],
//     [1, 5, 9]
// ]

console.log(cells)

    restartBtn.addEventListener('click', (e) => {
        
        for (let remove of cells) {
            remove.textContent = ''
        }
        
    })




