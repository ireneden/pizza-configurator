import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'
import {newPrice} from '../actions/price'
import {newChoiceToppings2} from '../actions/toppingsChoice2'


export class Toppings2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', price: ''}

    this.handleChange = this.handleChange.bind(this);
    this.findIngredient = this.findIngredient.bind(this);}

    handleChange(event) {
      this.props.newChoiceToppings2(event.target.value)
      const ingredient = ingredientsOptions.filter(element =>{return element.name === event.target.value})
      const ingredientPrice = ingredient[0].price
      this.props.newPrice(ingredientPrice)
    }

    findIngredient(ingredient) {ingredientsOptions.filter(element =>{return element.name === ingredient})
    }

  render() {
    return (
      <div>
        <label>
          Select your second topping:
          <select onChange={this.handleChange}>
            <option value="Pineapple">Pineapple</option>
            <option value="Corn">Corn</option>
            <option value="Olives">Olives (green)</option>
            <option value="RedOnions">Red onions</option>
            <option value="Spinach">Spinach</option>
            <option value="CherryTomatoes">Cherry tomatoes</option>
            <option value="Chicken">Chicken</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    price: reduxState.price,
    name: reduxState.name
  }
}

export default connect(mapStateToProps, {newPrice, newChoiceToppings2})(Toppings2)