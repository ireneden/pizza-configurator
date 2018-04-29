import { NEW_CHOICE_TOPPINGS } from '../actions/toppingsChoice'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE_TOPPINGS:
      return state.concat(payload)
    default:
      return state
    }}
