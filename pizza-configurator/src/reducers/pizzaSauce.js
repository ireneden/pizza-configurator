import { NEW_CHOICE_SAUCE } from '../actions/sauceChoice'

let initialState=[];

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE_SAUCE:
      return initialState.concat(payload)
    default:
      return state
    }}
