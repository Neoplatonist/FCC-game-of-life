
/**
 * action types
 */

export const HELLO_WORLD = 'HELLO_WORLD'
export const CREATE_SIZE = 'CREATE_SIZE'

/**
 * action creators
 */

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
