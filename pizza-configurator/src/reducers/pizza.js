import { NEW_CHOICE } from '../actions/choice'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE:
      return state.concat(payload)
    default:
      return state
    }}
