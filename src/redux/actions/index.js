
/**
 * action types
**/
export const CREATE_SIZE = 'CREATE_SIZE'
export const HELLO_WORLD = 'HELLO_WORLD'
export const RANDOMIZER = 'RANDOMIZER'


/**
 * action creators
**/
export function getHello() {
  return dispatch => {
    dispatch({
      type: HELLO_WORLD,
      text: 'Hello, World!'
    })
  }
}

export function createCells(row, col) {
  return dispatch => {
    let board = []

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        board.push({
          coords: [i, j],
          type: 0
        })
      }
    }

    dispatch({
      type: CREATE_SIZE,
      board: board
    })
  }
}

export function randomizer(row, col) {
  return dispatch => {
    let board = []

    // let min = 0
    // let max = row * col
    // let rand = Math.floor(Math.random() * (max - min + 1)) + min

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        let rand = Math.ceil(Math.random() * 100)
        let type = 0

        if (rand > 90 || rand < 10) {
          type = 1
        }

        board.push({
          coords: [i, j],
          type: type
        })
      }
    }

    dispatch({
      type: CREATE_SIZE,
      board: board
    })
  }
}
