
/**
 * action types
 */

export const HELLO_WORLD = 'HELLO_WORLD'

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
