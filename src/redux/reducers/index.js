import { 
  HELLO_WORLD
} from '../actions'

/**
 * State Initializers
 */
const golState = {
  text: 'test'
}


 /**
 * Reducers
 */
export default function gol(state = golState, action) {
  switch (action.type) {
  case HELLO_WORLD:
    return Object.assign({}, state, {
      text: action.text
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
