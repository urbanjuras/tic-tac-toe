const Player = (sign) => {
    this.sign = sign
    
    const getSign = () => {
        return sign
    }
    return { getSign }
}

const gameBoard = () => {
    const board = ['','','','','','','','','']

    const setField = (index, sign) => {
        if (index > board.length) return
        board[index] = sign 
    }
    const getField = (index) => {
        if (index > board.length) return;
        return board[index]
    }
    return { setField, getField }
}
const gameController = () => {
    const playerX = Player('X')
    const playerO = Player('O')
    let round = 1
    let isOver = false

    const playRound = (fieldIndex) => {
        gameBoard.setField(fieldIndex, getCurrentSign())
        if(checkWinner(fieldIndex)){
            isOver = true
            return
        }
        if(round == 9){
            isOver = true
            return
        }
        round++
        display.setMessageElement('Its'+getCurrentSign()+'turn.')
    }
    const getCurrentSign = () => {
        if (round % 2 === 1) return playerX.getSign()
        else return playerO.getSign()
    }
    const getIsOver = () => {
        return isOver
    }
    const checkWinner = (fieldIndex) => {
        const condition = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [3,4,5],
            [6,7,8],
            [6,4,2],
            [2,5,8],
            [1,4,7]
        ]
        return condition
        .filter((combination) => combination.includes(fieldIndex))
        .some((possibleCombination) =>
          possibleCombination.every(
            (index) => gameBoard.getField(index) === getCurrentPlayerSign()
          )
        );
    } 
    return { getIsOver, playRound, }
}
const display = () => {
    const fieldElements = document.querySelectorAll('.field')
    const messageElement = document.getElementById("message");

    fieldElements.forEach((element) => 
        element.addEventListener('click', (e) => {
           if (gameController.getIsOver() || e.target.textContent !== '') return;
           console.log('Klik!')
           gameController.playRound(parseInt(e.target.dataset.index)) // index pozicije na kvadratu
           updateGameBoard()
        })
    );
    const setResultMessage = (winner) => {
        if (winner === "Draw") {
          setMessageElement("It's a draw!");
        } else {
          setMessageElement(`Player ${winner} has won!`);
        }
      };
    
      const setMessageElement = (message) => {
        messageElement.textContent = message;
      };
    const updateGameBoard = () => {
        for(let i = 0; i < fieldElements.length; i++){
            fieldElements[i].textContent = gameBoard.getField(i)
        }
    }
    return { setMessageElement, setResultMessage}
}

const showResult = (result) => {
    if(result == 'Draw'){
        // Izpis sporočila
    }
    else{
        // izpis zmagovalca
    }
}
