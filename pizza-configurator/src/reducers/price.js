import { NEW_PRICE } from '../actions/price'
// import {ingredientsOptions} from '../ingredientsList'
//
// let initialState=0;
//
//
// export default (state = initialState, { type, payload } = {}) => {
//     switch(payload) {
//       case NEW_CHOICE:
//       for(var i = 0; i < ingredientsOptions.length; i++) {
//       if (ingredientsOptions.price === this.state.value) {
//         let totalPrices = []
//         totalPrices.push(parseFloat(ingredientsOptions[i].price))
//
//         return totalPrices} } break
//       default:
//       return state
//     }}
let initialState=[];


export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case NEW_PRICE:
      // if (ingredientsOptions.name === this.state.value) {
      return state.concat(payload)
    default:
      return state
    }}
