import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { ingredientsOptions }  from '../ingredientsList'
import {newPrice} from '../actions/price'
import {newChoiceBase} from '../actions/baseChoice'


export class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', price: ''}

    this.handleChange = this.handleChange.bind(this);
    this.findIngredient = this.findIngredient.bind(this);
  }

  handleChange(event) {
    this.props.newChoiceBase(event.target.value)
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
          First of all, pick your base:
          <select onChange={this.handleChange}>
            <option value="25cm NY Style">25cm NY Style € 8,99</option>
            <option value="30cm NY Style">30cm NY Style € 11,49</option>
            <option value="35cm NY Style">35cm NY Style € 13,49</option>
            <option value="20cm NY Style">20cm NY Style € 6,45</option>
          </select>
        </label>
        <p>total:{this.props.newChoiceBase}</p>
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
  return {
    prices: reduxState.prices,
    name: reduxState.name
  }
}

export default connect(mapStateToProps, {newPrice, newChoiceBase})(Base)
