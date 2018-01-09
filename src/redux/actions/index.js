
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

export function createCells(size) {
  return dispatch => {
    let arr = new Array(size)
      .fill(undefined)

    dispatch({
      type: CREATE_SIZE,
      board: arr
    })
  }
}
