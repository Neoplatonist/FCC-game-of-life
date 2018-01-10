import { 
  CHANGE_CELL,
  CREATE_SIZE,
  RANDOMIZER,
  LOCK,
  UNLOCK
} from '../actions'

/**
 * State Initializers
**/
export const golState = {
  board: [],
  cycles: [],
  fps: 120,
  generations: 0,
  lock: false
}

// Things todo

// Create FPS
// Create Filter
//  - underpopulation
//  - overpopulation
//  - reproduction

/**
 * Reducers
**/
export default function gol(state = golState, action) {
  switch (action.type) {
    case CHANGE_CELL:
      return Object.assign({}, state, {
        cycles: action.cycles
      })

    case CREATE_SIZE:
      return Object.assign({}, state, {
        board: action.board,
        cycles: action.cycles
      })

    case RANDOMIZER:
      return Object.assign({}, state, {
        board: action.board,
        cycles: action.cycles
      })

    case LOCK:
      return Object.assign({}, state, {
        lock: action.lock
      })

    case UNLOCK:
      return Object.assign({}, state, {
        lock: action.lock
      })

  default:
    return state
  }
}
