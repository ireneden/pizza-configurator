import { NEW_PRICE } from '../actions/price'


export default (state = 0, action) => {
    switch(action.type) {
      case NEW_PRICE: {
        return state = state+action.payload
      }
    default:
      return state
    }}
