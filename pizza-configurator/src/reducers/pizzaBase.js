import { NEW_CHOICE_BASE } from '../actions/baseChoice'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE_BASE:
      return initialState.concat(payload)
    default:
      return state
    }}
