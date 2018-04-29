import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions } from '../ingredientsList'


export class PriceCalculator extends PureComponent {
  constructor(props) {
    super(props);
    this.calculatePrice = this.calculatePrice.bind(this);
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }

  calculatePrice(ingredient, ingredientObject) {
    const filteredObject = ingredientObject.filter(element =>{return element.name === ingredient[0]})
    if(filteredObject.length >0){
      const ingredientPrice = filteredObject[0].price
      return ingredientPrice
    } else {
      return null
    }
  }

  calculateTotalPrice(base,sauce,toppingone,toppingtwo,toppingthree){
    const baseprice = this.calculatePrice(base, ingredientsOptions)
    const sauceprice = this.calculatePrice(sauce, ingredientsOptions)
    const toppingOnePrice = this.calculatePrice(toppingone, ingredientsOptions)
    const toppingTwoPrice = this.calculatePrice(toppingtwo, ingredientsOptions)
    const toppingThreePrice = this.calculatePrice(toppingthree, ingredientsOptions)

    return baseprice+sauceprice+toppingOnePrice+toppingTwoPrice+toppingThreePrice
  }

  render() {
    return (
      <div className="PriceCalculator">
        <h3>Total price (excluding delivery options): </h3>
        <h2 id="TotalIngredientsPrice">{this.calculateTotalPrice(this.props.pizzaBase, this.props.pizzaSauce, this.props.pizzaTopping1, this.props.pizzaTopping2, this.props.pizzaTopping3)}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      pizzaBase: state.pizzaBase,
      pizzaSauce: state.pizzaSauce,
      pizzaTopping1: state.pizzaTopping1,
      pizzaTopping2: state.pizzaTopping2,
      pizzaTopping3: state.pizzaTopping3,
  }
}

export default connect(mapStateToProps)(PriceCalculator)
