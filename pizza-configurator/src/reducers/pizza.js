import { NEW_CHOICE } from '../actions/choice'
// import {ingredientsOptions} from '../ingredientsList'

let initialState=[];


export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_CHOICE:
      // if (ingredientsOptions.name === this.state.value) {
      return state.concat(payload)
    default:
      return state
    }}
