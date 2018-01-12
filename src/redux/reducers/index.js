import { 
  ADD_GENERATION,
  CHANGE_CELL,
  CREATE_CELLS,
  RANDOMIZER,
  LOCK,
  UNLOCK,
  UPDATE_CYCLES
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

/**
 * Reducers
**/
export default function gol(state = golState, action) {
  switch (action.type) {
    case ADD_GENERATION:
      return Object.assign({}, state, {
        generations: action.generations
      })

    case CHANGE_CELL:
      return Object.assign({}, state, {
        cycles: action.cycles
      })

    case CREATE_CELLS:
      return Object.assign({}, state, {
        board: action.board,
        cycles: action.cycles,
        generations: 0
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
    
    case UPDATE_CYCLES:
      return Object.assign({}, state, {
        cycles: action.cycles,
        generations: action.generations
      })

  default:
    return state
  }
}
