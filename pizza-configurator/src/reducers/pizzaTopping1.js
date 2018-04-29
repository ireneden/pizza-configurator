import { NEW_CHOICE_TOPPINGS1 } from '../actions/toppingsChoice1'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE_TOPPINGS1:
      return state.concat(payload)
    default:
      return state
    }}
