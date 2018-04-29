import { NEW_CHOICE_TOPPINGS3 } from '../actions/toppingsChoice3'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE_TOPPINGS3:
      return initialState.concat(payload)
    default:
      return state
    }}
