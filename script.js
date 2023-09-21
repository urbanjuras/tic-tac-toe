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
        return board[index] = sign 
    }
    const getField = (index) => {
        return board[index]
    }
    return {setField, getField}
}
const gameController = () => {
    const playerX = Player('X')
    const playerO = Player('O')
}