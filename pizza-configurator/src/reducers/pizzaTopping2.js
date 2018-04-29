import { NEW_CHOICE_TOPPINGS2 } from '../actions/toppingsChoice2'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE_TOPPINGS2:
      return state.concat(payload)
    default:
      return state
    }}
