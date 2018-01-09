import { 
  HELLO_WORLD,
  CREATE_SIZE
} from '../actions'

/**
 * State Initializers
**/
const golState = {
  fps: 120,
  board: [],
  seed: 0,
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

  default:
    return state
  }
}


// export const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VISIBILITY_FILTER__SHOW_ACTIVE:
//       return todos.filter(todo => !todo.completed)
//     case VISIBILITY_FILTER__SHOW_COMPLETED:
//       return todos.filter(todo => todo.completed)
//     case VISIBILITY_FILTER__SHOW_ALL:
//     default:
//       return todos
//   }
// }
