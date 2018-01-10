import { 
  CREATE_SIZE,
  HELLO_WORLD,
  RANDOMIZER
} from '../actions'

/**
 * State Initializers
**/
const golState = {
  fps: 120,
  board: [],
  generations: 0,
  seed: 0
}

// Things todo

// Create Grid
// Create FPS
// Create Seed
// Create Filter
//  - underpopulation
//  - overpopulation
//  - reproduction

// State = {
//   generationCounter
//   map: [[], [], [], []]
// }



/**
 * Reducers
**/
export default function gol(state = golState, action) {
  switch (action.type) {
  case HELLO_WORLD:
    return Object.assign({}, state, {
      text: action.text
    })

  case CREATE_SIZE:
    return Object.assign({}, state, {
      board: action.board
    })

  case RANDOMIZER:
    return Object.assign({}, state, {
      board: action.board
    })

  default:
    return state
  }
}
