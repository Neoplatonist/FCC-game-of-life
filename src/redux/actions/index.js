/**
 * action types
**/
export const CHANGE_CELL = 'CHANGE_CELL'
export const CREATE_SIZE = 'CREATE_SIZE'
export const RANDOMIZER = 'RANDOMIZER'
export const LOCK = 'LOCK'
export const UNLOCK = 'UNLOCK'
export const UPDATE_CYCLES = 'UPDATE_CYCLES'


/**
 * action creators
**/
export function createCells(row, col) {
  return dispatch => {
    let board = []

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        board.push([i, j])
      }
    }

    let cycles = new Array(board.length)
      .fill(0)

    dispatch({
      type: CREATE_SIZE,
      board: board,
      cycles: cycles
    })
  }
}

export function randomizer(row, col) {
  return dispatch => {
    let board = []
    let cycles = []

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        board.push([i, j])

        let rand = Math.ceil(Math.random() * 100)
        rand > 90 || rand < 10 ? cycles.push(1) : cycles.push(0)
      }
    }

    dispatch({
      type: RANDOMIZER,
      board: board,
      cycles: cycles
    })
  }
}

export function updateCycles(cycles) {
  return dispatch => {
    dispatch({
      type: UPDATE_CYCLES,
      cycles: cycles
    })
  }
}

export function changeCell(cell) {
  return (dispatch, getState) => {
    let cycles = getState().gol.cycles.slice()

    switch (cycles[cell]) {
      case 0:
        // change from empty to alive
        cycles[cell] = 1
        break
      case 1:
        // change from alive to empty
        cycles[cell] = 0
        break

      default:
        break
    }

    dispatch({
      type: CHANGE_CELL,
      cycles: cycles
    })

  }
}

export function lock() {
  return dispatch => {
    dispatch({
      type: LOCK,
      lock: true
    })

  }
}

export function unlock() {
  return dispatch => {
    dispatch({
      type: UNLOCK,
      lock: false
    })

  }
}
